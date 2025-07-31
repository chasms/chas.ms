import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { css } from "../../styled-system/css";

const sliderWrapper = css({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 20px",
  boxSizing: "border-box",
});

const mainSliderContainer = css({
  width: "100%",
  margin: "0 auto",
});

const imageStyle = css({
  width: "100%",
  height: "auto",
  objectFit: "contain",
  maxHeight: "calc(100vh - 250px)",
  margin: "auto",
});

const thumbnailWrapper = css({
  width: "80%",
  margin: "20px auto 0",
  "& .slick-slide": {
    padding: "0 5px",
  },
  "& .slick-slide img": {
    cursor: "pointer",
    border: "2px solid transparent",
    "&:hover": {
      borderColor: "gray.500",
    },
  },
  "& .slick-current img": {
    borderColor: "white",
  },
});

const thumbnailImageStyle = css({
  width: "100px",
  height: "auto",
});

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [nav1, setNav1] = useState<Slider | undefined>();
  const [nav2, setNav2] = useState<Slider | undefined>();

  const slider1 = useRef<Slider>(null);
  const slider2 = useRef<Slider>(null);

  useEffect(() => {
    if (slider1.current) {
      setNav1(slider1.current);
    }
    if (slider2.current) {
      setNav2(slider2.current);
    }
  }, []);

  // @ts-expect-error Need to use default for SSR to prevent 500 server error: https://github.com/akiran/react-slick/issues/2206
  const SliderComponent = Slider.default ? Slider.default : Slider;

  return (
    <div className={sliderWrapper}>
      <div className={mainSliderContainer}>
        <SliderComponent asNavFor={nav2} ref={slider1}>
          {images.map((src, index) => (
            <div key={index}>
              <img src={src} alt={`slide-${index}`} className={imageStyle} />
            </div>
          ))}
        </SliderComponent>
      </div>
      <div className={thumbnailWrapper}>
        <SliderComponent
          asNavFor={nav1}
          ref={slider2}
          slidesToShow={images.length}
          swipeToSlide={true}
          focusOnSelect={true}
          centerMode={true}
        >
          {images.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`thumbnail-${index}`}
                className={thumbnailImageStyle}
              />
            </div>
          ))}
        </SliderComponent>
      </div>
    </div>
  );
}
