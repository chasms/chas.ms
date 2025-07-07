import { css } from "../../styled-system/css";
import Nav from "../components/Nav";
import { toHomeWithOpeningSequenceComplete } from "../routes";

export function meta() {
  return [
    { title: "FinJS" },
    { name: "description", content: "FinJS Talk, 2019" },
  ];
}

const wrapper = css({
  width: "100%",
  height: "80%",
});

const iframe = css({
  width: "100%",
  height: "100%",
  paddingTop: "50px",
});

export default function finJS() {
  return (
    <>
      <Nav backButtonTo={toHomeWithOpeningSequenceComplete} />

      <iframe
        className={iframe}
        src="https://www.youtube.com/embed/P1-SmUtwrlY?si=AGc_dNzOopw7a2cS&amp;controls=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </>
  );
}
