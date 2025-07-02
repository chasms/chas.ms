import { css } from "../../styled-system/css";
import KundaliniWhiteLogo from "../assets/images/kundalini-white.png";
import ReflectionsRed from "../assets/images/ReflectionsRed.png";
import Gallery from "../components/Gallery";
import Nav from "../components/Nav";
import type { Route } from "./+types/home";

const logoOverlay = css({
  height: "100%",
  width: "100%",
  textAlign: "center",
  position: "absolute",
  zIndex: 999,
  paddingTop: "150px",
  top: "0%",
  transition: "top 1.5s ease-in-out",
  display: "none",
});

const logoWrapper = css({
  opacity: "0.3",
  transition: "opacity 1.5s ease-in-out",

  _hover: {
    opacity: "0.8",
  },
});

const contentArea = css({
  position: "absolute",
  height: "100%",
  width: "100%",
  overflow: "scroll",
});

const background = css({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: "-100",
});

export function meta({}: Route.MetaArgs) {
  return [
    { title: "chasms" },
    { name: "description", content: "Charles Albert Samuels" },
  ];
}

export default function Home() {
  return (
    <>
      <div className={logoOverlay}>
        <div className={logoWrapper}>
          <img src={KundaliniWhiteLogo} alt="chasms"></img>
        </div>
      </div>

      <Nav />

      <div className={contentArea}>
        <div
          className={background}
          style={{
            background: `url("${ReflectionsRed}") no-repeat bottom center`,
            backgroundSize: "cover",
            opacity: "0.4",
          }}
        ></div>

        <Gallery />
      </div>
    </>
  );
}
