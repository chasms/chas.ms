import { Link } from "react-router";
import { css } from "../../styled-system/css";
import githubIcon from "../assets/icons/github.png";
import ExpandingInfoButton from "../components/ExpandingInfoButton";
import Nav from "../components/Nav";
import P5SpaceContent from "../content/P5SpaceContent";
import { toHomeWithOpeningSequenceComplete } from "../routes";

export function meta() {
  return [{ title: "p5 Space" }, { name: "description", content: "p5 Space" }];
}

const iframe = css({
  width: "100%",
  height: "100%",
});

const buttonHoverTransitions =
  "backdrop-filter 0.5s ease-in-out, height 0.5s ease-in-out, width 0.5s ease-in-out";
const floatingButtonStyles = {
  height: "60px",
  width: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  backdropFilter: "invert(30%)",
  cursor: "pointer",
  transition: buttonHoverTransitions,

  _hover: {
    backdropFilter: "invert(80%)",
    height: "80px",
    width: "80px",
  },
};

const githubButton = css({
  position: "absolute",
  bottom: "25px",
  right: "25px",
  ...floatingButtonStyles,
});

const githubImg = css({
  height: "40px",
  width: "40px",
  margin: "auto",
  opacity: "0.7",
});

export default function P5Space() {
  return (
    <>
      <Nav backButtonTo={toHomeWithOpeningSequenceComplete} />

      <iframe className={iframe} src="https://p5-space.chas.ms" />

      <ExpandingInfoButton>
        <P5SpaceContent />
      </ExpandingInfoButton>

      <Link
        className={githubButton}
        to="https://github.com/chasms/p5-space"
        target="_blank"
      >
        <img className={githubImg} src={githubIcon} />
      </Link>
    </>
  );
}
