import { contentBody, contentHeading, contentWrapper } from "./content.css";

export default function MardiGrasContent() {
  return (
    <div className={contentWrapper}>
      <h1 className={contentHeading}>Mardi Gras, New Orleans</h1>

      <p className={contentBody}>
        A collection of photos from Mardi Gras in New Orleans.
      </p>
    </div>
  );
}
