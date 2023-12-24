import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookBountyHomepageLight from "../Images/BookBountyImages/BookBountyHomeLight2.png";
import BookBountySignup from "../Images/BookBountyImages/BookBountySignup.png";
import BookBountyDiscover from "../Images/BookBountyImages/BookBountyDiscover.png";


export default function CarouselBookBounty() {

  let images = [
    BookBountyHomepageLight,
    BookBountySignup,
    BookBountyDiscover,
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
      <div className="fade-in-12 mx-auto px-[2.5%]">
        <Slider {...settings}>
          {images?.map((image) => (
            <div key={image}>
              <img src={image} alt="Screenshots of the BookBounty website" />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
