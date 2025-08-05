import { css } from "../../styled-system/css";
import Carousel from "../components/Carousel";
import ExpandingInfoButton from "../components/ExpandingInfoButton";
import Nav from "../components/Nav";
import { GalleryKeys, GalleryPages } from "../content/galleryPages";
import { toHomeWithOpeningSequenceComplete } from "../routes";
import type { Route } from "./+types/gallery";

const pageWrapper = css({
  width: "100%",
  margin: "0 auto",
  padding: "50px 40px",
  display: "flex",
  flexDirection: "row",
  height: "100vh",
  overflow: "hidden",
});

const contentSectionWrapper = css({
  display: "none",
  xl: {
    width: "20%",
  },
  lg: {
    width: "30%",
  },
  md: {
    width: "40%",
    display: "flex",
  },
  height: "100%",
  color: "azure",
  overflow: "scroll",
});

const carouselWrapper = css({
  width: "100%",
  height: "80%",
  display: "flex",
  xl: {
    width: "80%",
  },
  lg: {
    width: "70%",
  },
  md: {
    width: "60%",
    height: "100%",
  },
});

const iframe = css({
  height: "80%",
  md: {
    height: "100%",
  },
  width: "100%",
  borderRadius: "16px",
  margin: "0 25px",
});

export default function GalleryPage({ params }: Route.LoaderArgs) {
  if (!(params.id in GalleryKeys)) {
    return;
  }

  const { title, description, content, images, autoplay } =
    GalleryPages[params.id as GalleryKeys];

  const isAGallery = images && images.length > 1;

  return (
    <>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />

      <Nav backButtonTo={toHomeWithOpeningSequenceComplete} />

      <div className={pageWrapper}>
        {content && <div className={contentSectionWrapper}>{content}</div>}

        {isAGallery ? (
          <div className={carouselWrapper}>
            <Carousel images={images} />
          </div>
        ) : (
          images && (
            <iframe
              className={iframe}
              src={images[0]}
              title={title}
              frameBorder="0"
              allow={`${autoplay && "autoplay; "}accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share`}
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )
        )}
      </div>

      {content && (
        <ExpandingInfoButton fullScreen mobileOnly>
          {content}
        </ExpandingInfoButton>
      )}
    </>
  );
}
