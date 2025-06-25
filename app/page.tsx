import { HomeWrapper, LogoOverlay, LogoWrapper } from "./page.css";

export default function Home() {
  return (
    <HomeWrapper>
      <LogoOverlay>
        <LogoWrapper>
          <img src="img/kundalini-white.png" alt="chasms"></img>
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
            <img
              alt="Salt & Pepper Shakers"
              className="work"
              src="/img/SP0.png"
            />
            <div className="subtitle bk">
              <p>
                <strong>semantic</strong> shakers
              </p>
            </div>
          </a>

          <a className="window" href="JS.html">
            <img alt="" className="work" src="/img/JS0.png" />
            <div className="subtitle bk">
              <p>Presentation on Javascript Transpilers</p>
            </div>
          </a>

          <a className="window" href="SK.html">
            <img alt="" className="work" src="/img/SK0.png" />
            <div className="subtitle bk">
              <img alt="" className="banner" src="/img/SKCsm.png" />
            </div>
          </a>

          <a className="window" href="PP.html">
            <img alt="" className="work" src="/img/PP0.png" />
            <div className="subtitle bk">
              <p>
                <strong>ergonomic</strong> peelers
              </p>
            </div>
          </a>

          <a className="window" href="F.html">
            <img alt="" className="work" src="/img/F0.png" />
            <div className="subtitle bk">
              <p>furniture</p>
            </div>
          </a>

          <a className="window" href="MG.html">
            <img alt="" className="work" src="/img/MG0.png" />
            <div className="subtitle bk">
              <p>new orleans</p>
            </div>
          </a>
        </div>
      </div>
    </HomeWrapper>
  );
}
