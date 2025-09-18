import {
  contentBodyXS,
  contentHeading,
  contentLink,
  contentSubHeading,
  contentWrapper,
} from "./content.css";

const GrowGradeContent = () => (
  <div className={contentWrapper}>
    <h1 className={contentHeading}>GrowGrade</h1>
    <p className={contentSubHeading}>
      GrowGrade is a startup accelerated by M&T as an independent vertical,
      launched in 2022.
    </p>
    <p className={contentBodyXS}>
      I led a small team of designers and engineers to build GrowGrade in
      stealth until launch. The product was built and delivered as a webapp
      using React & Typescript for the frontend, and Java for the service layer.
    </p>
    <p className={contentBodyXS}>
      We integrated with multiple accounting softwares (Quickbooks, Xero, and
      Freshbooks) in order to enable users to quickly onboard their business
      info and get a business valuation and business insights provided by our
      proprietary algorithms.
    </p>
    <p className={contentBodyXS}>
      GrowGrade created a completely new funnel for M&T to provide value to
      small and medium-size business customers for free and then offer
      additional traditional banking products.
    </p>
    <p className={contentBodyXS}>GrowGrade closed its doors in 2024.</p>
    <p className={contentBodyXS}>
      <a
        href="https://www.linkedin.com/posts/m%26t-bank_valuations-growgrade-business-activity-6981266373276536832-0W8N/"
        target="_blank"
        rel="noreferrer"
        className={contentLink}
      >
        M&T announcement
      </a>
    </p>
    <p className={contentBodyXS}>
      <a
        href="https://www.bizjournals.com/buffalo/news/2022/03/24/m-t-bank-debuts-its-new-fintech-startup-growgrade.html"
        target="_blank"
        rel="noreferrer"
        className={contentLink}
      >
        Launch Press Release
      </a>
    </p>
    <p className={contentBodyXS}>
      {"Page retrieved from the "}
      <a
        href="https://web.archive.org/web/20220324233736/https://growgrade.com/"
        target="_blank"
        rel="noreferrer"
        className={contentLink}
      >
        Wayback Machine
      </a>
    </p>
  </div>
);

export default GrowGradeContent;
