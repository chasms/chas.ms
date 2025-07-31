import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { css } from "../../styled-system/css";

// @ts-expect-error Need to use default for SSR to prevent 500 server error: https://github.com/akiran/react-slick/issues/2206
const SliderComponent = Slider.default ? Slider.default : Slider;

const sliderWrapperStyles = css({
  margin: "0 auto",
  height: "100%",
  maxHeight: "calc(100% - 200px)",
  width: "100%",
  maxWidth: "1400px",
  paddingBottom: "120px", // space for thumbnails
  position: "relative",

  "& .slick-dots": {
    position: "absolute",
    bottom: "0px",
    display: "flex !important",
    justifyContent: "center",
    width: "100%",
    listStyle: "none",
    padding: "20px 0",
    margin: 0,
    "& li": {
      width: "auto !important",
      height: "auto",
      margin: "0 5px",
      cursor: "pointer",
    },
    "& li img": {
      transition: "all 0.5s ease-in-out",
      border: "2px solid transparent",
      opacity: "0.6",
    },
    "& li.slick-active img": {
      border: "2px solid white",
      opacity: "1",
    },
  },
});

const imageStyle = css({
  width: "100%",
  height: "auto",
  objectFit: "contain",
  maxHeight: "calc(100vh - 250px)",
  margin: "auto",
});

const thumbnailImageStyle = css({
  width: "100%",
  height: "auto",
  border: "2px solid transparent",
  borderRadius: "4px",
});

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const settings = {
    customPaging: (i: number) => {
      return (
        <a>
          <img
            src={images[i]}
            alt={`thumbnail-${i}`}
            className={thumbnailImageStyle}
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={sliderWrapperStyles}>
      <SliderComponent {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`slide-${index}`} className={imageStyle} />
          </div>
        ))}
      </SliderComponent>
    </div>
  );
}
