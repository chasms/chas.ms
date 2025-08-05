import {
  contentBody,
  contentHeading,
  contentLink,
  contentWrapper,
} from "./content.css";

const GiantMachinesContent = () => (
  <div className={contentWrapper}>
    <h1 className={contentHeading}>Giant Machines</h1>
    <p className={contentBody}>
      Giant Machines was a small boutique engineering consulting group that grew
      from under 14 when I joined to 2017 to over 100 strong, winning #1 best
      place to work, small company nyc multiple years in a row and becoming a
      desirable acquisition target for multiple buyers, ultimately exiting to
      Deloitte via acquisition in 2024.
    </p>
    <p className={contentBody}>
      {"Page retrieved from the "}
      <a
        href="https://web.archive.org/web/20221129225342/https://www.giantmachines.com/"
        target="_blank"
        rel="noreferrer"
        className={contentLink}
      >
        Wayback Machine
      </a>
    </p>
  </div>
);

export default GiantMachinesContent;
