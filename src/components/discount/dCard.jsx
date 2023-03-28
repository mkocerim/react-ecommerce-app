import React from "react";
import Ddata from "./dData";
import Slider from "react-slick";

const Dcard = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    marign: 200,
  };

  return (
    <>
      <Slider {...settings}>
        {Ddata.map((item, index) => {
          return (
            <>
              <div className="product" key={index}>
                <div className="box">
                  <div className="img">
                    <img src={item.cover} alt="dData" width="100%" />
                  </div>
                  <h4>{item.name}</h4>
                  <span>{item.price}</span>
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
};

export default Dcard;
