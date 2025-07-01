import { css } from "../styled-system/css";
import FurnitureGalleryImage from "./assets/images/FurnitureThumbnail.png";
import JavascriptTranspilersThumbnail from "./assets/images/JavascriptTranspilersThumbnail.png";
import KundaliniWhiteLogo from "./assets/images/kundalini-white.png";
import MardiGrasThumbnail from "./assets/images/MardiGrasThumbnail.png";
import PeelerThumbnail from "./assets/images/PeelerThumbnail.png";
import ReflectionsRed from "./assets/images/ReflectionsRed.png";
import ShakersThumbnail from "./assets/images/ShakersThumbnail.png";
import SkylandBanner from "./assets/images/SkylandBanner.png";
import SkylandThumbnail from "./assets/images/SkylandThumbnail.png";
import GalleryItem from "./components/GalleryItem";
import Nav from "./components/Nav";

const logoOverlay = css({
  height: "100%",
  width: "100%",
  textAlign: "center",
  position: "absolute",
  zIndex: 999,
  paddingTop: "150px",
  top: "0%",
  transition: "top 1.5s ease-in-out",
  display: "none",
});

const logoWrapper = css({
  opacity: "0.3",
  transition: "opacity 1.5s ease-in-out",

  _hover: {
    opacity: "0.8",
  },
});

const contentArea = css({
  position: "absolute",
  height: "100%",
  width: "100%",
  overflow: "scroll",
});

const background = css({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: "-100",
});

const gallery = css({
  width: "100%",
  paddingTop: "50px",
  paddingBottom: "20px",
  marginTop: "50px",
});

export default function HomePage() {
  return (
    <>
      <div className={logoOverlay}>
        <div className={logoWrapper}>
          <img src={KundaliniWhiteLogo} alt="chasms"></img>
        </div>
      </div>

      <Nav />

      <div className={contentArea}>
        <div
          className={background}
          style={{
            background: `url("${ReflectionsRed}") no-repeat bottom center`,
            backgroundSize: "cover",
            opacity: "0.4",
          }}
        ></div>

        <div className={gallery}>
          <GalleryItem
            href="SP.html"
            image={ShakersThumbnail}
            imageAltText="Salt & Pepper Shakers"
          >
            <p>
              <strong>semantic</strong> shakers
            </p>
          </GalleryItem>

          <GalleryItem
            href="JS.html"
            image={JavascriptTranspilersThumbnail}
            imageAltText=""
          >
            <p>Presentation on Javascript Transpilers</p>
          </GalleryItem>

          <GalleryItem href="SK.html" image={SkylandThumbnail} imageAltText="">
            <img alt="s" className="banner" src={SkylandBanner} />
          </GalleryItem>

          <GalleryItem href="PP.html" imageAltText="" image={PeelerThumbnail}>
            <p>
              <strong>ergonomic</strong> peelers
            </p>
          </GalleryItem>

          <GalleryItem
            href="F.html"
            image={FurnitureGalleryImage}
            imageAltText=""
          >
            <p>furniture</p>
          </GalleryItem>

          <GalleryItem
            href="MG.html"
            image={MardiGrasThumbnail}
            imageAltText=""
          >
            <p>new orleans</p>
          </GalleryItem>
        </div>
      </div>
    </>
  );
}
