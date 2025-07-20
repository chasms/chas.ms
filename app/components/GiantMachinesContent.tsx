import { css } from "../../styled-system/css";

const wrapper = css({
  fontFamily: "San Francisco, sans-serif",
});

const heading = css({
  fontSize: "24px",
  marginBottom: "16px",
});

const body = css({
  fontStyle: "italic",
  marginBottom: "16px",
});

const link = css({
  fontStyle: "italic",
  marginBottom: "16px",
  color: "red",
  transition: "all 0.25s ease-in-out",
  _hover: {
    textShadow: "1px 1px 1px azure",
  },
});

const GiantMachinesContent = () => (
  <div className={wrapper}>
    <h1 className={heading}>Giant Machines</h1>
    <p className={body}>
      Giant Machines was a small boutique engineering consulting group that grew
      from under 14 when I joined to 2017 to over 100 strong, winning #1 best
      place to work, small company nyc multiple years in a row and becoming a
      desirable acquisition target for multiple buyers, ultimately exiting to
      Deloitte via acquisition in 2024.
    </p>
    <p className={body}>
      {"Page retrieved from the "}
      <a
        href="https://web.archive.org/web/20221129225342/https://www.giantmachines.com/"
        target="_blank"
        rel="noreferrer"
        className={link}
      >
        Wayback Machine
      </a>
    </p>
  </div>
);

export default GiantMachinesContent;
