import { css } from "../../styled-system/css";
import FinJSGif from "../assets/images/finjs-halfspeed.gif";
import FurnitureGalleryImage from "../assets/images/FurnitureThumbnail.png";
import GMGif from "../assets/images/gm-halfspeed.gif";
import JavascriptTranspilersThumbnail from "../assets/images/JavascriptTranspilersThumbnail.png";
import MardiGrasThumbnail from "../assets/images/MardiGrasThumbnail.png";
import NotaThumbnail from "../assets/images/nota.png";
import OMWThumbnail from "../assets/images/OMWThumbnail.png";
import P5SpaceGif from "../assets/images/p5-space-halfspeed.gif";
import PeelerThumbnail from "../assets/images/PeelerThumbnail.png";
import ShakersThumbnail from "../assets/images/ShakersThumbnail.png";
import SkylandBanner from "../assets/images/SkylandBanner.png";
import SkylandThumbnail from "../assets/images/SkylandThumbnail.png";
import { GalleryKeys } from "../content/galleryPages";
import { RouteSlugs } from "../routes";
import HomeProjectGalleryItem, {
  galleryItemHorizontalSpacing,
} from "./HomeProjectGalleryItem";

const gallery = css({
  width: "100%",
  marginTop: "50px",
  padding: `15px ${galleryItemHorizontalSpacing}`,
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  userSelect: "none",
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

export default function HomeProjectsGallery() {
  return (
    <div className={gallery}>
      <HomeProjectGalleryItem
        href={`/${RouteSlugs.project}/${GalleryKeys.giantmachines}`}
        image={GMGif}
        imageAltText="Giant Machines"
      >
        <p className={galleryBannerText}>
          <strong>Giant Machines</strong> Acquired by Deloitte
        </p>
      </HomeProjectGalleryItem>

      <HomeProjectGalleryItem
        href={`/${RouteSlugs.project}/${GalleryKeys.onmyway}`}
        image={OMWThumbnail}
        imageAltText="On My Way"
      >
        <p className={galleryBannerText}>
          <strong>On My Way</strong> National Grid
        </p>
      </HomeProjectGalleryItem>

      <HomeProjectGalleryItem
        href={`/${RouteSlugs["p5-space"]}`}
        image={P5SpaceGif}
        imageAltText="P5 Space Project"
      >
        <p className={galleryBannerText}>
          p5 <strong>Space</strong>
        </p>
      </HomeProjectGalleryItem>

      <HomeProjectGalleryItem
        href={`/${RouteSlugs.project}/${GalleryKeys["fin-js"]}`}
        image={FinJSGif}
        imageAltText="FinJS"
      >
        <p className={galleryBannerText}>
          <strong>Desktop App Interoperability,</strong> FinJS 2019
        </p>
      </HomeProjectGalleryItem>

      <HomeProjectGalleryItem
        href={`/${RouteSlugs.project}/${GalleryKeys.nota}`}
        image={NotaThumbnail}
        imageAltText="Nota"
      >
        <p className={galleryBannerText}>
          <strong>Nota</strong>, An M&T Bank Product
        </p>
      </HomeProjectGalleryItem>

      <HomeProjectGalleryItem
        href={`/${RouteSlugs.project}/${GalleryKeys["salt-and-pepper"]}`}
        image={ShakersThumbnail}
        imageAltText="Salt & Pepper Shakers"
      >
        <p className={galleryBannerText}>
          <strong>semantic</strong> shakers
        </p>
      </HomeProjectGalleryItem>

      <HomeProjectGalleryItem
        href={`/${RouteSlugs.project}/${GalleryKeys.skyland}`}
        image={SkylandThumbnail}
        imageAltText=""
      >
        <img alt="s" className="banner" src={SkylandBanner} />
      </HomeProjectGalleryItem>

      <HomeProjectGalleryItem
        href={`/${RouteSlugs.project}/${GalleryKeys.peelers}`}
        imageAltText="Potato Peelers"
        image={PeelerThumbnail}
      >
        <p className={galleryBannerText}>
          <strong>ergonomic</strong> peelers
        </p>
      </HomeProjectGalleryItem>

      <HomeProjectGalleryItem
        href={`/${RouteSlugs.project}/${GalleryKeys.furniture}`}
        image={FurnitureGalleryImage}
        imageAltText="Furniture"
      >
        <p className={galleryBannerText}>
          <strong>furniture</strong>
        </p>
      </HomeProjectGalleryItem>

      <HomeProjectGalleryItem
        href={`/${RouteSlugs.project}/${GalleryKeys["mardi-gras"]}`}
        image={MardiGrasThumbnail}
        imageAltText="Mardi Gras"
      >
        <p className={galleryBannerText}>
          <strong>mardi gras</strong>, new orleans
        </p>
      </HomeProjectGalleryItem>

      <HomeProjectGalleryItem
        href={`/${RouteSlugs.project}/${GalleryKeys["js-transpilers"]}`}
        image={JavascriptTranspilersThumbnail}
        imageAltText="JavaScript Transpilers Presentation"
      >
        <p className={galleryBannerText}>
          <strong>Presentation on Transpilers</strong>, 2017
        </p>
      </HomeProjectGalleryItem>
    </div>
  );
}
