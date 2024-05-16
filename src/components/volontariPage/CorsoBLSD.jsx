import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CorsoBLSD = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Slider {...settings}>
        <div>
          <img src="/path/to/your/image1.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="/path/to/your/image2.jpg" alt="Slide 2" />
        </div>
        // Add more slides as needed
      </Slider>
    </div>
  );
};

export default CorsoBLSD;
