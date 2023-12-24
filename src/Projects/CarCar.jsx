import CarouselCarCar from "./CarouselCarCar";
import GitLab from "../Images/gitlab-svgrepo-com.png";

const CarCar = () => {
  return (
    <>
      <div className="text-center md:pt-[5%] pt-[10%] bg-slate-400 dark:bg-slate-800">
        <h1 className="fade-in-13 text-5xl md:text-7xl font-bold">CarCar</h1>
        <p className="font-bold fade-in-14 text-md md:text-2xl md:mt-[2%] mt-[6%] md:mb-[1%] mb-[3%] md:mx-[30%] mx-[5%]">
          Django | React | Bootstrap | TailwindCSS | DaisyUI | Docker
        </p>
        <div className="fade-in-15 grid grid-flow-col gap-4 mx-[35%] md:mx-[45%]">
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
        <p className="fade-in-16 text-md md:text-2xl md:pt-[1%] pt-[4%] md:pb-[3%] pb-[8%] md:mx-[27%] mx-[5%]">
          CarCar is a microservice application, developed by a team of two, for
          managing a car dealership. Utilizes a restful API that manages
          inventory, set service appointments, set appointment status, keep
          track of car sales, salespeople, salesperson history, technicians,
          etc.
        </p>
      </div>
      <div className="bg-slate-400 dark:bg-slate-800 md:pb-[5%] pb-[10%]">
        <CarouselCarCar />
      </div>
    </>
  );
};

export default CarCar;
