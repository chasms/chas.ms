import { contentBody, contentHeading, contentWrapper } from "./content.css";

export default function P5SpaceContent() {
  return (
    <div className={contentWrapper}>
      <h1 className={contentHeading}>p5 Space</h1>
      <p className={contentBody}>
        A small interactive experience built with &lt;50 lines of JavaScript in
        P5.js
      </p>
      <p className={contentBody}>
        Click and drag to move the camera, scroll to zoom in and out.
      </p>
    </div>
  );
}
