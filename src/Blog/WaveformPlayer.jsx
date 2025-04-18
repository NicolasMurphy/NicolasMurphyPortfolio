import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

export default function WaveformPlayer({ src }) {
  const containerRef = useRef(null);
  const waveRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !src) return;

    waveRef.current = WaveSurfer.create({
      container: containerRef.current,
      waveColor: "#a3a3a3",
      progressColor: "#3b82f6",
      height: 80,
      responsive: true,
      barWidth: 2,
    });

    waveRef.current.on("ready", () => {
      setIsReady(true);
    });

    waveRef.current.load(src);

    return () => {
      waveRef.current?.destroy();
    };
  }, [src]);

  const togglePlay = () => {
    if (waveRef.current) {
      waveRef.current.playPause();
    }
  };

  return (
    <div className="my-4 w-full">
      <div ref={containerRef} className="rounded-md overflow-hidden" />
      {isReady && (
        <button onClick={togglePlay} className="btn btn-sm btn-primary mt-2">
          Play / Pause
        </button>
      )}
    </div>
  );
}
