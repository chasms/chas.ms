import { css } from "../../styled-system/css";
import FinJSGif from "../assets/images/finjs-halfspeed.gif";
import FurnitureGalleryImage from "../assets/images/FurnitureThumbnail.png";
import GMGif from "../assets/images/gm-halfspeed.gif";
import JavascriptTranspilersThumbnail from "../assets/images/JavascriptTranspilersThumbnail.png";
import MardiGrasThumbnail from "../assets/images/MardiGrasThumbnail.png";
import P5SpaceGif from "../assets/images/p5-space-halfspeed.gif";
import PeelerThumbnail from "../assets/images/PeelerThumbnail.png";
import ShakersThumbnail from "../assets/images/ShakersThumbnail.png";
import SkylandBanner from "../assets/images/SkylandBanner.png";
import SkylandThumbnail from "../assets/images/SkylandThumbnail.png";
import GalleryItem from "./GalleryItem";

const gallery = css({
  width: "100%",
  paddingTop: "50px",
  paddingBottom: "20px",
  marginTop: "50px",
});

const galleryBannerText = css({
  fontFamily: "San Francisco, sans-serif",
  fontSize: "16px",
  fontWeight: 200,
  fontStyle: "italic",
  opacity: 0,
  padding: "10px",
  color: "azure",
  marginLeft: "25px",
  transition: "opacity .75s ease-in-out",

  _groupHover: {
    opacity: 1,
  },
});

export default function Gallery() {
  return (
    <div className={gallery}>
      <GalleryItem
        href="https://web.archive.org/web/20221129225342/https://www.giantmachines.com/"
        newTab
        image={GMGif}
        imageAltText="Giant Machines"
      >
        <p className={galleryBannerText}>
          <strong>Giant Machines</strong> Acquired by Deloitte
        </p>
      </GalleryItem>

      <GalleryItem
        href="/p5-space"
        image={P5SpaceGif}
        imageAltText="P5 Space Project"
      >
        <p className={galleryBannerText}>
          p5 <strong>Space</strong>
        </p>
      </GalleryItem>

      <GalleryItem href="/fin-js" image={FinJSGif} imageAltText="FinJS">
        <p className={galleryBannerText}>
          <strong>Desktop App Interoperability,</strong> FinJS 2019
        </p>
      </GalleryItem>

      <GalleryItem
        href="https://chas.ms/sp"
        reloadDocument
        image={ShakersThumbnail}
        imageAltText="Salt & Pepper Shakers"
      >
        <p className={galleryBannerText}>
          <strong>semantic</strong> shakers
        </p>
      </GalleryItem>

      <GalleryItem
        href="https://chas.ms/js"
        reloadDocument
        image={JavascriptTranspilersThumbnail}
        imageAltText=""
      >
        <p className={galleryBannerText}>
          <strong>Presentation on Transpilers</strong>, 2017
        </p>
      </GalleryItem>

      <GalleryItem
        href="https://chas.ms/sk"
        reloadDocument
        image={SkylandThumbnail}
        imageAltText=""
      >
        <img alt="s" className="banner" src={SkylandBanner} />
      </GalleryItem>

      <GalleryItem
        href="https://chas.ms/pp"
        reloadDocument
        imageAltText=""
        image={PeelerThumbnail}
      >
        <p className={galleryBannerText}>
          <strong>ergonomic</strong> peelers
        </p>
      </GalleryItem>

      <GalleryItem
        href="https://chas.ms/f"
        reloadDocument
        image={FurnitureGalleryImage}
        imageAltText=""
      >
        <p className={galleryBannerText}>
          <strong>furniture</strong>
        </p>
      </GalleryItem>

      <GalleryItem
        href="https://chas.ms/mg"
        reloadDocument
        image={MardiGrasThumbnail}
        imageAltText=""
      >
        <p className={galleryBannerText}>
          <strong>mardi gras</strong>, new orleans
        </p>
      </GalleryItem>
    </div>
  );
}
