import CarouselSongSeeker from "./CarouselSongSeeker";
import CarouselSongSeekerMobile from "./CarouselSongSeekerMobile";
import GitHub from "../Images/github-142-svgrepo-com.svg";
import SongSeekerIcon from "../Images/SongSeekerIcon.svg";

const SongSeeker = () => {
  return (
    <>
      <div className="text-center animate-transition1">
        <div className="text-center w-full lg:pt-[2%] pt-[5%]"></div>
        <h1 className="fade-in text-5xl lg:text-7xl font-bold">SongSeeker</h1>
        <div className="lg:grid lg:grid-cols-3">
          <div className="lg:pt-[10%]">
            <p className="font-bold fade-in-2 text-md lg:text-2xl lg:my-[2%] my-[6%] mx-[5%]">
              JavaScript | TypeScript | React | Firebase | DaisyUI | TailwindCSS
            </p>
            <div className="fade-in-3 grid grid-flow-col gap-4 mx-[20%] lg:mx-[40%]">
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
            <div className="grid grid-cols-2 py-[1%] lg:py-[2%]">
              <div className="self-center">
                <CarouselSongSeekerMobile />
              </div>
              <div className="m-auto">
                <p className="fade-in-5 text-sm md:text-lg lg:mx-[1%] mx-[5%]">
                  A solo, frontend application. SongSeeker is a music education
                  geography game! Featuring music from over 50 countries! The
                  user guesses a random song's location (utilizing the Spotify
                  and Google Maps API), and is given a score based on how close
                  they were. Users can also submit their score to the
                  leaderboard (using Firebase's realtime database).
                </p>
              </div>
            </div>
          </div>
          <div className="animate-transition1 lg:mt-[5%] lg:pb-[5%] pb-[10%] self-center col-span-2">
            <CarouselSongSeeker />
          </div>
        </div>
      </div>
    </>
  );
};

export default SongSeeker;
