import { contentBody, contentHeading, contentWrapper } from "./content.css";

export default function JavascriptTranspilersContent() {
  return (
    <div className={contentWrapper}>
      <h1 className={contentHeading}>The World of Javascript Transpilers</h1>
      <p className={contentBody}>
        A presentation on the past, present, and potential future of JavaScript
        focused on the ecosystem of JavaScript compilation and transpilation
        targets.
      </p>
      <p className={contentBody}>Presentation given in 2017</p>
    </div>
  );
}
