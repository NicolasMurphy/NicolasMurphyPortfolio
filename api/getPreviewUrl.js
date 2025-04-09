import * as cheerio from "cheerio";

export default async function handler(req, res) {
  const { spotifyUrl } = req.query;

  if (!spotifyUrl) {
    return res.status(400).json({ error: "Missing Spotify URL" });
  }

  try {
    const html = await fetch(spotifyUrl)
      .then((response) => response.text())
      .then((data) => data);
    const $ = cheerio.load(html);

    const scdnLinks = new Set();
    $("*").each((_, el) => {
      const attrs = el.attribs;
      Object.values(attrs).forEach((val) => {
        if (val && val.includes("p.scdn.co")) {
          scdnLinks.add(val);
        }
      });
    });

    const urls = Array.from(scdnLinks);
    if (urls.length > 0) {
      res.status(200).json({ previewUrl: urls[0] });
    } else {
      res.status(404).json({ error: "No preview URL found" });
    }
  } catch (error) {
    console.error("Scraping error:", error.message);
    res.status(500).json({ error: "Failed to scrape preview URL" });
  }
}
