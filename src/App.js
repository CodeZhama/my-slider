import React from "react";
import styled from "styled-components";
import Img1 from "../src/images/slider1.jpg";
import Img2 from "../src/images/slider2.jpg";
import Img3 from "../src/images/slider3.jpg";
import Slider from "react-slick";

function App() {
  const list = [Img1, Img2, Img3];
  const settings = {
    customPaging: function (i) {
      return (
        <div>
          <img
            src={list[i]}
            alt="img1"
            style={{ width: "180px", height: "180px", objectFit: "cover",transform:"rotate(270deg)",borderRadius:"5px" }}
          />
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <AppStyle>
      <div className="container">
        <div className="slider__react">
          <Slider {...settings}>
            {list.map((item, index) => {
              return (
                <div className="card">
                  <img className="card__img" src={item} alt={index} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </AppStyle>
  );
}

const AppStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e3e3e3;
  .container {
    max-width: 1000px;
    margin: 0 auto;
    .slider__react {
      .slick-slider {
        .card {
          .card__img {
            width: 100%;
            object-fit: cover;
            height: 600px;
          }
        }
        .slick-arrow {
          display: none !important;
        }
        .slick-thumb {
          max-width: 640px;
          height: 190px;
          transform: rotate(90deg);
          right: -417px;
          top:205px;
          gap: 0;
          li {
            width: 200px;
            height: 150px;
          }
        }
      }
    }
  }
`;

export default App;
