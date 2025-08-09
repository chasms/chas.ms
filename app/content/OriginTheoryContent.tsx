import { contentBody, contentHeading, contentWrapper } from "./content.css";

export default function OriginTheoryContent() {
  return (
    <div className={contentWrapper}>
      <h1 className={contentHeading}>Origin Theory</h1>
      <p className={contentBody}>A treatise on industrial design theory.</p>
      <p className={contentBody}>Self published in 2014.</p>
    </div>
  );
}
