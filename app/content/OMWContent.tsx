import {
  contentBodySmall,
  contentHeading,
  contentSubHeading,
  contentWrapper,
} from "./content.css";

const OMWContent = () => (
  <div className={contentWrapper}>
    <h1 className={contentHeading}>On My Way</h1>
    <p className={contentSubHeading}>
      On My Way is a product developed for National Grid, launched in 2020.
    </p>
    <p className={contentSubHeading}>
      I led a small team of engineers to build a 2-part experience in fullstack
      Typescript:
    </p>
    <p className={contentBodySmall}>
      1. A React Native mobile and tablet app that enables technicians in the
      field to manage ad-hoc onsite repairs for systems on the electrical grid
    </p>
    <p className={contentBodySmall}>
      2. A React Typescript webapp that enables supervisors to orchestrate their
      field force and its pipeline of jobs
    </p>
    <p className={contentBodySmall}>
      These two experiences were orchestrated through a shared application
      service layer built in Node, Typescript, and SQL, with integrations into
      existing API-less legacy systems using custom message bus protocols
    </p>
  </div>
);

export default OMWContent;
