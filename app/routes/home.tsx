import { useSearchParams } from "react-router";
import { css, cx } from "../../styled-system/css";
import HomeProjectsGallery from "../components/HomeProjectsGallery";
import LogoOverlay from "../components/LogoOverlay";
import Nav from "../components/Nav";
import { params } from "../routes";

const contentArea = css({
  position: "absolute",
  height: "100%",
  width: "100%",
  overflow: "scroll",
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

  return (
    <>
      <LogoOverlay />

      <div
        className={
          openingSequenceComplete ? revealWrapper : cx(revealWrapper, hidden)
        }
      >
        <Nav />

        <div className={contentArea}>
          <HomeProjectsGallery />
        </div>
      </div>
    </>
  );
}
