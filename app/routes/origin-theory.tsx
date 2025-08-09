import { css } from "../../styled-system/css";
import ExpandingInfoButton from "../components/ExpandingInfoButton";
import Nav from "../components/Nav";
import OriginTheoryContent from "../content/OriginTheoryContent";
import { toHomeWithOpeningSequenceComplete } from "../routes";

const pageWrapper = css({
  width: "100%",
  margin: "0 auto",
  padding: "50px 40px",
  display: "flex",
  flexDirection: "row",
  height: "100vh",
  overflow: "hidden",
});

const contentSectionWrapper = css({
  display: "none",
  xl: {
    width: "20%",
  },
  lg: {
    width: "30%",
  },
  md: {
    width: "40%",
    display: "flex",
  },
  height: "100%",
  color: "azure",
  overflow: "scroll",
});

const pdfWrapper = css({
  height: "80%",
  display: "flex",
  width: "100%",
  xl: {
    width: "80%",
  },
  lg: {
    width: "70%",
  },
  md: {
    width: "60%",
    height: "100%",
  },
});

const pdfViewer = css({
  height: "80%",
  md: {
    height: "100%",
  },
  width: "100%",
  borderRadius: "16px",
  margin: "0 25px",
  border: "none",
});

export default function OriginTheoryPage() {
  const title = "Origin Theory";
  const description =
    "A comprehensive exploration of fundamental concepts and theoretical frameworks";
  const content = <OriginTheoryContent />;

  return (
    <>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />

      <Nav backButtonTo={toHomeWithOpeningSequenceComplete} />

      <div className={pageWrapper}>
        {content && <div className={contentSectionWrapper}>{content}</div>}

        <div className={pdfWrapper}>
          <iframe
            className={pdfViewer}
            src="/OriginTheory.pdf"
            title={title}
          ></iframe>
        </div>
      </div>

      {content && (
        <ExpandingInfoButton fullScreen={false} mobileOnly={true}>
          {content}
        </ExpandingInfoButton>
      )}
    </>
  );
}
