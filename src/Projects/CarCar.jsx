import CarouselCarCar from "./CarouselCarCar";
import GitLab from "../Images/gitlab-svgrepo-com.svg";

const CarCar = () => {
  return (
    <>
      <div className="text-center lg:pt-[2%] pt-[5%] bg-slate-400 dark:bg-slate-800">
        <h1 className="fade-in-13 text-5xl lg:text-7xl font-bold">CarCar</h1>
        <div className="lg:grid lg:grid-cols-3">
          <div>
            <p className="font-bold fade-in-14 text-md lg:text-2xl lg:mt-[2%] mt-[6%] lg:mb-[1%] mb-[3%] mx-[5%]">
              Django | React | Bootstrap | TailwindCSS | DaisyUI | Docker
            </p>
            <div className="fade-in-15 grid grid-flow-col gap-4 mx-[35%] lg:mx-[45%] mt-[4%]">
              <a
                href="https://gitlab.com/murphynick10/car-car"
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
              <p className="fade-in-16 text-md md:text-2xl lg:mx-[10%] mx-[5%] lg:pb-[5%] pb-[10%] lg:pt-[2%] pt-[4%]">
                CarCar is a microservice application, developed by a team of
                two, for managing a car dealership. Utilizes a RESTful API that
                manages inventory, set service appointments, set appointment
                status, keep track of car sales, salespeople, salesperson
                history, technicians, etc. Utilizes Django for the backend and
                React for the frontend, along with TailwindCSS and Bootstrap for
                styling.
              </p>
          </div>
          <div className="bg-slate-400 dark:bg-slate-800 lg:mt-[5%] lg:pb-[5%] pb-[10%] self-center col-span-2">
            <CarouselCarCar />
          </div>
        </div>
      </div>
    </>
  );
};

export default CarCar;
