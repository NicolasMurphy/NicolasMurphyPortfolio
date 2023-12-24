import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import songseekermobilescreenshot1 from "../Images/SongSeekerImages/songseekermobilescreenshot1.png";
import songseekermobilescreenshot2 from "../Images/SongSeekerImages/songseekermobilescreenshot2.png";
import songseekermobilescreenshot3 from "../Images/SongSeekerImages/songseekermobilescreenshot3.png";


export default function CarouselBookBountyMobile() {

  let images = [
    songseekermobilescreenshot1,
    songseekermobilescreenshot2,
    songseekermobilescreenshot3,
];

  const settings = {
    dots: true,
    arrows: false,
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
      <div className="fade-in-4 my-[20%] lg:my-[5%] mx-auto px-[5%] lg:w-[80%]">
        <Slider {...settings}>
          {images?.map((image) => (
            <div key={image}>
              <img className="mx-auto" width="400" src={image} alt="Screenshots of the SongSeeker mobile website" />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
