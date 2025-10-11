import { Link, useSearchParams } from "react-router";
import { css, cx } from "../../styled-system/css";
import KundaliniWhiteLogo from "../assets/kundalini-white.png";
import { RouteParams } from "../routes";

const logoOverlay = css({
  height: "100%",
  width: "100%",
  display: "flex",
  textAlign: "center",
  justifyContent: "center",
  position: "absolute",
  zIndex: 999,
  paddingTop: "150px",
  top: "0%",
  transition: "top 1.5s ease-in-out",
});

const logoWrapper = css({
  opacity: "0.3",
  transition: "opacity 1.5s ease-in-out",
  height: "fit-content",

  _hover: {
    opacity: "0.8",
  },
});

const aboveTheFold = css({
  top: "-120%",
});

export default function LogoOverlay() {
  const [searchParams] = useSearchParams();

  const openingSequenceParam = searchParams.get(RouteParams.openingSequence);
  const openingSequenceComplete = openingSequenceParam === RouteParams.done;

  return (
    <div
      className={
        openingSequenceComplete ? cx(aboveTheFold, logoOverlay) : logoOverlay
      }
    >
      <Link
        to={`/?${RouteParams.openingSequence}=${RouteParams.done}`}
        className={logoWrapper}
      >
        <img src={KundaliniWhiteLogo} alt="chasms"></img>
      </Link>
    </div>
  );
}
