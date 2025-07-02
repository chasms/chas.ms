import { css } from "../../styled-system/css";
import ReflectionsRed from "../assets/images/ReflectionsRed.png";
import Gallery from "../components/Gallery";
import Nav from "../components/Nav";
import type { Route } from "./+types/home";

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
