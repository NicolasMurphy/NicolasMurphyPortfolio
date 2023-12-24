import CarouselBookBounty from "./CarouselBookBounty";
import CarouselBookBountyMobile from "./CarouselBookBountyMobile";
import GitLab from "../Images/gitlab-svgrepo-com.png";

const BookBounty = () => {
  return (
    <>
      <div className="text-center md:pt-[5%] pt-[10%] bg-slate-300 dark:bg-slate-700">
        <h1 className="fade-in-7 text-5xl md:text-7xl font-bold">BookBounty</h1>
        <p className="font-bold fade-in-8 text-md md:text-2xl md:mt-[2%] mt-[6%] md:mb-[1%] mb-[3%] md:mx-[30%] mx-[5%]">
          FastAPI | MongoDB | React | Redux | TailwindCSS | DaisyUI | Docker
        </p>
        <div className="fade-in-9 grid grid-flow-col gap-4 mx-[35%] md:mx-[45%]">
          <a
            href="https://gitlab.com/mod-3-group/bookbounty"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="transition duration-300 ease-in-out hover:scale-110"
              src={GitLab}
              alt="Gitlab Icon"
            ></img>
          </a>
        </div>
        <div className="grid grid-cols-2 md:mx-[25%] pb-[1%] md:pb-[2%]">
          <div>
            <CarouselBookBountyMobile />
          </div>
          <div>
            <p className="fade-in-11 text-sm md:text-2xl md:mt-[5%] mt-[15%] md:mx-[10%] mx-[5%]">
              A microservice application developed by a four person team, for
              keeping track of and sharing your favorite books! Features ability
              to sign up, login, search books (utilizes OpenLibrary API for all
              book data), get a random book, favorite books, leave reviews,
              discover users, etc. Utilizes a RESTful API using FastAPI along
              with MongoDB for database storage. Uses Oauth 2.0 for secure user authentication.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-slate-300 dark:bg-slate-700 md:pb-[5%] pb-[10%]">
        <CarouselBookBounty />
      </div>
    </>
  );
};

export default BookBounty;
