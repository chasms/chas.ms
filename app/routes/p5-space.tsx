import { useState } from "react";
import { Link } from "react-router";
import { css, cva, cx } from "../../styled-system/css";
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

const transitionsWhenOpening =
  "height 0.5s ease-in-out, width 0.5s ease-in-out, border-radius 0.1s ease-in-out, backdrop-filter 0.1s ease-in-out";
const transitionWhenClosing = `${buttonHoverTransitions}, border-radius 0.1s ease-in-out 0.5s`;
const sharedWidthValue = "calc(100% - 200px)";
const info = cva({
  base: {
    position: "absolute",
    bottom: "25px",
    left: "25px",
    ...floatingButtonStyles,
  },
  variants: {
    state: {
      open: {
        height: "25%",
        width: sharedWidthValue,
        borderRadius: "16px",
        backdropFilter: "invert(80%)",
        cursor: "default",
        transition: transitionsWhenOpening,

        _hover: {
          height: "25%",
          width: sharedWidthValue,
          transition: transitionsWhenOpening,
          transform: "scale(1)",
        },
      },
      closed: {
        transition: transitionWhenClosing,

        _hover: {
          transition: transitionWhenClosing,
        },
      },
    },
  },
});

const infoIcon = cva({
  base: {
    fontFamily: "serif",
    fontWeight: "900",
    fontSize: "36px",
    color: "black",
    position: "absolute",
    transition:
      "opacity 0.1s ease-in-out, bottom 0.5s ease-in-out, left 0.5s ease-in-out",
    bottom: "4px",
    left: "24px",

    _groupHover: {
      bottom: "12px",
      left: "34px",
    },
  },
  variants: {
    state: {
      shown: {
        opacity: "0.7",
      },
      hidden: {
        opacity: "0",
      },
    },
  },
});

const infoContent = cva({
  base: {
    fontFamily: "San Francisco, sans-serif",
    padding: "25px",
    display: "flex",
    flexDirection: "column",
    userSelect: "none",
    margin: "auto",
    position: "relative",
    height: "100%",
    width: "100%",
  },
  variants: {
    state: {
      shown: {
        overflow: "scroll",
        left: 0,
        color: "rgba(0, 0, 0, 0.8)",
        transition: "left 0s ease-in-out 0.2s, color 0.5s ease-in-out 0.5s",
      },
      hidden: {
        left: "-110%",
        color: "rgba(0, 0, 0, 0)",
        transition: "left 0s ease-in-out 0.5s, color 0.5s ease-in-out",
      },
    },
  },
});

const infoCloseButton = css({
  position: "absolute",
  top: "25px",
  right: "25px",
  height: "30px",
  width: "30px",
  backgroundColor: "green",
  cursor: "pointer",
});

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
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <>
      <Nav backButtonTo={toHomeWithOpeningSequenceComplete} />

      <iframe className={iframe} src="https://p5-space.chas.ms" />

      <div
        className={cx("group", info({ state: isInfoOpen ? "open" : "closed" }))}
        onClick={() => setIsInfoOpen(true)}
      >
        <div className={infoIcon({ state: isInfoOpen ? "hidden" : "shown" })}>
          <p>i</p>
        </div>

        <div
          className={infoContent({ state: isInfoOpen ? "shown" : "hidden" })}
        >
          <div
            className={infoCloseButton}
            onClick={(e) => {
              e.stopPropagation();
              setIsInfoOpen(false);
            }}
          >
            x
          </div>
          <p>stuff</p>
        </div>
      </div>

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
