import {
  contentBody,
  contentHeading,
  contentLink,
  contentWrapper,
} from "./content.css";

const NotaContent = () => (
  <div className={contentWrapper}>
    <h1 className={contentHeading}>Nota</h1>
    <p className={contentBody}>
      Nota is a product developed by M&T as an independent vertical with a small
      team and startup mentality, launched in 2020.
    </p>
    <p className={contentBody}>
      An extraordinary proportion of legal disbarments are linked to misuse or
      misappropriation of client funds –
    </p>
    <p className={contentBody}>
      Nota is a new fintech solution to help simplify IOLTA account management,
      making it seamless and efficient for attorneys to adhere to accounting
      requirements.
    </p>
    <p className={contentBody}>
      <a
        href="https://www.mtb.com/business/nota"
        target="_blank"
        rel="noreferrer"
        className={contentLink}
      >
        Nota Home
      </a>
    </p>
    <p className={contentBody}>
      <a
        href="https://newsroom.mtb.com/2020-08-25-Nota-Empowers-Attorneys-with-a-Streamlined-Trust-Account-Reconciliation-Solution"
        target="_blank"
        rel="noreferrer"
        className={contentLink}
      >
        Launch Press Release
      </a>
    </p>
    <p className={contentBody}>
      <a
        href="https://blog.postman.com/fintech-api-example/"
        target="_blank"
        rel="noreferrer"
        className={contentLink}
      >
        Postman Technical Deep Dive
      </a>
    </p>
  </div>
);

export default NotaContent;
