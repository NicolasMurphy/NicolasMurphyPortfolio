export const refreshAccessToken = async (setAccessToken) => {
  try {
    const response = await fetch("/api/getAccessToken");

    if (response.ok) {
      const data = await response.json();
      setAccessToken(data.access_token);
    } else {
      console.error("Error refreshing access token:", response.status);
    }
  } catch (error) {
    console.error("Error refreshing access token:", error);
  }
};

export const getRandomTrack = async (
  accessToken,
  setTrack,
  setIsLoading,
  resetAudio
) => {
  try {
    setIsLoading(true);
    let randomTrack = null;
    let previewUrl = null;

    while (!randomTrack || !previewUrl) {
      const searchTerm = await fetch(
        "https://random-word-api.vercel.app/api?words=1"
      )
        .then((response) => response.json())
        .then((data) => data[0]);

      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(
          searchTerm
        )}&type=track&limit=1`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        console.error("Spotify API error:", response.status);
        setIsLoading(false);
        return;
      }

      const data = await response.json();
      const track = data.tracks.items[0];

      if (!track) continue;

      const spotifyUrl = track.external_urls.spotify;

      try {
        const previewRes = await fetch(
          `/api/getPreviewUrl?spotifyUrl=${encodeURIComponent(spotifyUrl)}`
        );

        if (previewRes.ok) {
          const previewData = await previewRes.json();
          previewUrl = previewData.previewUrl;

          if (previewUrl) {
            randomTrack = { ...track, preview_url: previewUrl };
          }
        } else {
          console.error("Error fetching preview URL:", previewRes.status);
        }
      } catch (error) {
        console.error("Error contacting preview API:", error);
      }
    }

    setTrack(randomTrack);
    resetAudio();
    setIsLoading(false);
  } catch (error) {
    console.error("Error retrieving random track:", error);
    setIsLoading(false);
  }
};
