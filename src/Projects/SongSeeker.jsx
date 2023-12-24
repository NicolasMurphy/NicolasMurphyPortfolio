import CarouselSongSeeker from "./CarouselSongSeeker";
import CarouselSongSeekerMobile from "./CarouselSongSeekerMobile";
import GitHub from "../Images/github-142-svgrepo-com.png";
import SongSeekerIcon from "../Images/SongSeekerIcon.svg";

const SongSeeker = () => {
  return (
    <>
      <div className="text-center bg-slate-200 dark:bg-slate-600">
        <div className="text-center w-full md:pt-[5%] pt-[10%]"></div>
        <h1 className="fade-in text-5xl md:text-7xl font-bold">SongSeeker</h1>
        <p className="font-bold fade-in-2 text-md md:text-2xl md:my-[2%] my-[6%] md:mx-[30%] mx-[5%]">
          JavaScript | TypeScript | React | Firebase | DaisyUI | TailwindCSS
        </p>
        <div className="fade-in-3 grid grid-flow-col gap-4 mx-[20%] md:mx-[40%]">
          <a href="https://songseeker.xyz" target="_blank" rel="noreferrer">
            <img
              className="transition duration-300 ease-in-out scale-110 hover:scale-125"
              src={SongSeekerIcon}
              alt="SongSeeker Icon"
            ></img>
          </a>
          <a
            href="https://github.com/NicolasMurphy/songseeker-beta"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="transition duration-300 ease-in-out hover:scale-110"
              src={GitHub}
              alt="Github Icon"
            ></img>
          </a>
        </div>
        <div className="grid grid-cols-2 md:mx-[25%] py-[1%] md:py-[2%]">
          <div>
            <CarouselSongSeekerMobile />
          </div>
          <div>
            <p className="fade-in-5 text-sm md:text-2xl md:mt-[4%] mt-[28%] md:mx-[10%] mx-[5%]">
              A solo, frontend application. SongSeeker is a music education
              geography game! Featuring music from over 50 countries! The user
              guesses a random song's location (utilizing the Spotify and Google
              Maps API), and is given a score based on how close they were.
              Users can also submit their score to the leaderboard (using
              Firebase's realtime database).
            </p>
          </div>
        </div>
      </div>
      <div className="bg-slate-200 dark:bg-slate-600 md:pb-[5%] pb-[10%]">
        <CarouselSongSeeker />
      </div>
    </>
  );
};

export default SongSeeker;
