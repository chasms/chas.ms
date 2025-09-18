import { useState, type JSX, type ReactNode } from "react";
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
import HomeProjectGalleryItem from "./HomeProjectGalleryItem";

const pageWrapper = css({
  marginTop: "50px",
});

const filterButtonsWrapper = css({
  height: "25px",
  width: "400px",
  marginLeft: "90px",
  padding: "5px 25px",
  position: "fixed",
  zIndex: "2",
});

const filterButtonSharedStyles = {
  cursor: "pointer",
  height: "25px",
  borderRadius: "12.5px",
  fontSize: "12px",
  padding: "0 10px",
  marginRight: "10px",
  userSelect: "none",
  transition: "all 0.2s ease-in-out",
};

const filterButtonInactive = css({
  ...filterButtonSharedStyles,
  outline: "1px solid rgba(240, 255, 255, 0.6)",
  color: "rgba(240, 255, 255, 0.6)",
  background: "rgba(0, 0, 0, 0.5)",
  backdropFilter: "blur(2px)",

  _hover: {
    outline: "1px solid rgba(240, 255, 255, 0.8)",
    color: "rgba(240, 255, 255, 0.8)",
  },
});

const filterButtonActive = css({
  ...filterButtonSharedStyles,
  outline: "1px solid transparent",
  color: "azure",
  background: "rgba(255, 0, 0, 0.7)",
  backdropFilter: "invert(100%) blur(2px)",
  boxShadow: "3px 3px 0.2em red, -4px 0 0.2em olive",

  _hover: {
    outline: "1px solid white",
    color: "white",
  },
});

const gallery = css({
  width: "100%",
  paddingTop: "25px",
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

enum Filters {
  engineering = "engineering",
  artwork = "artwork",
  design = "design",
}

type FilterState = Record<Filters, boolean>;
const defaultFilterState = {
  [Filters.engineering]: false,
  [Filters.artwork]: false,
  [Filters.design]: false,
};

const HomeGalleryItems: Array<{
  href: string;
  image: string;
  imageAltText: string;
  bannerElement: JSX.Element;
  filters: Filters[];
  newTab?: boolean;
}> = [
  {
    href: `/${RouteSlugs.project}/${GalleryKeys.giantmachines}`,
    image: GMGif,
    imageAltText: "Giant Machines",
    bannerElement: (
      <p className={galleryBannerText}>
        <strong>Giant Machines</strong> Acquired by Deloitte
      </p>
    ),
    filters: [Filters.engineering],
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
    filters: [Filters.engineering],
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
    filters: [Filters.engineering],
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
    filters: [Filters.engineering],
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
    filters: [Filters.engineering],
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
    filters: [Filters.engineering],
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
    filters: [Filters.engineering],
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
    filters: [Filters.artwork],
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
    filters: [Filters.artwork],
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
    filters: [Filters.artwork],
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
    filters: [Filters.design],
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
    filters: [Filters.design],
  },
  {
    href: `/${RouteSlugs.project}/${GalleryKeys.skyland}`,
    image: SkylandThumbnail,
    imageAltText: "",
    bannerElement: <img alt="s" className="banner" src={SkylandBanner} />,
    filters: [Filters.artwork],
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
    filters: [Filters.design],
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
    filters: [Filters.design],
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
    filters: [Filters.artwork],
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
    filters: [Filters.engineering],
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
    filters: [Filters.engineering],
  },
];

export default function HomeProjectsGallery() {
  const [filters, setFilters] = useState<FilterState>(defaultFilterState);

  const toggleFilter = (filter: Filters) => {
    setFilters({
      ...filters,
      [filter]: !filters[filter],
    });
  };

  const allFiltersOff = !Object.values(Filters).find(
    (filter) => !!filters[filter],
  );
  return (
    <div className={pageWrapper}>
      <div className={filterButtonsWrapper}>
        <button
          className={
            filters[Filters.engineering]
              ? filterButtonActive
              : filterButtonInactive
          }
          onClick={() => toggleFilter(Filters.engineering)}
        >
          Engineering
        </button>
        <button
          className={
            filters[Filters.artwork] ? filterButtonActive : filterButtonInactive
          }
          onClick={() => toggleFilter(Filters.artwork)}
        >
          Artwork
        </button>
        <button
          className={
            filters[Filters.design] ? filterButtonActive : filterButtonInactive
          }
          onClick={() => toggleFilter(Filters.design)}
        >
          Design
        </button>
      </div>
      <div className={gallery}>
        {HomeGalleryItems.reduce((accumulator: ReactNode[], project) => {
          if (
            allFiltersOff ||
            project.filters.find((filter) => !!filters[filter])
          ) {
            const element = (
              <HomeProjectGalleryItem
                key={project.href}
                href={project.href}
                newTab={project.newTab}
                image={project.image}
                imageAltText={project.imageAltText}
              >
                {project.bannerElement}
              </HomeProjectGalleryItem>
            );
            accumulator.push(element);
          }

          return accumulator;
        }, [])}
      </div>
    </div>
  );
}
