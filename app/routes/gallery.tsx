import { css } from "../../styled-system/css";
import Carousel from "../components/Carousel";
import ExpandingInfoButton from "../components/ExpandingInfoButton";
import Nav from "../components/Nav";
import { GalleryKeys, GalleryPages } from "../content/galleryPages";
import { toHomeWithOpeningSequenceComplete } from "../routes";
import type { Route } from "./+types/websites";

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

export default function GalleryPage({ params }: Route.LoaderArgs) {
  if (!(params.id in GalleryKeys)) {
    return;
  }

  const { title, description, content, images } =
    GalleryPages[params.id as GalleryKeys];

  return (
    <>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />

      <Nav backButtonTo={toHomeWithOpeningSequenceComplete} />

      <div className={pageWrapper}>
        {content && <div className={contentSectionWrapper}>{content}</div>}

        {images && (
          <div className={carouselWrapper}>
            <Carousel images={images} />
          </div>
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
