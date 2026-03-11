import React, { useEffect, useState, useRef } from "react";
import SpotifyIcon from "./SpotifyIcon";
import { refreshAccessToken, getRandomTrack } from "./api";
import "./iframe.css";

const SpotifySearch = () => {
  const [track, setTrack] = useState(null);
  const [accessToken, setAccessToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef(null);
  const hasInteracted = useRef(false);

  useEffect(() => {
    refreshAccessToken(setAccessToken);
  }, []);

  useEffect(() => {
    if (track && audioRef.current) {
      audioRef.current.load();
      if (hasInteracted.current) {
        audioRef.current.oncanplay = () => {
          audioRef.current?.play();
        };
      }
    }
  }, [track]);

  const resetAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.load();
    }
  };

  return (
    <div className="text-center lg:pt-[2%] pt-[5%]">
      <button
        className="btn btn-accent rounded-full mb-6"
        onClick={() => {
          hasInteracted.current = true;
          getRandomTrack(accessToken, setTrack, setIsLoading, resetAudio);
        }}
      >
        Get Random Track
      </button>

      {isLoading && <><br /><div className="loading loading-ring loading-lg"></div></>}

      {!isLoading && track && (
        <div>
          <h2>{track.name}</h2>
          <p>By {track.artists[0].name}</p>
          <div className="custom-player">
            <img src={track.album.images[0].url} alt="Album Art" />
            <audio ref={audioRef} controls>
              <source src={track.preview_url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div className="">
            <a
              href={track.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SpotifyIcon />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpotifySearch;