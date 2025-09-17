import { Link } from "react-router";
import { css, cx } from "../../styled-system/css";
import emailIcon from "../assets/icons/email.png";
import githubIcon from "../assets/icons/github.png";
import linkedInIcon from "../assets/icons/linkedin.png";
import mediumIcon from "../assets/icons/medium-icon-md.png";
import avatar from "../assets/kundalini-avatar.webp";
import Title from "./Headline";

const linkStyles = {
  color: "azure",
  transition: "color 0.25s ease-in-out",
  _hover: {
    color: "red",
  },
};

const listItemStyles = {
  listStyleType: "none",
  display: "inline-flex",
  padding: "12px 0px 20px 0px",
};

const navWrapperStyles = css({
  position: "fixed",
  width: "100%",
  height: "50px",
  letterSpacing: "1.2px",
  zIndex: "900",
  background: "rgba(0, 0, 0, 0.6)",
  backdropFilter: "blur(4px)",
  display: "flex",
  borderBottom: "0.5px solid rgba(255, 255, 255, 0.1)",
});

const iconsList = css({
  position: "absolute",
  right: "50px",
  display: "flex",
  justifyContent: "space-between",
});

const icon = css({
  ...listItemStyles,
  opacity: "0.2",
  transition: "opacity 0.5s ease-in-out",
  height: "24px",

  _hover: {
    opacity: "0.8",
  },
});

const iconLink = css({
  ...linkStyles,
  textDecoration: "none",
  transition: "color 0.5s ease-in-out",
  width: "24px",
  height: "24px",
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
  margin: "0 6px 6px 0",
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
  top: "20px",
  left: "75px",
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
  width: "10px",
  height: "10px",
  transform: "rotate(135deg)",
  transition: "border-color .3s ease-in-out",

  _groupHover: {
    borderColor: "azure",
  },
});

const avatarStyles = css({
  borderRadius: 999,
  height: "30px",
  width: "30px",
  marginTop: "10px",
  marginLeft: "10px",
});

interface NavProps {
  backButtonTo?: string;
}

export default function Nav({ backButtonTo }: NavProps) {
  return (
    <nav className={navWrapperStyles}>
      <Link to="/">
        <img
          className={avatarStyles}
          src={avatar}
          alt="chas.ms"
          loading="lazy"
        />
      </Link>

      {backButtonTo && (
        <Link className={cx("group", backButton)} to={backButtonTo}>
          <div className={backButtonIcon} />
        </Link>
      )}

      <Title />

      <ul className={iconsList}>
        <li className={icon}>
          <Link
            className={iconLink}
            to="https://www.medium.com/@chasms"
            target="_blank"
            rel="noreferrer"
            style={{ backgroundImage: `url("${mediumIcon}")` }}
          >
            Medium
          </Link>
        </li>
        <li className={icon}>
          <Link
            className={iconLink}
            to="https://github.com/chasms"
            target="_blank"
            rel="noreferrer"
            style={{ backgroundImage: `url("${githubIcon}")` }}
          >
            Github
          </Link>
        </li>
        <li className={icon}>
          <Link
            className={iconLink}
            to="mailto:chasms@chas.ms"
            target="_blank"
            rel="noreferrer"
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
