import CarouselCarCar from "./CarouselCarCar";
import CarouselBookBounty from "./CarouselBookBounty";
import GitLab from "./Images/gitlab-svgrepo-com.png";
import BookBountyIcon from "./Images/Marcus-Roberto-Google-Play-Google-Play-Books.512.png";
import CarouselBookBountyMobile from "./CarouselBookBountyMobile";

const Projects = () => {
  return (
    <>
      <div className="text-center">
        <div className="text-center w-full md:mt-[5%] mt-[10%]">
          <h1 className="fade-in text-5xl md:text-7xl font-bold">BookBounty</h1>
          <p className="fade-in-2 text-md md:text-2xl md:my-[3%] my-[8%] md:mx-[27%] mx-[4.5%]">
            A microservice application developed by a four person team, for
            keeping track of and sharing your favorite books! Features ability
            to sign up, login, search books (utilizes OpenLibrary API for all
            book data), get a random book, favorite books, leave reviews,
            discover users, etc.
          </p>
          <p className="font-bold fade-in-3 text-md md:text-2xl md:mb-[2%] mb-[6%] md:mx-[30%] mx-[5%]">
            FastAPI | MongoDB | React | Redux | TailwindCSS | DaisyUI | Docker
          </p>
          <div className="fade-in-4 grid grid-flow-col gap-4 mx-[30%] md:mx-[45%] md:mb-[2%] mb-[7%]">
            <a
              href="https://mod-3-group.gitlab.io/bookbounty"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-20 transition duration-300 ease-in-out hover:scale-110"
                src={BookBountyIcon}
              ></img>
            </a>
            <a
              href="https://gitlab.com/mod-3-group/bookbounty"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-20 transition duration-300 ease-in-out hover:scale-110"
                src={GitLab}
              ></img>
            </a>
          </div>
        </div>
      </div>
      <CarouselBookBounty />
      <CarouselBookBountyMobile />

      <div className="text-center md:mt-[15%] mt-[30%]">
        <div className="text-center w-full md:mt-[5%] mt-[10%]">
          <h1 className="fade-in-6 text-5xl md:text-7xl font-bold">CarCar</h1>
          <p className="fade-in-7 text-md md:text-2xl md:my-[3%] my-[8%] md:mx-[27%] mx-[5%]">
            CarCar is a microservice application, developed by a team of two,
            for managing a car dealership. Utilizes a restful API that manages
            inventory, set service appointments, set appointment status, keep
            track of car sales, salespeople, salesperson history, technicians,
            etc.
          </p>
          <p className="font-bold fade-in-8 text-md md:text-2xl md:mb-[2%] mb-[6%] md:mx-[30%] mx-[5%]">
            Django | React | Bootstrap | TailwindCSS | DaisyUI | Docker
          </p>
          <div className="fade-in-9 mx-auto md:w-[5%] w-[18%] md:mb-[2%] mb-[7%]">
            <a
              href="https://gitlab.com/murphynick10/car-car"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="transition duration-300 ease-in-out hover:scale-110"
                src={GitLab}
              ></img>
            </a>
          </div>
        </div>
      </div>
      <CarouselCarCar />
    </>
  );
};

export default Projects;
