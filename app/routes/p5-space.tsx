import { Link } from "react-router";
import { css } from "../../styled-system/css";
import githubIcon from "../assets/icons/github.png";
import Nav from "../components/Nav";
import { toHomeWithOpeningSequenceComplete } from "../routes";

export function meta() {
  return [{ title: "p5 Space" }, { name: "description", content: "p5 Space" }];
}

const iframe = css({
  width: "100%",
  height: "100%",
});

const githubTab = css({
  position: "absolute",
  bottom: "25px",
  right: "25px",
  height: "60px",
  width: "60px",
  display: "flex",
  borderRadius: "50%",
  backdropFilter: "invert(20%)",
  transition: "all 0.5s ease-in-out",

  _hover: {
    backdropFilter: "invert(80%)",
    height: "80px",
    width: "80px",
  },
});

const githubImg = css({
  height: "40px",
  width: "40px",
  margin: "auto",
  opacity: "0.7",
});

export default function p5Space() {
  return (
    <>
      <Nav backButtonTo={toHomeWithOpeningSequenceComplete} />

      <iframe className={iframe} src="https://p5-space.chas.ms" />

      <Link
        className={githubTab}
        to="https://github.com/chasms/p5-space"
        target="_blank"
      >
        <img className={githubImg} src={githubIcon} />
      </Link>
    </>
  );
}
