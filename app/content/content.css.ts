import { css } from "../../styled-system/css";

export const contentWrapper = css({
  fontFamily: "San Francisco, sans-serif",
  padding: "25px 50px 25px 25px",
  maxHeight: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  userSelect: "none",
  margin: "auto",
});

export const contentHeading = css({
  fontSize: "24px",
  marginBottom: "16px",
});

export const contentBody = css({
  fontStyle: "italic",
  fontSize: "16px",
  marginBottom: "16px",
});
export const contentBodySmall = css({
  fontStyle: "italic",
  fontSize: "14px",
  marginBottom: "14px",
});

export const contentLink = css({
  fontStyle: "italic",
  marginBottom: "16px",
  color: "red",
  transition: "all 0.25s ease-in-out",
  _hover: {
    color: "azure",
  },
});
