import { Link } from "react-router-dom";
import WaveformPlayer from "./WaveformPlayer";

export default function ExploringProteinMusic() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-0 mt-16 fade-in">
      <h1 className="text-4xl font-bold mb-6">Exploring Protein Music</h1>
      <p className="mb-6 italic text-base-content/70">
        Turning spectra data into audio
      </p>

      <blockquote className="bg-base-200 border-l-4 border-primary pl-6 pr-4 py-4 rounded-md shadow-md">
        <p className="italic">
          In 1999, Cyril Smith, a Stanford professor of physics, played the
          (cacophonic) music of thyroxin during a convention, but the
          performance was immediately suspended because many people in the
          audience suddenly experienced tachycardia.
        </p>
        <footer className="mt-2 text-sm text-right text-base-content/60">
          —{" "}
          <cite>
            Reported in <em>The Basic Code of the Universe</em> by Massimo Citro
          </cite>
        </footer>
      </blockquote>

      <div className="space-y-5 leading-relaxed text-base-content text-lg">
        <p>
          That quote sent me down a rabbit hole. It turns out this concept is
          called <strong>Protein Music</strong>, which has been explored since
          the 1980s. According to{" "}
          <a
            className="link link-primary"
            href="https://en.wikipedia.org/wiki/Protein_music"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wikipedia
          </a>
          :
        </p>

        <blockquote className="border-l-4 border-primary pl-4 italic">
          "Protein music or, more broadly, genetic music (including DNA music)
          is a musical technique where music is composed by converting protein
          sequences or DNA sequences to musical notes... Applications for
          genetic music proposed in the scientific literature include aids to
          memorization and education."
        </blockquote>

        <p>
          Notable contributors include Susumu Ohno, who proposed that repetition
          is fundamental to both protein evolution and music composition.
          Others, like Joël Sternheimer, even theorized that music could
          influence protein synthesis, though such claims remain controversial.
        </p>

        <p>
          Researchers have also observed that converting DNA and protein
          sequences to sound can reveal patterns and periodicities not easily
          seen through traditional analysis. This makes protein music not just a
          compositional tool, but also a unique method of data exploration.
        </p>

        <blockquote className="bg-base-200 border-l-4 border-primary pl-6 pr-4 py-4 rounded-md shadow-md">
          <p className="italic">
            Everything vibrates and emits elastic waves that can be translated
            into sound, so everything plays music with those little bells that
            are molecules... Each substance has its own sound.
          </p>
          <footer className="mt-2 text-sm text-right text-base-content/60">
            —{" "}
            <cite>
              Massimo Citro, <em>The Basic Code of the Universe</em>
            </cite>
          </footer>
        </blockquote>

        <h2 className="text-2xl font-bold mt-10">Why I Got Interested</h2>
        <p>
          When I first stumbled across the excerpt at the top, I was immediately
          interested. Was it possible to influence your hormonal state through
          sound? How did he play the sounds of thyroxin? As someone interested
          in more experimental music, I knew I had to explore this idea further.
        </p>

        <h2 className="text-2xl font-bold mt-10">
          My First Attempts (Max/MSP)
        </h2>
        <p>
          I started manually constructing "protein music" in{" "}
          <strong>Max/MSP</strong>, assigning frequencies and volume to
          estimated molecular weights. It was quite a manual process, and not
          completely accurate. I needed real data — something more precise, and
          a way to automate the process.
        </p>

        <h2 className="text-2xl font-bold mt-10">
          Discovering Mass Spectrum Files
        </h2>
        <p>
          Eventually, I found <code>.txt</code> files from the{" "}
          <a
            className="link link-primary"
            href="https://hmdb.ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            Human Metabolome Database (HMDB)
          </a>{" "}
          that contained
          <strong> mass spectrum data</strong> — actual m/z (mass/charge) values
          and their intensities.
        </p>

        <p>
          I wrote a <strong>Python script</strong> to parse the values and turn
          them into
          <code>.wav</code> files. I called it the:
        </p>

        <div className="bg-base-200 p-4 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">
            🎧 Mass Spectrum to Audio Converter
          </h3>
          <p className="mb-2">
            A project for converting mass spectrum <code>.txt</code> files into
            <code>.wav</code> files.
          </p>
          <a
            href="https://github.com/NicolasMurphy/mass-spectrum-to-audio-converter"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-primary mt-2"
          >
            View on GitHub
          </a>
        </div>

        <h2 className="text-2xl font-bold mt-10">What It Sounded Like</h2>
        <p>The results? Mostly strange.</p>
        <p>
          Most molecules ended up sounding metallic, glitchy, or bell-like —
          interesting, but not very usable in my compositions. But one stood
          out:
        </p>

        <p>Oxytocin. It sounded surprisingly like a harpsichord.</p>

        <h2 className="text-2xl font-bold mt-10">
          Bach's English Suite No. 3 Prelude (Oxytocin)
        </h2>
        <p>
          Since it sounded so similar to a harpsichord, it felt natural to pair
          it with a piece of Bach. I sampled the oxytocin-generated tone and
          used it to render{" "}
          <em>English Suite No. 3 in G minor Prelude (BWV 808)</em> by Johann
          Sebastian Bach.
        </p>

        <WaveformPlayer src="/Audio/OxytocinBach2.wav" />

        <p className="text-sm text-base-content/60">
          Based on a MIDI sequence by Gary Bricault. Original source:{" "}
          <a
            href="http://www.jsbach.net/midi/midi_english_suites.html"
            className="link link-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            jsbach.net
          </a>
        </p>

        <h2 className="text-2xl font-bold mt-10">Final Thoughts</h2>
        <p>
          I was pretty dedicated to this idea at first, I had plans to make an
          album titled "Sonus Hormonae", using sounds entirely from spectra
          data. But I found it too restrictive of a concept — difficult to make
          the resulting music enjoyable for me to actually listen to. However I
          still find this idea interesting. The possibility that these sounds
          could have a real effect on our physiological state I believe is still
          worth exploring.
        </p>
        <p>
          For now, I will continue to explore other musical avenues, but I may
          come back to this concept in the future. In the meantime, if you're
          curious, feel free to explore the project. There are roughly 100 .wav
          files in the GitHub repo, or try generating your own using the script.
        </p>
      </div>

      <div className="text-center mt-10">
        <Link to="/blog" className="btn btn-sm mb-10">
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
}
