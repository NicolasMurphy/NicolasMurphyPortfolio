import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarCarNotFullscreen from "../Images/CarCarImages/CarCarNotFullscreen.png";
import CarCarModels from "../Images/CarCarImages/CarCarModels.png";
import CarCarAppointments from "../Images/CarCarImages/CarCarAppointments.png";

export default function CarouselCarCar() {

  let images = [
    CarCarNotFullscreen,
    CarCarModels,
    CarCarAppointments,
];

  const settings = {
    dots: true,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
  };

  return (
    <>
      <div className="fade-in-17 mx-auto px-[2.5%]">
        <Slider {...settings}>
          {images?.map((image) => (
            <div key={image}>
              <img src={image} alt="Screenshots of the CarCar website" />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
