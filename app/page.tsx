import { styled } from "../styled-system/jsx";
import FurnitureGalleryImage from "./assets/img/FurnitureThumbnail.png";
import JavascriptTranspilersThumbnail from "./assets/img/JavascriptTranspilersThumbnail.png";
import KundaliniWhiteLogo from "./assets/img/kundalini-white.png";
import MardiGrasThumbnail from "./assets/img/MardiGrasThumbnail.png";
import PeelerThumbnail from "./assets/img/PeelerThumbnail.png";
import ShakersThumbnail from "./assets/img/ShakersThumbnail.png";
import SkylandBanner from "./assets/img/SkylandBanner.png";
import SkylandThumbnail from "./assets/img/SkylandThumbnail.png";
import GalleryItem from "./components/GalleryItem";

export const HomeWrapper = styled.div``;

export const LogoOverlay = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  position: absolute;
  z-index: 999;
  padding-top: 150px;
  top: 0%;
  transition: top 1.5s ease-in-out;
`;

export const LogoWrapper = styled.div`
  opacity: 0.3;
  transition: opacity 1.5s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export default function HomePage() {
  return (
    <HomeWrapper>
      <LogoOverlay>
        <LogoWrapper>
          <img src={KundaliniWhiteLogo} alt="chasms"></img>
        </LogoWrapper>
      </LogoOverlay>

      <nav className="reveal">
        <ul id="chasms_head">
          <li id="chasm">
            <p>
              CH<strong>ARLES </strong>A<strong>LBERT </strong>S
              <strong>A</strong>M<strong>UEL</strong>S
            </p>
          </li>
        </ul>

        <ul className="navigation">
          <li>
            <a
              className="nav-link"
              href="https://www.medium.com/@chasms"
              target="_blank"
              rel="noreferrer"
            >
              BLOG
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="https://www.github.com/chasms"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB
            </a>
          </li>
          <li>
            <a className="nav-link" href="info.html">
              ABOUT
            </a>
          </li>
        </ul>

        <ul className="icons">
          <li className="icon">
            <a
              href="mailto:chasms@chas.ms"
              className="sb small no-shadow border circle email"
            >
              Email
            </a>
          </li>
          <li className="icon">
            <a
              href="https://linkedin.com/in/chasms"
              target="_blank"
              className="sb small no-shadow border circle linkedin"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>

      <div className="content-area">
        <div className="background" id="main"></div>

        <div className="assets reveal">
          <a className="window" href="SP.html">
            <img
              alt="Salt & Pepper Shakers"
              className="work"
              src={ShakersThumbnail}
            />
            <div className="subtitle bk">
              <p>
                <strong>semantic</strong> shakers
              </p>
            </div>
          </a>

          <GalleryItem
            href="SP.html"
            image={ShakersThumbnail}
            imageAltText="Salt & Pepper Shakers"
          >
            <p>
              <strong>semantic</strong> shakers
            </p>
          </GalleryItem>

          <a className="window" href="JS.html">
            <img alt="" className="work" src={JavascriptTranspilersThumbnail} />
            <div className="subtitle bk">
              <p>Presentation on Javascript Transpilers</p>
            </div>
          </a>

          <a className="window" href="SK.html">
            <img alt="" className="work" src={SkylandThumbnail} />
            <div className="subtitle bk">
              <img alt="" className="banner" src={SkylandBanner} />
            </div>
          </a>

          <a className="window" href="PP.html">
            <img alt="" className="work" src={PeelerThumbnail} />
            <div className="subtitle bk">
              <p>
                <strong>ergonomic</strong> peelers
              </p>
            </div>
          </a>

          <a className="window" href="F.html">
            <img alt="" className="work" src={FurnitureGalleryImage} />
            <div className="subtitle bk">
              <p>furniture</p>
            </div>
          </a>

          <a className="window" href="MG.html">
            <img alt="" className="work" src={MardiGrasThumbnail} />
            <div className="subtitle bk">
              <p>new orleans</p>
            </div>
          </a>
        </div>
      </div>
    </HomeWrapper>
  );
}
