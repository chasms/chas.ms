import { contentBodyXS, contentHeading, contentWrapper } from "./content.css";

const ConveneContent = () => (
  <div className={contentWrapper}>
    <h1 className={contentHeading}>
      Convene Booking Interface and Payments Service, 2019
    </h1>
    <p className={contentBodyXS}>
      I led a small hybrid team of Giant Machines and Convene engineers to
      quickly build Convene&#39;s new events booking experience using NodeJS,
      React and Typescript. Integrated scheduling and inventory services, as
      well as account services. Built and delivered within only about a month.
    </p>
    <p className={contentBodyXS}>
      Separately, I worked alone to build the NodeJS payment service with
      integrations into Stripe and Salesforce. Built and delivered to production
      solo in a month.
    </p>
    <p className={contentBodyXS}>
      This work rapidly unlocked a new revenue stream for convene by opening
      their event and meeting spaces to ad-hoc booking, as well as creating a
      new funnel to drive memberships.
    </p>
    <p className={contentBodyXS}>
      (Event and meeting space booking requires site membership)
    </p>
  </div>
);

export default ConveneContent;
