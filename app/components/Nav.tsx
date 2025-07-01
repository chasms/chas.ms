import { Link } from "react-router";
import { styled } from "../../styled-system/jsx";

const NavWrapper = styled.nav`
  position: fixed;
  width: 100%;
  height: 50px;
  letter-spacing: 1.2px;
  z-index: 900;
  background: rgba(0, 0, 0, 0.7);
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  display: inline;
`;

const NavListItem = styled.li`
  list-style-type: none;
  display: inline-block;
  padding: 15px 0px 20px 0px;
`;

const NavLink = styled(Link)`
  padding-right: 30px !important;
  padding-left: 30px !important;
`;

const IconsList = styled.ul`
  position: absolute;
  right: 50px;
`;

const Icon = styled.li`
  opacity: 0.2;
  transition: opacity 0.5s ease-in-out;
`;

const IconLink = styled(Link)`
  text-decoration: none;
  color: azure;
  transition: color 0.5s ease-in-out;

  &:hover {
    color: red;
  }
`;

export default function Nav() {
  return (
    <NavWrapper>
      <ul id="chasms_head">
        <li id="chasm">
          <p>
            CH<strong>ARLES </strong>A<strong>LBERT </strong>S<strong>A</strong>
            M<strong>UEL</strong>S
          </p>
        </li>
      </ul>

      <NavList>
        <NavListItem>
          <NavLink
            to="https://www.medium.com/@chasms"
            target="_blank"
            rel="noreferrer"
          >
            BLOG
          </NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink
            to="https://www.github.com/chasms"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB
          </NavLink>
        </NavListItem>
        <NavListItem>
          <a className="nav-link" href="info.html">
            ABOUT
          </a>
        </NavListItem>
      </NavList>

      <IconsList>
        <Icon>
          <a
            href="mailto:chasms@chas.ms"
            className="sb small no-shadow border circle email"
          >
            Email
          </a>
        </Icon>
        <Icon>
          <a
            href="https://linkedin.com/in/chasms"
            target="_blank"
            className="sb small no-shadow border circle linkedin"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </Icon>
      </IconsList>
    </NavWrapper>
  );
}
