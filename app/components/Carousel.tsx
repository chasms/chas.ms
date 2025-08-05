import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { css, cx } from "../../styled-system/css";

// @ts-expect-error Need to use default for SSR to prevent 500 server error: https://github.com/akiran/react-slick/issues/2206
const SliderComponent = Slider.default ? Slider.default : Slider;

const thumbnailsHeight = "125px";
const sliderWrapperStyles = css({
  position: "relative",
  margin: "auto",
  width: "100%",
  maxWidth: "1600px",

  "& .slick-track": {
    display: "flex !important",
  },
  "& .slick-slide": {
    margin: "auto",
  },
});

const imageStyle = css({
  width: "100%",
  height: "auto",
  objectFit: "contain",
  margin: "auto",
  maxHeight: `calc(100vh - ${thumbnailsHeight} - 100px)`,
});

const thumbnailsSection = css({
  width: "100%",
  bottom: "unset !important",
  display: "flex !important",
  justifyContent: "space-between",

  "& li": {
    width: "auto !important",
    height: `${thumbnailsHeight} !important`,
    margin: "0 5px",
    cursor: "pointer",
  },
  "& li.slick-active img": {
    border: "2px solid white",
    opacity: "1",
  },
});
const thumbnailWrapper = css({
  width: "100%",
  height: "auto",
});
const thumbnailImageStyle = css({
  width: "100%",
  height: "auto",
  borderRadius: "4px",
  transition: "all 0.5s ease-in-out",
  border: "2px solid transparent",
  opacity: "0.6",
  maxHeight: `calc(${thumbnailsHeight} - 15px)`,
});

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const settings = {
    customPaging: (i: number) => {
      return (
        <div className={thumbnailWrapper}>
          <img
            src={images[i]}
            alt={`thumbnail-${i}`}
            className={thumbnailImageStyle}
          />
        </div>
      );
    },
    dots: true,
    dotsClass: cx("slick-dots", thumbnailsSection),
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
