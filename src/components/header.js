import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import headerStyles from "../styles/header.module.scss"

const Header = () => {
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
  // const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <header className={headerStyles.siteHead}>
      <div className={headerStyles.siteHeadContainer}>
        {/* <a
          className="nav-burger"
          href={`#`}
          onClick={() => setToggleNav(!toggleNav)}
        >
          <div
            className="hamburger hamburger--collapse"
            aria-label="Menu"
            role="button"
            aria-controls="navigation"
          >
            <div className="hamburger-box">
              <div className="hamburger-inner" />
            </div>
          </div>
        </a> */}
        <nav className={headerStyles.navList} role="menu">
          <li className={headerStyles.siteHeadLeft} role="menuitem">
            <Link to="/projects">Projects</Link>
          </li>
          <li className={headerStyles.siteHeadLeft} role="menuitem">
            <Link to="/illustration">Illustration</Link>
          </li>
          <li className={headerStyles.siteHeadLeft} role="menuitem">
            <Link to="/ceramics">Ceramics</Link>
          </li>
        </nav>
        <div className={headerStyles.siteHeadCenter}>
          <Link className={headerStyles.siteHeadLogo} to="/">
            {data.site.siteMetadata.author}
          </Link>
        </div>
        <div className={headerStyles.siteHeadRight}>
          <nav className={headerStyles.navList}>
            <a
              href="/resume.pdf"
              title="Resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <a
              href="https://www.linkedin.com/in/darshinvanparijs"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/DDVVPP/darshin-creates"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
