import { css } from "../../styled-system/css";
import Nav from "../components/Nav";
import { toHomeWithOpeningSequenceComplete } from "../routes";

export function meta() {
  return [
    { title: "Nota" },
    {
      name: "description",
      content: "M&T Nota App for IOLTA Legal Account Management",
    },
  ];
}

const iframe = css({
  width: "100%",
  height: "100%",
  padding: "50px",
  paddingTop: "100px",
});

export default function Nota() {
  return (
    <>
      <Nav backButtonTo={toHomeWithOpeningSequenceComplete} />

      <iframe
        className={iframe}
        src="https://hsmandt.s3.amazonaws.com/mandt/courses/nota-iolta-management/introduction-to-nota/video_introduction-to-nota.mp4"
        title="Nota"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </>
  );
}
