import { useSearchParams } from "react-router";
import { css } from "../../styled-system/css";
import KundaliniWhiteLogo from "../assets/images/kundalini-white.png";
import { params } from "../routes";

const logoOverlay = css({
  height: "100%",
  width: "100%",
  textAlign: "center",
  position: "absolute",
  zIndex: 999,
  paddingTop: "150px",
  top: "0%",
  transition: "top 1.5s ease-in-out",
});

const logoWrapper = css({
  opacity: "0.3",
  transition: "opacity 1.5s ease-in-out",

  _hover: {
    opacity: "0.8",
  },
});

export default function LogoOverlay() {
  const [searchParams, setSearchParams] = useSearchParams();

  const openingSequenceParam = searchParams.get(params.openingSequence);
  const openingSequenceComplete = openingSequenceParam === params.done;

  return (
    <div className={logoOverlay}>
      <div className={logoWrapper}>
        <img src={KundaliniWhiteLogo} alt="chasms"></img>
      </div>
    </div>
  );
}
