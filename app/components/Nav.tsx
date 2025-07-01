export default function Nav() {
  return (
    <nav className="reveal">
      <ul id="chasms_head">
        <li id="chasm">
          <p>
            CH<strong>ARLES </strong>A<strong>LBERT </strong>S<strong>A</strong>
            M<strong>UEL</strong>S
          </p>
        </li>
      </ul>

      <ul className="navigation">
        <li>
          <a
            className="nav-link"
            href="https://www.medium.com/@chasms"
            target="_blank"
            rel="noreferrer"
          >
            BLOG
          </a>
        </li>
        <li>
          <a
            className="nav-link"
            href="https://www.github.com/chasms"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB
          </a>
        </li>
        <li>
          <a className="nav-link" href="info.html">
            ABOUT
          </a>
        </li>
      </ul>

      <ul className="icons">
        <li className="icon">
          <a
            href="mailto:chasms@chas.ms"
            className="sb small no-shadow border circle email"
          >
            Email
          </a>
        </li>
        <li className="icon">
          <a
            href="https://linkedin.com/in/chasms"
            target="_blank"
            className="sb small no-shadow border circle linkedin"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </nav>
  );
}
