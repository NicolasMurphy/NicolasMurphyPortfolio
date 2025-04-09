import React, { useEffect, useState, useRef } from "react";
import SpotifyIcon from "./SpotifyIcon";
import { refreshAccessToken, getRandomTrack } from "./api";
import "./iframe.css";

const SpotifySearch = () => {
  const [track, setTrack] = useState(null);
  const [accessToken, setAccessToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    refreshAccessToken(setAccessToken);
  }, []);

  useEffect(() => {
    if (accessToken && isFirstLoad) {
      setIsFirstLoad(false);
      getRandomTrack(accessToken, setTrack, setIsLoading, resetAudio);
    }
  }, [accessToken, isFirstLoad]);

  useEffect(() => {
    if (track && audioRef.current) {
      audioRef.current.play();
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
        onClick={() =>
          getRandomTrack(accessToken, setTrack, setIsLoading, resetAudio)
        }
      >
        Get Random Track
      </button>

      {isLoading && <><br></br><div className="loading loading-ring loading-lg"></div></>}

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
