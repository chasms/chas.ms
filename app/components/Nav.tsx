import { Link } from "react-router";
import { css } from "../../styled-system/css";
import emailIcon from "../assets/icons/email.png";
import linkedInIcon from "../assets/icons/linkedIn.png";
import Title from "./TItle";

const linkStyles = {
  color: "azure",
  _hover: {
    color: "red",
  },
};

const navWrapperStyles = css({
  position: "fixed",
  width: "100%",
  height: "50px",
  letterSpacing: "1.2px",
  zIndex: "900",
  background: "rgba(0, 0, 0, 0.7)",
  display: "flex",
});

const navList = css({ margin: 0, padding: 0, display: "inline" });

const navListItem = css({
  listStyleType: "none",
  display: "inline-block",
  padding: "15px 0px 20px 0px",
});

const navLink = css({
  ...linkStyles,
  paddingRight: "30px",
  paddingLeft: "30px",
});

const iconsList = css({ position: "absolute", right: "50px" });

const icon = css({
  opacity: "0.2",
  transition: "opacity 0.5s ease-in-out",

  _hover: {
    opacity: "0.8",
  },
});

const iconLink = css({
  ...linkStyles,
  textDecoration: "none",
  transition: "color 0.5s ease-in-out",
  width: "20px",
  height: "20px",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "contain",
  textIndent: "-900em",
  color: "#333",
  lineHeight: "100%",
  whiteSpace: "nowrap",
  display: "inline-block",
  position: "relative",
  verticalAlign: "middle",
  margin: "0 2px 5px 0",
  fontSize: "90%",
  backgroundColor: "#ececec",
  border: "solid 1px white",
  boxShadow: "none",
  borderRadius: "10em",
  padding: 0,

  _hover: {
    backgroundColor: "#f3f3f3",
  },
});

export default function Nav() {
  return (
    <nav className={navWrapperStyles}>
      <Title />

      <ul className={navList}>
        <li className={navListItem}>
          <Link
            className={navLink}
            to="https://www.medium.com/@chasms"
            target="_blank"
            rel="noreferrer"
          >
            BLOG
          </Link>
        </li>
        <li className={navListItem}>
          <Link
            className={navLink}
            to="https://www.github.com/chasms"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB
          </Link>
        </li>
        <li className={navListItem}>
          <Link className={navLink} to="info.html">
            ABOUT
          </Link>
        </li>
      </ul>

      <ul className={iconsList}>
        <li className={icon}>
          <Link
            className={iconLink}
            to="mailto:chasms@chas.ms"
            style={{ backgroundImage: `url("${emailIcon}")` }}
          >
            Email
          </Link>
        </li>
        <li className={icon}>
          <Link
            className={iconLink}
            to="https://linkedin.com/in/chasms"
            target="_blank"
            rel="noreferrer"
            style={{ backgroundImage: `url("${linkedInIcon}")` }}
          >
            LinkedIn
          </Link>
        </li>
      </ul>
    </nav>
  );
}
