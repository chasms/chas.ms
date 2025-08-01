import { css } from "../../styled-system/css";
import furnitureBench1 from "../assets/images/furniture/furniture-bench-1.png";
import furnitureBench2 from "../assets/images/furniture/furniture-bench-2.png";
import furnitureMDF from "../assets/images/furniture/furniture-mdf.png";
import furnitureTable1 from "../assets/images/furniture/furniture-table-1.png";
import furnitureTable2 from "../assets/images/furniture/furniture-table-2.png";
import mardiGras10 from "../assets/images/mardi-gras/mardi-gras-10.png";
import mardiGras11 from "../assets/images/mardi-gras/mardi-gras-11.png";
import mardiGras12 from "../assets/images/mardi-gras/mardi-gras-12.png";
import mardiGras13 from "../assets/images/mardi-gras/mardi-gras-13.png";
import mardiGras14 from "../assets/images/mardi-gras/mardi-gras-14.png";
import mardiGras15 from "../assets/images/mardi-gras/mardi-gras-15.png";
import mardiGras16 from "../assets/images/mardi-gras/mardi-gras-16.png";
import mardiGras17 from "../assets/images/mardi-gras/mardi-gras-17.png";
import mardiGras18 from "../assets/images/mardi-gras/mardi-gras-18.png";
import mardiGras19 from "../assets/images/mardi-gras/mardi-gras-19.png";
import mardiGras20 from "../assets/images/mardi-gras/mardi-gras-20.png";
import mardiGras21 from "../assets/images/mardi-gras/mardi-gras-21.png";
import mardiGras22 from "../assets/images/mardi-gras/mardi-gras-22.png";
import mardiGras23 from "../assets/images/mardi-gras/mardi-gras-23.png";
import mardiGras25 from "../assets/images/mardi-gras/mardi-gras-25.png";
import mardiGras26 from "../assets/images/mardi-gras/mardi-gras-26.png";
import mardiGras27 from "../assets/images/mardi-gras/mardi-gras-27.png";
import mardiGras28 from "../assets/images/mardi-gras/mardi-gras-28.png";
import mardiGras29 from "../assets/images/mardi-gras/mardi-gras-29.png";
import mardiGras3 from "../assets/images/mardi-gras/mardi-gras-3.png";
import mardiGras30 from "../assets/images/mardi-gras/mardi-gras-30.png";
import mardiGras33 from "../assets/images/mardi-gras/mardi-gras-33.png";
import mardiGras34 from "../assets/images/mardi-gras/mardi-gras-34.png";
import mardiGras5 from "../assets/images/mardi-gras/mardi-gras-5.png";
import mardiGras6 from "../assets/images/mardi-gras/mardi-gras-6.png";
import mardiGras7 from "../assets/images/mardi-gras/mardi-gras-7.png";
import mardiGras8 from "../assets/images/mardi-gras/mardi-gras-8.png";
import mardiGras9 from "../assets/images/mardi-gras/mardi-gras-9.png";
import peelers1 from "../assets/images/peelers/peelers1.png";
import peelersbbk from "../assets/images/peelers/peelersbbk.png";
import peelerscnc1 from "../assets/images/peelers/peelerscnc1.png";
import peelerscnc2 from "../assets/images/peelers/peelerscnc2.png";
import peelerscnc3 from "../assets/images/peelers/peelerscnc3.png";
import peelerspbk from "../assets/images/peelers/peelerspbk.png";
import peelerspr from "../assets/images/peelers/peelerspr.png";
import peelerssbk from "../assets/images/peelers/peelerssbk.png";
import peelerstbk from "../assets/images/peelers/peelerstbk.png";
import peelerstr from "../assets/images/peelers/peelerstr.png";
import Carousel from "../components/Carousel";
import ExpandingInfoButton from "../components/ExpandingInfoButton";
import FurnitureContent from "../components/FurnitureContent";
import MardiGrasContent from "../components/MardiGrasContent";
import Nav from "../components/Nav";
import PeelersContent from "../components/PeelersContent";
import { toHomeWithOpeningSequenceComplete } from "../routes";
import type { Route } from "./+types/websites";

const pageWrapper = css({
  width: "100%",
  margin: "0 auto",
  padding: "50px 40px",
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  overflow: "hidden",
});

export enum GalleryKeys {
  furniture = "furniture",
  peelers = "peelers",
  "mardi-gras" = "mardi-gras",
}

interface GalleryPageDataType {
  title: string;
  description: string;
  images?: string[];
  content: React.ReactNode;
}

const GalleryPages: Record<GalleryKeys, GalleryPageDataType> = {
  [GalleryKeys.furniture]: {
    title: "Furniture",
    description: "Hand-made furniture",
    images: [
      furnitureMDF,
      furnitureTable1,
      furnitureTable2,
      furnitureBench1,
      furnitureBench2,
    ],
    content: <FurnitureContent />,
  },
  [GalleryKeys.peelers]: {
    title: "Ergonomic Potato Peeler",
    description: "Potato Peeler Handle Design",
    images: [
      peelers1,
      peelerssbk,
      peelerstbk,
      peelerstr,
      peelersbbk,
      peelerspbk,
      peelerspr,
      peelerscnc1,
      peelerscnc2,
      peelerscnc3,
    ],
    content: <PeelersContent />,
  },
  [GalleryKeys["mardi-gras"]]: {
    title: "Mardi Gras",
    description: "Photos from Mardi Gras in New Orleans",
    images: [
      mardiGras25,
      mardiGras26,
      mardiGras23,
      mardiGras12,
      mardiGras13,
      mardiGras27,
      mardiGras28,
      mardiGras29,
      mardiGras30,
      mardiGras33,
      mardiGras34,
      mardiGras8,
      mardiGras9,
      mardiGras10,
      mardiGras11,
      mardiGras14,
      mardiGras15,
      mardiGras16,
      mardiGras17,
      mardiGras18,
      mardiGras19,
      mardiGras20,
      mardiGras21,
      mardiGras22,
      mardiGras5,
      mardiGras6,
      mardiGras7,
      mardiGras3,
    ],
    content: <MardiGrasContent />,
  },
};

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
        {images && <Carousel images={images} />}
      </div>

      {content && (
        <ExpandingInfoButton fullScreen>{content}</ExpandingInfoButton>
      )}
    </>
  );
}
