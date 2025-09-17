import { useState } from "react";
import { css, cva, cx } from "../../styled-system/css";

const transitionsWhenOpening =
  "background-color 0.5s ease-in-out, bottom 0.5s ease-in-out, left 0.5s ease-in-out, height 0.5s ease-in-out, width 0.5s ease-in-out, border-radius 0.5s ease-in-out, backdrop-filter 0.1s ease-in-out";
const transitionWhenClosing =
  "background-color 0.5s ease-in-out, bottom 0.5s ease-in-out, left 0.5s ease-in-out, height 0.5s ease-in-out, width 0.5s ease-in-out, border-radius 0.5s ease-in-out, backdrop-filter 0.5s ease-in-out";
const smallWidthValue = "calc(100% - 150px)";
const smallHeightValue = "25%";

const info = cva({
  base: {
    position: "absolute",
    bottom: "25px",
    left: "25px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  variants: {
    state: {
      open: {
        borderRadius: "16px",
        backdropFilter: "invert(80%)",
        cursor: "default",
        transition: transitionsWhenOpening,

        _hover: {
          transform: "scale(1)",
        },
      },
      closed: {
        height: "60px",
        width: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "30px",
        backdropFilter: "invert(30%)",
        cursor: "pointer",
        transition: transitionWhenClosing,

        _hover: {
          backdropFilter: "invert(80%)",
          height: "80px",
          width: "80px",
          borderRadius: "40px",
        },
      },
    },
    mobileOnly: {
      true: {
        lg: {
          display: "none",
        },
      },
      false: {},
    },
    size: {
      small: {},
      full: {},
    },
  },
  compoundVariants: [
    {
      state: "open",
      size: "small",
      css: {
        height: smallHeightValue,
        width: smallWidthValue,
      },
    },
    {
      state: "open",
      size: "full",
      css: {
        height: "calc(100% - 0px)",
        width: "calc(100% - 0px)",
        bottom: "0",
        left: "0",
        backdropFilter: "invert(80%) blur(10px)",
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        zIndex: 999,
      },
    },
  ],
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

const infoCloseButtonGroupClassName = "infoCloseButton";
const infoCloseButton = css({
  position: "absolute",
  top: "25px",
  right: "25px",
  height: "32px",
  width: "32px",
  cursor: "pointer",
});

const infoCloseIcon = css({
  _before: {
    position: "absolute",
    top: "8px",
    right: "0",
    content: '""',
    borderRight: "4px solid black",
    borderBottom: "4px solid black",
    width: "16px",
    height: "16px",
    transform: "rotate(135deg)",
    transition: "border-color .3s ease-in-out",

    [`.${infoCloseButtonGroupClassName}:is(:hover, [data-hover]) &`]: {
      borderColor: "red",
    },
  },
  _after: {
    position: "absolute",
    top: "8px",
    left: "0",
    content: '""',
    borderRight: "4px solid black",
    borderBottom: "4px solid black",
    width: "16px",
    height: "16px",
    transform: "rotate(315deg)",
    transition: "border-color .3s ease-in-out",

    ".infoCloseButton:is(:hover, [data-hover]) &": {
      borderColor: "red",
    },
  },
});

const infoContentScrollWrapper = css({
  overflowY: "auto",
  height: "100%",
  width: "100%",
});

interface ExpandingInfoButtonProps {
  children: React.ReactNode;
  fullScreen?: boolean;
  mobileOnly?: boolean;
}

const ExpandingInfoButton = ({
  children,
  fullScreen,
  mobileOnly,
}: ExpandingInfoButtonProps) => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <div
      className={cx(
        "group",
        info({
          state: isInfoOpen ? "open" : "closed",
          size: fullScreen ? "full" : "small",
          mobileOnly: mobileOnly ? true : false,
        }),
      )}
      onClick={() => setIsInfoOpen(true)}
    >
      <div className={infoIcon({ state: isInfoOpen ? "hidden" : "shown" })}>
        <p>i</p>
      </div>

      <div className={infoContent({ state: isInfoOpen ? "shown" : "hidden" })}>
        <div
          className={cx("infoCloseButton", infoCloseButton)}
          onClick={(e) => {
            e.stopPropagation();
            setIsInfoOpen(false);
          }}
        >
          <div className={infoCloseIcon}></div>
        </div>

        <div className={infoContentScrollWrapper}>{children}</div>
      </div>
    </div>
  );
};

export default ExpandingInfoButton;
