import {
  contentBody,
  contentBodySmall,
  contentBodyXS,
  contentHeading,
  contentLink,
  contentWrapper,
} from "./content.css";

const GiantMachinesContent = () => (
  <div className={contentWrapper}>
    <h1 className={contentHeading}>Giant Machines</h1>
    <p className={contentBody}>
      Giant Machines was a small boutique engineering consulting group that grew
      from under 14 when I joined in 2017 to over 100 when we were acquired by
      Deloitte in January 2024.
    </p>
    <p className={contentBodySmall}>
      Throughout my tenure there we won #1 best place to work, small company nyc
      multiple years in a row, and I was involved heavily in scaling the team
      via recruiting, culture growth, and client engagement leadership &
      processes.
    </p>
    <p className={contentBodyXS}>
      Clients I served included: One World, Trumid, Allergan, BGC Group, Ontario
      Teachers&#39; Pension Plan, Amica Senior Living, Convene, Openfin, M&T
      Bank, IEX Cloud, National Grid, BCG Digital Ventures,
    </p>
    <p className={contentBodyXS}>
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
