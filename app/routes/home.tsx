import { useSearchParams } from "react-router";
import { css, cx } from "../../styled-system/css";
import ReflectionsRed from "../assets/images/ReflectionsRed.png";
import Gallery from "../components/Gallery";
import LogoOverlay from "../components/LogoOverlay";
import Nav from "../components/Nav";
import { params } from "../routes";

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

const revealWrapper = css({
  opacity: 1,
  transition: "opacity 2s ease-in-out",
});

const hidden = css({
  opacity: "0 !important",
});

export function meta() {
  return [
    { title: "chasms" },
    { name: "description", content: "Charles Albert Samuels" },
  ];
}

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();

  const openingSequenceParam = searchParams.get(params.openingSequence);
  const openingSequenceComplete = openingSequenceParam === params.done;

  console.log("openingSequenceComplete", openingSequenceComplete, "\n");
  return (
    <>
      <LogoOverlay />

      <div
        className={background}
        style={{
          background: `url("${ReflectionsRed}") no-repeat bottom center`,
          backgroundSize: "cover",
          opacity: "0.4",
        }}
      ></div>

      <div
        className={
          openingSequenceComplete ? revealWrapper : cx(revealWrapper, hidden)
        }
      >
        <Nav />

        <div className={contentArea}>
          <Gallery />
        </div>
      </div>
    </>
  );
}
