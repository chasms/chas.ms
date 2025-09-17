import { css } from "../../styled-system/css";
import ConveneThumbnail from "../assets/thumbnails/convene-thumbnail.webp";
import FinJSGif from "../assets/thumbnails/finjs-thumbnail.webp";
import FurnitureGalleryImage from "../assets/thumbnails/furniture-thumbnail.webp";
import GMGif from "../assets/thumbnails/gm-thumbnail.webp";
import IndonesiaThumbnail from "../assets/thumbnails/indonesia-thumbnail.webp";
import JavascriptTranspilersThumbnail from "../assets/thumbnails/javascript-transpilers-thumbnail.webp";
import MardiGrasThumbnail from "../assets/thumbnails/mardi-gras-thumbnail.webp";
import NotaThumbnail from "../assets/thumbnails/nota-thumbnail.webp";
import OlioThumbnail from "../assets/thumbnails/olio-thumbnail.webp";
import OMWThumbnail from "../assets/thumbnails/omw-thumbnail.webp";
import OriginTheoryThumbnail from "../assets/thumbnails/origin-theory-thumbnail.webp";
import P5SpaceGif from "../assets/thumbnails/p5-space-thumbnail.webp";
import PeelerThumbnail from "../assets/thumbnails/peeler-thumbnail.webp";
import PrintmakingThumbnail from "../assets/thumbnails/printmaking-thumbnail.webp";
import ReflectionsThumbnail from "../assets/thumbnails/reflections-thumbnail.webp";
import Roll2WriteThumbnail from "../assets/thumbnails/roll2write-thumbnail1.webp";
import ShakersThumbnail from "../assets/thumbnails/shakers-thumbnail.webp";
import SkylandBanner from "../assets/thumbnails/skyland-thumbnail-banner.webp";
import SkylandThumbnail from "../assets/thumbnails/skyland-thumbnail.webp";
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

const HomeGalleryItems = [
  {
    href: `/${RouteSlugs.project}/${GalleryKeys.giantmachines}`,
    image: GMGif,
    imageAltText: "Giant Machines",
    bannerElement: (
      <p className={galleryBannerText}>
        <strong>Giant Machines</strong> Acquired by Deloitte
      </p>
    ),
  },
  {
    href: "https://roll2write.chas.ms",
    newTab: true,
    image: Roll2WriteThumbnail,
    imageAltText: "Roll2Write",
    bannerElement: (
      <p className={galleryBannerText}>
        <strong>Roll2Write</strong>, a songwriting oracle
      </p>
    ),
  },
  {
    href: `/${RouteSlugs.project}/${GalleryKeys.onmyway}`,
    image: OMWThumbnail,
    imageAltText: "On My Way",
    bannerElement: (
      <p className={galleryBannerText}>
        <strong>On My Way</strong> National Grid
      </p>
    ),
  },
  {
    href: `/${RouteSlugs["p5-space"]}`,
    image: P5SpaceGif,
    imageAltText: "P5 Space Project",
    bannerElement: (
      <p className={galleryBannerText}>
        p5 <strong>Space</strong>
      </p>
    ),
  },
  {
    href: `/${RouteSlugs.project}/${GalleryKeys.convene}`,
    image: ConveneThumbnail,
    imageAltText: "Convene",
    bannerElement: (
      <p className={galleryBannerText}>
        <strong>Convene</strong> Bookings and Payments
      </p>
    ),
  },
  {
    href: `/${RouteSlugs.project}/${GalleryKeys["fin-js"]}`,
    image: FinJSGif,
    imageAltText: "FinJS",
    bannerElement: (
      <p className={galleryBannerText}>
        <strong>Desktop App Interoperability,</strong> FinJS 2019
      </p>
    ),
  },
  {
    href: `/${RouteSlugs.project}/${GalleryKeys.nota}`,
    image: NotaThumbnail,
    imageAltText: "Nota",
    bannerElement: (
      <p className={galleryBannerText}>
        <strong>Nota</strong>, An M&T Bank Product
      </p>
    ),
  },
  {
    href: `/${RouteSlugs.project}/${GalleryKeys.indonesia}`,
    image: IndonesiaThumbnail,
    imageAltText: "Yogyakarta Indonesia Photographs",
    bannerElement: (
      <p className={galleryBannerText}>
        <strong>Yogyakarta</strong>, Indonesia, 2014
      </p>
    ),
  },
  {
    href: `/${RouteSlugs.project}/${GalleryKeys.printmaking}`,
    image: PrintmakingThumbnail,
    imageAltText: "Printmaking",
    bannerElement: (
      <p className={galleryBannerText}>
        <strong>Printmaking</strong>
      </p>
    ),
  },
  {
    href: `/${RouteSlugs.project}/${GalleryKeys.reflections}`,
    image: ReflectionsThumbnail,
    imageAltText: "Extended Reflections Photographs",
    bannerElement: (
      <p className={galleryBannerText}>
        Extended <strong>Reflections</strong>, 2011
      </p>
    ),
  },
  {
    href: RouteSlugs["origin-theory"],
    image: OriginTheoryThumbnail,
    imageAltText: "Origin Theory",
    bannerElement: (
      <p className={galleryBannerText}>
        <strong>Origin</strong> Theory, 2014
      </p>
    ),
  },
  {
    href: `/${RouteSlugs.project}/${GalleryKeys["salt-and-pepper"]}`,
    image: ShakersThumbnail,
    imageAltText: "Salt & Pepper Shakers",
    bannerElement: (
      <p className={galleryBannerText}>
        <strong>semantic</strong> shakers
      </p>
    ),
  },
  {
    href: `/${RouteSlugs.project}/${GalleryKeys.skyland}`,
    image: SkylandThumbnail,
    imageAltText: "",
    bannerElement: <img alt="s" className="banner" src={SkylandBanner} />,
  },
  {
    href: `/${RouteSlugs.project}/${GalleryKeys.peelers}`,
    imageAltText: "Potato Peelers",
    image: PeelerThumbnail,
    bannerElement: (
      <p className={galleryBannerText}>
        <strong>ergonomic</strong> peelers
      </p>
    ),
  },
  {
    href: `/${RouteSlugs.project}/${GalleryKeys.furniture}`,
    image: FurnitureGalleryImage,
    imageAltText: "Furniture",
    bannerElement: (
      <p className={galleryBannerText}>
        <strong>furniture</strong>
      </p>
    ),
  },
  {
    href: `/${RouteSlugs.project}/${GalleryKeys["mardi-gras"]}`,
    image: MardiGrasThumbnail,
    imageAltText: "Mardi Gras",
    bannerElement: (
      <p className={galleryBannerText}>
        <strong>mardi gras</strong>, new orleans, 2014
      </p>
    ),
  },
  {
    href: "https://olio.chas.ms",
    newTab: true,
    image: OlioThumbnail,
    imageAltText: "Olio",
    bannerElement: (
      <p className={galleryBannerText}>
        <strong>olio app</strong>, a collection of things
      </p>
    ),
  },
  {
    href: `/${RouteSlugs.project}/${GalleryKeys["js-transpilers"]}`,
    image: JavascriptTranspilersThumbnail,
    imageAltText: "JavaScript Transpilers Presentation",
    bannerElement: (
      <p className={galleryBannerText}>
        <strong>Presentation on Transpilers</strong>, 2017
      </p>
    ),
  },
];

export default function HomeProjectsGallery() {
  return (
    <div className={gallery}>
      {HomeGalleryItems.map((project) => (
        <HomeProjectGalleryItem
          key={project.href}
          href={project.href}
          newTab={project.newTab}
          image={project.image}
          imageAltText={project.imageAltText}
        >
          {project.bannerElement}
        </HomeProjectGalleryItem>
      ))}
    </div>
  );
}
