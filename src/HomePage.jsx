import headshot from "./Images/picmegraycrop.png";
import Skills from "./Skills";

const HomePage = () => {
  return (
    <>
      <div className="text-center">
        <div className="text-center w-full lg:pt-[2%] pt-[5%]">
          <h1 className="fade-in text-5xl md:text-7xl font-bold">Nicolas Murphy</h1>
            <p className="fade-in-2 text-3xl md:text-5xl lg:my-[3%] my-[8%]">Full-Stack Developer</p>
        </div>
      </div>
        <div className="mx-[3%] md:ml-[19%]">
          <div className="md:my-[2.5%] flex flex-col items-center md:flex-row md:max-fit">
            <img className="fade-in-3 md:mb-[0%] mb-[8%] rounded-full object-cover h-64 md:h-auto
            md:w-48" src={headshot} alt="Nicolas Murphy"/>
            <div className="flex flex-col justify-between">
              <p className="fade-in-4 lg:text-2xl text-lg lg:text-left text-center lg:mx-[3%]
              mx-[9.5%] lg:mr-[30%] font-normal">
              I am a passionate software engineer that believes in creating reliable,
              maintainable, scalable applications, with aesthetic interfaces,
              that are easy to use and understand. I embrace the agile philosophy
              for creating solutions that serve both the client and the user.
              Delivering innovative software solutions and enhanced productivity
              are my priorities. I look forward to creating a positive impact on the tech space.
              </p>
            </div>
          </div>
      </div>
      <div className="my-[16%] md:mt-[5%] mb-[20%] md:mb-[9%]">
        <Skills />
      </div>
    </>
  );
};

export default HomePage;
