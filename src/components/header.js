import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {
  const [toggleNav, setToggleNav] = React.useState(false)
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <header className={headerStyles.siteHead}>
      <div className={headerStyles.siteHeadContainer}>
        <a
          className={headerStyles.navBurger}
          href={`#`}
          onClick={() => setToggleNav(!toggleNav)}
        >
          <div
            className={headerStyles.hamburger}
            aria-label="Menu"
            role="button"
            aria-controls="navigation"
          >
            <div className={headerStyles.hamburgerBox}>
              <div className={headerStyles.hamburgerInner} />
            </div>
          </div>
        </a>

        <nav className={headerStyles.siteHeadLeft}>
          <ul className={headerStyles.nav} role="menu">
            <li className={headerStyles.nav} role="menuitem">
              <Link to="/">Home</Link>
            </li>
            <li className={headerStyles.nav} role="menuitem">
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/illustration">Illustration</Link>
            </li>
            <li className={headerStyles.nav}>
              <Link to="/ceramics">Ceramics</Link>
            </li>
          </ul>
        </nav>
        <div className={headerStyles.siteHeadCenter}>
          {" "}
          <Link className={headerStyles.siteHeadLogo} to="/">
            {data.site.siteMetadata.author}
          </Link>
        </div>
        <div className={headerStyles.siteHeadRight}>
          <div className={headerStyles.socialLinks}>
            <a
              className={headerStyles.navItem}
              href="/resume.pdf"
              title="Resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <a
              className={headerStyles.navItem}
              href="https://www.linkedin.com/in/darshinvanparijs"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              className={headerStyles.navItem}
              href="https://github.com/DDVVPP/darshin-creates"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
