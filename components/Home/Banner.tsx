import React from "react";
import Slider from "react-slick";
import bn1 from "../../public/images/bn1.jpg";
import bn2 from "../../public/images/bn2.jpg";
function Banner() {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="slick">
      <Slider {...settings}>
        <div>
          <img src={bn1.src} />
          <div className="text lg:text-3xl md:text-2xl text-base">
            2026 Coming Soon!
          </div>
        </div>
        <div>
          <img src={bn2.src} />
          <div className="text lg:text-3xl md:text-2xl text-base">
            Messi is the champion !!
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Banner;
