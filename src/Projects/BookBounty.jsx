import CarouselBookBounty from "./CarouselBookBounty";
import CarouselBookBountyMobile from "./CarouselBookBountyMobile";
import GitLab from "../Images/gitlab-svgrepo-com.svg";

const BookBounty = () => {
  return (
    <>
      <div className="text-center lg:pt-[2%] pt-[5%] animate-transition2">
        <h1 className="fade-in-7 text-5xl lg:text-7xl font-bold">BookBounty</h1>
        <div className="lg:grid lg:grid-cols-3">
          <div>
          <p className="font-bold fade-in-8 text-md xl:text-2xl xl:my-[2%] my-[6%] mx-[5%]">
              FastAPI | MongoDB | React | Redux | TailwindCSS | DaisyUI | Docker
            </p>
            <div className="fade-in-9 grid grid-flow-col gap-4 mx-[35%] lg:mx-[45%]">
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
            <div className="grid grid-cols-2 pb-[1%] lg:pb-[2%]">
              <div className="self-center">
                <CarouselBookBountyMobile />
              </div>
              <div className="m-auto">
                <p className="fade-in-11 text-sm md:text-lg lg:mx-[1%] mx-[5%]">
                  A microservice application developed by a four person team,
                  for keeping track of and sharing your favorite books! Features
                  ability to sign up, login, search books (utilizes OpenLibrary
                  API for all book data), get a random book, favorite books,
                  leave reviews, discover users, etc. Utilizes a RESTful API
                  using FastAPI along with MongoDB for database storage. Uses
                  Oauth 2.0 for secure user authentication.
                </p>
              </div>
            </div>
          </div>
          <div className="animate-transition2 lg:mt-[5%] lg:pb-[5%] pb-[10%] self-center col-span-2">
            <CarouselBookBounty />
          </div>
        </div>
      </div>
    </>
  );
};

export default BookBounty;
