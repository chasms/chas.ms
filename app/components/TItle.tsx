import { css, cx } from "../../styled-system/css";

const titleWrapper = css({
  textDecoration: "none",
  marginLeft: "100px",
  height: "100%",
  display: "flex",
  textAlign: "center",
  justifyContent: "center",
  transition: "all 1s ease-in-out",
});

const titleText = css({
  fontFamily: "San Francisco, sans-serif",
  fontStyle: "italic",
  fontSize: "11px",
  fontWeight: 700,
  color: "red",
  userSelect: "none",
  margin: "auto",

  _hover: {
    color: "azure",
  },
});

const showWhenHovered = css({
  fontSize: "0%",
  width: "0px",
  display: "inline-flex",
  transition: "font-size 0.5s linear, width 0.5s ease-in-out",

  _groupHover: {
    width: "auto",
    fontSize: "100%",
  },
});

export default function Title() {
  return (
    <div className={titleWrapper}>
      <h1 className={cx("group", titleText)}>
        CH<p className={showWhenHovered}>ARLES </p>A
        <p className={showWhenHovered}>LBERT </p>S
        <p className={showWhenHovered}>A</p>M
        <p className={showWhenHovered}>UEL</p>S
      </h1>
    </div>
  );
}
