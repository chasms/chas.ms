import { css } from "../../styled-system/css";
import FinJSGif from "../assets/thumbnails/finjs-halfspeed-thumbnail.gif";
import FurnitureGalleryImage from "../assets/thumbnails/furniture-thumbnail.png";
import GMGif from "../assets/thumbnails/gm-halfspeed-thumbnail.gif";
import IndonesiaThumbnail from "../assets/thumbnails/indonesia-thumbnail.webp";
import JavascriptTranspilersThumbnail from "../assets/thumbnails/javascript-transpilers-thumbnail.png";
import MardiGrasThumbnail from "../assets/thumbnails/mardi-gras-thumbnail.png";
import NotaThumbnail from "../assets/thumbnails/nota-thumbnail.png";
import OlioThumbnail from "../assets/thumbnails/olio-thumbnail.png";
import OMWThumbnail from "../assets/thumbnails/omw-thumbnail.png";
import OriginTheoryThumbnail from "../assets/thumbnails/origin-theory-thumbnail.png";
import P5SpaceGif from "../assets/thumbnails/p5-space-halfspeed-thumbnail.gif";
import PeelerThumbnail from "../assets/thumbnails/peeler-thumbnail.png";
import PrintmakingThumbnail from "../assets/thumbnails/printmaking-thumbnail.webp";
import ReflectionsThumbnail from "../assets/thumbnails/reflections-thumbnail.png";
import Roll2WriteThumbnail from "../assets/thumbnails/roll2write-thumbnail1.png";
import ShakersThumbnail from "../assets/thumbnails/shakers-thumbnail.png";
import SkylandBanner from "../assets/thumbnails/skyland-thumbnail-banner.png";
import SkylandThumbnail from "../assets/thumbnails/skyland-thumbnail.png";
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
        href="https://roll2write.chas.ms"
        newTab
        image={Roll2WriteThumbnail}
        imageAltText="Roll2Write"
      >
        <p className={galleryBannerText}>
          <strong>Roll2Write</strong>, a songwriting oracle
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
        href={`/${RouteSlugs.project}/${GalleryKeys.indonesia}`}
        image={IndonesiaThumbnail}
        imageAltText="Yogyakarta Indonesia Photographs"
      >
        <p className={galleryBannerText}>
          <strong>Yogyakarta</strong>, Indonesia, 2014
        </p>
      </HomeProjectGalleryItem>

      <HomeProjectGalleryItem
        href={`/${RouteSlugs.project}/${GalleryKeys.printmaking}`}
        image={PrintmakingThumbnail}
        imageAltText="Printmaking"
      >
        <p className={galleryBannerText}>
          <strong>Printmaking</strong>
        </p>
      </HomeProjectGalleryItem>

      <HomeProjectGalleryItem
        href={`/${RouteSlugs.project}/${GalleryKeys.reflections}`}
        image={ReflectionsThumbnail}
        imageAltText="Extended Reflections Photographs"
      >
        <p className={galleryBannerText}>
          Extended <strong>Reflections</strong>, 2011
        </p>
      </HomeProjectGalleryItem>

      <HomeProjectGalleryItem
        href={RouteSlugs["origin-theory"]}
        image={OriginTheoryThumbnail}
        imageAltText="Origin Theory"
      >
        <p className={galleryBannerText}>
          <strong>Origin</strong> Theory, 2014
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
          <strong>mardi gras</strong>, new orleans, 2014
        </p>
      </HomeProjectGalleryItem>

      <HomeProjectGalleryItem
        href="https://olio.chas.ms"
        newTab
        image={OlioThumbnail}
        imageAltText="Olio"
      >
        <p className={galleryBannerText}>
          <strong>olio app</strong>, a collection of things
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
