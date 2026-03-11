import React, { useEffect, useState, useRef } from "react";
import { getRandomTrack } from "./api";
import "./iframe.css";

const SpotifySearch = () => {
  const [track, setTrack] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    getRandomTrack(setTrack, setIsLoading);
  }, []);

  useEffect(() => {
    if (track && audioRef.current) {
      audioRef.current.load();
    }
  }, [track]);

  return (
    <div className="text-center lg:pt-[2%] pt-[5%]">
      <button
        className="btn btn-accent rounded-full mb-6"
        onClick={() => getRandomTrack(setTrack, setIsLoading)}
      >
        Get Random Track
      </button>

      {isLoading && <><br /><div className="loading loading-ring loading-lg"></div></>}

      {!isLoading && track && (
        <div>
          <h2>{track.title}</h2>
          <p>By {track.artist.name}</p>
          <div className="custom-player">
            <img src={track.album.cover_medium} alt="Album Art" />
            <audio ref={audioRef} controls>
              <source src={track.preview} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div>
            <a href={track.link} target="_blank" rel="noopener noreferrer">
              <img
                className="mx-auto m-4 transition duration-300 ease-in-out hover:scale-110"
                width="48"
                src="https://www.deezer.com/favicon.ico"
                alt="Deezer Icon"
              />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpotifySearch;