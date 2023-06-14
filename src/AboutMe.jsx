import MeGuitar from "./Images/RoxyFloresPhoto_MeGuitarCropped.jpg";

const AboutMe = () => {
  return (
    <>
      <div className="text-center md:mt-[5%] mt-[10%] md:mb-[3%] mb-[10%]">
        <h1 className="fade-in text-5xl md:text-7xl font-bold">About Me</h1>
      </div>
      <div className="mx-[2%] md:ml-[19%]">
        <div className="md:mt-[2.5%] flex flex-col items-center md:flex-row md:max-fit">
          <img
            className="fade-in-2 md:mb-[0%] mb-[8%] rounded-full object-cover h-64 md:h-auto
            md:w-48"
            src={MeGuitar}
            alt=""
            id="firefox-image-rotation"
          />
          <div className="flex flex-col justify-between">
            <p
              className="fade-in-3 md:text-2xl text-lg md:text-left text-center md:mx-[3%]
              mx-[9.5%] md:mr-[25%] font-normal"
            >
              Hi, my name is <span className="font-bold">Nicolas Murphy</span>,
              and I'm based out of{" "}
              <span className="font-bold">Dallas, TX</span>. Before
              transitioning to the tech space, I taught guitar, piano, and
              chess. With a newfound focus on software engineering, my goal is
              to make a positive impact on the world, using innovative and
              cutting-edge technologies.
            </p>
          </div>
        </div>
      </div>

      <div className="fade-in-4 md:text-2xl text-lg text-center
      mb-[20%] md:mb-[10%] mt-[10%] md:mt-[5%]">
        When I'm not coding, you'll find me making music, playing chess, or
        strength training!
      </div>

      <div className="text-center">
        <div className="text-center w-full md:my-[5%] my-[10%]">
          <h1 className="fade-in-5 text-4xl md:text-5xl">Let's connect!</h1>
        </div>
        <div>
          <div className="fade-in-6 text-xl md:text-2xl">
            Send me an email:{" "}
            <span>
              <a
                href="mailto:murphynick10@gmail.com"
                className="font-medium text-info underline hover:no-underline"
              >
                murphynick10@gmail.com
              </a>
            </span>
          </div>
          <div className="fade-in-7 text-xl md:text-2xl mb-[10%]">
            Add me on{" "}
            <span>
              <a
                href="https://www.linkedin.com/in/nicolas-murphy/"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-info underline hover:no-underline"
              >
                LinkedIn
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
