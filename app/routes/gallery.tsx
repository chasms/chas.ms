import { css, cva } from "../../styled-system/css";
import Carousel from "../components/Carousel";
import ExpandingInfoButton from "../components/ExpandingInfoButton";
import Nav from "../components/Nav";
import { GalleryKeys, GalleryPages } from "../content/galleryPages";
import { toHomeWithOpeningSequenceComplete } from "../routes";
import type { Route } from "./+types/gallery";

const pageWrapper = css({
  width: "100%",
  margin: "0 auto",
  lg: {
    padding: "50px 40px",
  },
  padding: "50px 20px",
  display: "flex",
  flexDirection: "row",
  height: "100vh",
  overflow: "hidden",
});

const contentSectionWrapper = css({
  display: "none",
  xl: {
    width: "25%",
    display: "flex",
  },
  lg: {
    width: "35%",
    display: "flex",
  },
  height: "100%",
  color: "azure",
  overflow: "scroll",
});

const carouselWrapper = cva({
  base: {
    height: "80%",
    display: "flex",
    md: {
      height: "100%",
    },
    padding: "0px 25px",
  },
  variants: {
    size: {
      fullwidth: {
        width: "100%",
      },
      withContentSideSection: {
        width: "100%",
        xl: {
          width: "80%",
        },
        lg: {
          width: "70%",
        },
      },
    },
  },
});

const iframe = css({
  height: "90%",
  lg: {
    height: "100%",
    margin: "0 25px",
  },
  width: "100%",
  borderRadius: "16px",
  margin: "0 5px",
});

export default function GalleryPage({ params }: Route.LoaderArgs) {
  if (!(params.id in GalleryKeys)) {
    return;
  }

  const {
    title,
    description,
    content,
    images,
    autoplay,
    infoOverlayHalfScreen,
    infoOverlayAllSizes,
  } = GalleryPages[params.id as GalleryKeys];

  const isAGallery = images && images.length > 1;

  return (
    <>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />

      <Nav backButtonTo={toHomeWithOpeningSequenceComplete} />

      <div className={pageWrapper}>
        {content && !infoOverlayAllSizes && (
          <div className={contentSectionWrapper}>{content}</div>
        )}

        {isAGallery ? (
          <div
            className={carouselWrapper({
              size:
                content && !infoOverlayAllSizes
                  ? "withContentSideSection"
                  : "fullwidth",
            })}
          >
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
              sandbox={
                params.id === GalleryKeys.convene
                  ? "allow-same-site-none-cookies allow-scripts allow-forms"
                  : undefined
              }
            ></iframe>
          )
        )}
      </div>

      {content && (
        <ExpandingInfoButton
          fullScreen={!infoOverlayHalfScreen}
          mobileOnly={!infoOverlayAllSizes}
        >
          {content}
        </ExpandingInfoButton>
      )}
    </>
  );
}
