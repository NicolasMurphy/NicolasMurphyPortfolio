import { Link } from "react-router-dom";
import WaveformPlayer from "./WaveformPlayer";

export default function MassSpectrometryMusic() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-0 mt-16 fade-in">
      <h1 className="text-4xl font-bold mb-4">Mass Spectrometry Music</h1>
      <p className="text-lg mb-2">Converting spectra data into sound</p>
      <p className="text-sm text-base-content/60 mb-6">
        Last updated: April 22, 2025
      </p>

      <blockquote className="bg-base-200 border-l-4 border-primary pl-6 pr-4 py-4 rounded-md shadow-md">
        <p className="italic">
          In 1999, Cyril Smith, a Stanford professor of physics, played the
          (cacophonic) music of thyroxin during a convention, but the
          performance was immediately suspended because many people in the
          audience suddenly experienced tachycardia [rapid heartbeat]. What
          happened? The music had reproduced one of the effects of an excess of
          thyroid hormone: thyroxin overdose.
        </p>
        <footer className="mt-2 text-sm text-right text-base-content/60">
          <cite>
            — Reported in The <em>Basic Code of the Universe</em> by Massimo
            Citro (citing C. Smith, International Conference, Hidden Properties
            of Water, The Polyclinic, Medical and Surgical Department, Napoli,
            1999.)
          </cite>
        </footer>
      </blockquote>

      <div className="space-y-5 mt-4 leading-relaxed text-base-content text-lg">
        <p>
          I first came across the quote while scrolling through X (formerly
          Twitter), and it immediately caught my attention. The idea that the
          “music” of a molecule could mimic its biological effects was
          intriguing—maybe the sound was just unsettling enough to cause a
          reaction, but the suggestion lingered. Could sound really interact
          with the body in this way? I wasn't sure, but the concept stayed with
          me. As someone interested in experimental music, I knew I wanted to
          explore it further.
        </p>

        <p>
          As I dug deeper, I found related concepts:{" "}
          <a
            className="link link-primary"
            href="https://en.wikipedia.org/wiki/Protein_music"
            target="_blank"
            rel="noopener noreferrer"
          >
            protein music
          </a>
          ,{" "}
          <a
            className="link link-primary"
            href="https://en.wikipedia.org/wiki/Biomusic"
            target="_blank"
            rel="noopener noreferrer"
          >
            biomusic
          </a>
          , and{" "}
          <a
            className="link link-primary"
            href="http://www.molecularmusic.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            molecular music
          </a>
          . But none of these approaches quite spoke to me, and I wasn't sure
          where to begin. The idea was compelling, but the path forward wasn't
          obvious.
        </p>

        <p>
          Eventually, I landed on mass spectrometry data as a unique entry
          point—something grounded in real measurements, but open enough to be
          interpreted musically.
        </p>

        <h2 className="text-2xl font-bold mt-10">Early Experiments</h2>
        <p>
          Before working with real data, I tried generating these sounds
          manually in <strong>Max/MSP</strong>, mapping estimated molecular
          weights to frequencies and amplitudes. The sounds were interesting,
          but the process was slow and imprecise. I shelved the idea for a
          while—until I stumbled across something promising.
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
          containing actual <strong>mass spectrometry data</strong> — m/z values
          and their intensities for specific molecules.
        </p>

        <p>
          I wrote a <strong>Python script</strong> to parse those files and
          convert them into <code>.wav</code> audio. The mapping is
          straightforward: each m/z value is scaled down by a constant and
          offset to bring it into the audible range. Each value becomes a sine
          wave, and its intensity controls the volume. The result is a sound
          shaped by the molecule's data — a kind of musical texture derived from
          its spectrum.
        </p>

        <p>I called the project:</p>

        <div className="bg-base-200 p-4 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">
            Mass Spectrum to Audio Converter
          </h3>
          <p className="mb-2">
            A tool for converting mass spectrum <code>.txt</code> files into{" "}
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

        <h2 className="text-2xl font-bold mt-10">
          How It Works (Short Code Snippet)
        </h2>
        <pre className="bg-base-200 p-4 rounded-md overflow-x-auto text-sm">
          <code>
            {`def mz_to_frequency(mz_value):
    return 200 + (mz_value * 5)

def generate_sine_wave(freq, intensity, duration, sample_rate):
    t = np.linspace(0, duration, int(sample_rate * duration), False)
    amplitude = np.iinfo(np.int16).max * intensity
    wave = amplitude * np.sin(2 * np.pi * freq * t)
    return wave`}
          </code>
        </pre>

        <p>
          I use basic additive synthesis — summing sine waves — to generate the
          final <code>.wav</code> output. The full script handles reading
          spectrum files, filtering low-intensity values, normalizing, and
          writing the final audio file.
        </p>

        <h2 className="text-2xl font-bold mt-10">Sample Input (.txt)</h2>
        <p>
          Here's a snippet from the raw <code>.txt</code> file for oxytocin,
          taken from HMDB — the first column shows m/z values, the second shows
          signal intensity:
        </p>
        <pre className="bg-base-200 p-4 rounded-md overflow-x-auto text-sm">
          <code>
            {`73.04018778 16.07
75.05583784 2.04
84.08132432 1.26
162.0555035 1.79
186.1242518 7.24
275.1395675 1.76
448.2196087 2.48
589.2734351 1.84
989.4337179 11.01
1007.444283 3.44`}
          </code>
        </pre>

        <h2 className="text-2xl font-bold mt-10">What It Sounded Like</h2>
        <p>
          Most molecules sounded metallic, glitchy, or bell-like. Not all of it
          was useful musically, but one stood out: oxytocin.
        </p>
        <p>
          When pitch-shifted into the human hearing range, oxytocin sounded
          surprisingly similar to a harpsichord.
        </p>

        <h2 className="text-2xl font-bold mt-10">Oxytocin plays Bach</h2>
        <p>
          Because of its similarity to a harpsichord, I used the
          oxytocin-generated tone to render{" "}
          <em>English Suite No. 3 in G minor Prelude (BWV 808)</em> by Johann
          Sebastian Bach.
        </p>

        <WaveformPlayer src="/Audio/english_suite_no_3_oxytocin.wav" />

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

        <p className="pt-4">
          I did the same with another Bach piece:{" "}
          <em>
            Concerto in F "in the Italian Manner" for Solo Keyboard (first
            mvmt.), BWV 971
          </em>
        </p>

        <WaveformPlayer src="/Audio/concerto_in_f_oxytocin.wav" />

        <p className="text-sm text-base-content/60">
          Based on a MIDI sequence by T.L. Hubeart Jr.. Original source:{" "}
          <a
            href="http://www.jsbach.net/midi/midi_solo_keyboard.html"
            className="link link-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            jsbach.net
          </a>
        </p>

        <blockquote className="bg-base-200 border-l-4 border-primary pl-6 pr-4 py-4 rounded-md shadow-md">
          <p className="italic">
            Everything vibrates and emits elastic waves that can be translated
            into sound, so everything plays music with those little bells that
            are molecules... Each substance has its own sound.
          </p>
          <footer className="mt-2 text-sm text-right text-base-content/60">
            — Massimo Citro, <em>The Basic Code of the Universe</em>
          </footer>
        </blockquote>

        <h2 className="text-2xl font-bold mt-10">Final Thoughts</h2>
        <p>
          I originally planned to make a full album — <em>Sonus Hormonae</em> —
          using only spectra-based sounds. But I found the approach to be too
          limiting, and the results were not as pleasing to listen to as I had
          hoped.
        </p>
        <p>
          Still, the concept is interesting and has potential. I have mostly
          abandoned making music with these generated-samples, but I may revisit
          this concept in the future.
        </p>
        <p>
          In the meantime, you can check out the project on GitHub, listen to
          the included samples, or generate your own. There are about 100{" "}
          <code>.wav</code> files already available.
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
