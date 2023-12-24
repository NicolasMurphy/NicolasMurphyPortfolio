import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import songseekerscreenshot1 from "../Images/SongSeekerImages/songseekerscreenshot1.png";
import songseekerscreenshot2 from "../Images/SongSeekerImages/songseekerscreenshot2.png";
import songseekerscreenshot3 from "../Images/SongSeekerImages/songseekerscreenshot3.png";


export default function CarouselBookBounty() {

  let images = [
    songseekerscreenshot1,
    songseekerscreenshot2,
    songseekerscreenshot3,
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
      <div className="fade-in-6 mx-auto px-[2.5%]">
        <Slider {...settings}>
          {images?.map((image) => (
            <div key={image}>
              <img src={image} alt="Screenshots of the SongSeeker website" />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
