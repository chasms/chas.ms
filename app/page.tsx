import { styled } from "../styled-system/jsx";
import JavascriptTranspilersThumbnail from "./assets/images/JavascriptTranspilersThumbnail.png";
import KundaliniWhiteLogo from "./assets/images/kundalini-white.png";
import MardiGrasThumbnail from "./assets/images/MardiGrasThumbnail.png";
import PeelerThumbnail from "./assets/images/PeelerThumbnail.png";
import ShakersThumbnail from "./assets/images/ShakersThumbnail.png";
import SkylandBanner from "./assets/images/SkylandBanner.png";
import SkylandThumbnail from "./assets/images/SkylandThumbnail.png";
import FurnitureGalleryImage from "./assets/img/FurnitureThumbnail.png";
import GalleryItem from "./components/GalleryItem";
import Nav from "./components/Nav";

const HomeWrapper = styled.div``;

const LogoOverlay = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  position: absolute;
  z-index: 999;
  padding-top: 150px;
  top: 0%;
  transition: top 1.5s ease-in-out;
  display: none;
`;

const LogoWrapper = styled.div`
  opacity: 0.3;
  transition: opacity 1.5s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

const ContentArea = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: scroll;
`;

export default function HomePage() {
  return (
    <HomeWrapper>
      <LogoOverlay>
        <LogoWrapper>
          <img src={KundaliniWhiteLogo} alt="chasms"></img>
        </LogoWrapper>
      </LogoOverlay>

      <Nav />

      <ContentArea>
        <div className="background" id="main"></div>

        <div className="assets reveal">
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
      </ContentArea>
    </HomeWrapper>
  );
}
