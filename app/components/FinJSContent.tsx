import {
  contentBody,
  contentHeading,
  contentLink,
  contentWrapper,
} from "./content.css";

const FinJSContent = () => (
  <div className={contentWrapper}>
    <h1 className={contentHeading}>FinJS 2019</h1>
    <p className={contentBody}>
      Gave a talk on the interoperability unlocked in JavaScript desktop
      applications using Openfin&apos;s FDC3 specification
    </p>
    <p className={contentBody}>
      <a
        href="https://www.finjs.io/home"
        target="_blank"
        rel="noreferrer"
        className={contentLink}
      >
        FinJS
      </a>
    </p>
    <p className={contentBody}>
      <a
        href="https://fdc3.finos.org/"
        target="_blank"
        rel="noreferrer"
        className={contentLink}
      >
        FDC3 Protocol
      </a>
    </p>
    <p className={contentBody}>
      <a
        href="https://www.here.io/here-core"
        target="_blank"
        rel="noreferrer"
        className={contentLink}
      >
        Openfin (now Here Core)
      </a>
    </p>
  </div>
);

export default FinJSContent;
