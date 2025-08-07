import { contentBody, contentHeading, contentWrapper } from "./content.css";

export default function SkylandContent() {
  return (
    <div className={contentWrapper}>
      <h1 className={contentHeading}>Skyland</h1>
      <p className={contentBody}>A collection of photos from Skyland.</p>
      <p className={contentBody}>Zine created and published in 2015.</p>
    </div>
  );
}
