import { css, cx } from "../../styled-system/css";

const titleWrapper = css({
  textDecoration: "none",
  fontSize: "11px",
  fontWeight: "700",
  marginLeft: "100px",
  transition: "all 1s ease-in-out",
  color: "red",

  _hover: {
    color: "azure",
  },
});

const showWhenHovered = css({
  fontSize: "0%",
  display: "inline-block",
  transition: "font-size 0.75s linear",
  width: "0px",

  _groupHover: {
    width: "auto",
    fontSize: "100%",
  },
});

export default function Title() {
  return (
    <div className={cx("group", titleWrapper)}>
      <p>
        CH<p className={showWhenHovered}>ARLES </p>A
        <p className={showWhenHovered}>LBERT </p>S
        <p className={showWhenHovered}>A</p>M
        <p className={showWhenHovered}>UEL</p>S
      </p>
    </div>
  );
}
