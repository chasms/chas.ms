import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { css, cva } from "../../styled-system/css";
import loadingAnimation from "../assets/loading-animation.webp";
import Carousel from "../components/Carousel";
import ExpandingInfoButton from "../components/ExpandingInfoButton";
import Nav from "../components/Nav";
import { GalleryKeys, GalleryPages } from "../content/galleryPages";
import { RouteParams, toHomeWithOpeningSequenceComplete } from "../routes";
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
  position: "relative",
});

const contentSectionWrapper = cva({
  base: {
    display: "none",
    lg: {
      display: "flex",
    },
    height: "100%",
    color: "azure",
    overflow: "hidden",
    transition: "width 0.3s ease, opacity 0.3s ease, padding 0.3s ease",
  },
  variants: {
    collapsed: {
      false: {
        xl: {
          width: "25%",
        },
        lg: {
          width: "35%",
        },
        opacity: 1,
        overflowY: "scroll",
      },
      true: {
        width: "0%",
        opacity: 0,
      },
    },
  },
});

const sidebarToggle = css({
  display: "none",
  lg: {
    display: "flex",
  },
  position: "absolute",
  left: "0",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 10,
  alignItems: "center",
  justifyContent: "center",
  width: "24px",
  height: "64px",
  borderRadius: "0 8px 8px 0",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "invert(30%)",
  cursor: "pointer",
  transition: "backdrop-filter 0.2s ease, background-color 0.2s ease",
  color: "white",
  fontSize: "14px",
  userSelect: "none",
  _hover: {
    backdropFilter: "invert(60%)",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
});

const carouselWrapper = cva({
  base: {
    height: "80%",
    display: "flex",
    md: {
      height: "100%",
    },
    padding: "0px 25px",
    transition: "width 0.3s ease",
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
      withContentSideSectionCollapsed: {
        width: "100%",
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
  const navigate = useNavigate();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    if (!(params.id in GalleryKeys)) {
      navigate(`/?${RouteParams.openingSequence}=${RouteParams.done}`);
    }
  }, []);

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
  const hasSidebar = content && !infoOverlayAllSizes;

  const getCarouselSize = () => {
    if (!hasSidebar) return "fullwidth" as const;
    if (sidebarCollapsed) return "withContentSideSectionCollapsed" as const;
    return "withContentSideSection" as const;
  };

  return (
    <>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />

      <Nav backButtonTo={toHomeWithOpeningSequenceComplete} />

      <div className={pageWrapper}>
        {hasSidebar && (
          <div className={contentSectionWrapper({ collapsed: sidebarCollapsed })}>
            {content}
          </div>
        )}

        {hasSidebar && (
          <div
            className={sidebarToggle}
            onClick={() => setSidebarCollapsed((prev) => !prev)}
            title={sidebarCollapsed ? "Show sidebar" : "Hide sidebar"}
          >
            {sidebarCollapsed ? "\u203A" : "\u2039"}
          </div>
        )}

        {isAGallery ? (
          <div
            className={carouselWrapper({
              size: getCarouselSize(),
            })}
          >
            <Carousel images={images} />
          </div>
        ) : (
          images && (
            <iframe
              className={iframe}
              style={{
                background: `rgba(0,0,0,0.5) url(${loadingAnimation}) center center no-repeat`,
                boxShadow: "1px 2px 5px -2px rgba(255, 0, 0, 0.5)",
              }}
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
