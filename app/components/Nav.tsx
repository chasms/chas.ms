import { Link } from "react-router";
import { css } from "../../styled-system/css";
import emailIcon from "../assets/icons/email.png";
import linkedInIcon from "../assets/icons/linkedIn.png";
import Title from "./TItle";

const linkStyles = {
  color: "azure",
  transition: "color 0.25s ease-in-out",
  _hover: {
    color: "red",
  },
};

const listItemStyles = {
  listStyleType: "none",
  display: "inline-block",
  padding: "15px 0px 20px 0px",
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

const navList = css({
  margin: 0,
  padding: 0,
  display: "inline",
  textDecoration: "none",
  backgroundColor: "transparent",
  color: "azure",
  fontFamily: "San Francisco, sans-serif",
  fontSize: "10px",
  fontWeight: 700,
  position: "absolute",
  left: "300px",
});

const navListItem = css({
  ...listItemStyles,
});

const navLink = css({
  ...linkStyles,
  paddingRight: "30px",
  paddingLeft: "30px",
});

const iconsList = css({
  position: "absolute",
  right: "50px",
  display: "flex",
  width: "50px",
  justifyContent: "space-between",
});

const icon = css({
  ...listItemStyles,
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

const backButton = css({
  display: "block",
  position: "absolute",
  top: "19px",
  left: "25px",
  fontSize: 0,
  lineHeight: 0,
  width: "20px",
  height: "20px",
  padding: 0,
  cursor: "pointer",
  color: "transparent",
  border: "none",
  outline: "none",
  background: "transparent",
});

const backButtonIcon = css({
  borderRight: "3px solid red",
  borderBottom: "3px solid red",
  width: "8px",
  height: "8px",
  transform: "rotate(135deg)",
  transition: "border-color .5s ease-in-out",

  _hover: {
    borderColor: "azure",
  },
});

interface NavProps {
  backButtonTo?: string;
}

export default function Nav({ backButtonTo }: NavProps) {
  return (
    <nav className={navWrapperStyles}>
      {backButtonTo && (
        <Link className={backButton} to={backButtonTo}>
          <div className={backButtonIcon} />
        </Link>
      )}

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
        {/* <li className={navListItem}>
          <Link className={navLink} to="info.html">
            ABOUT
          </Link>
        </li> */}
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
