import { css } from "../../styled-system/css";
import furnitureBench1 from "../assets/images/furniture/furniture-bench-1.png";
import furnitureBench2 from "../assets/images/furniture/furniture-bench-2.png";
import furnitureMDF from "../assets/images/furniture/furniture-mdf.png";
import furnitureTable1 from "../assets/images/furniture/furniture-table-1.png";
import furnitureTable2 from "../assets/images/furniture/furniture-table-2.png";
import Carousel from "../components/Carousel";
import ExpandingInfoButton from "../components/ExpandingInfoButton";
import FurnitureContent from "../components/FurnitureContent";
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
    title: "Ergonomic Peeler",
    description: "Potato Peeler Handle Design",
    images: [
      "/img/PP1.png",
      "/img/PPsbk.png",
      "/img/PPtbk.png",
      "/img/PPtr.png",
      "/img/PPbbk.png",
      "/img/PPpbk.png",
      "/img/PPpr.png",
      "/img/PPcnc1.png",
      "/img/PPcnc2.png",
      "/img/PPcnc3.png",
    ],
    content: <PeelersContent />,
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
