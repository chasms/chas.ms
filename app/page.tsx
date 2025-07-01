import { HomeWrapper, LogoOverlay, LogoWrapper } from "./page.css";
import KundaliniWhiteLogo from "../public/img/kundalini-white.png";
import JavascriptTranspilersGalleryImage from "../public/img/JS0.png";
import SkylandGalleryImage from "../public/img/SK0.png";
import SkylandGalleryBannerImage from "../public/img/SKCsm.png";
import PeelersGalleryImage from "../public/img/PP0.png";
import ShakersGalleryImage from "../public/img/SP0.png";
import FurnitureGalleryImage from "../public/img/F0.png";
import MardiGrasGalleryImage from "../public/img/MG0.png";
import GalleryItem from "./components/GalleryItem";

export default function Home() {
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
            >
              BLOG
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="https://www.github.com/chasms"
              target="_blank"
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
            <Image
              alt="Salt & Pepper Shakers"
              className="work"
              src={ShakersGalleryImage}
            />
            <div className="subtitle bk">
              <p>
                <strong>semantic</strong> shakers
              </p>
            </div>
          </a>

          <GalleryItem
            href="SP.html"
            image={ShakersGalleryImage}
            imageAltText="Salt & Pepper Shakers"
          >
            <p>
              <strong>semantic</strong> shakers
            </p>
          </GalleryItem>

          <a className="window" href="JS.html">
            <Image
              alt=""
              className="work"
              src={JavascriptTranspilersGalleryImage}
            />
            <div className="subtitle bk">
              <p>Presentation on Javascript Transpilers</p>
            </div>
          </a>

          <a className="window" href="SK.html">
            <Image alt="" className="work" src={SkylandGalleryImage} />
            <div className="subtitle bk">
              <Image
                alt=""
                className="banner"
                src={SkylandGalleryBannerImage}
              />
            </div>
          </a>

          <a className="window" href="PP.html">
            <Image alt="" className="work" src={PeelersGalleryImage} />
            <div className="subtitle bk">
              <p>
                <strong>ergonomic</strong> peelers
              </p>
            </div>
          </a>

          <a className="window" href="F.html">
            <Image alt="" className="work" src={FurnitureGalleryImage} />
            <div className="subtitle bk">
              <p>furniture</p>
            </div>
          </a>

          <a className="window" href="MG.html">
            <Image alt="" className="work" src={MardiGrasGalleryImage} />
            <div className="subtitle bk">
              <p>new orleans</p>
            </div>
          </a>
        </div>
      </div>
    </HomeWrapper>
  );
}
