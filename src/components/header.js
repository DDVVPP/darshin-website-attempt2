import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
          {data.site.siteMetadata.author}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/illustration"
            >
              Illustration
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/ceramics"
            >
              Ceramics
            </Link>
          </li>
        </ul>
      </nav>
      <div className="social-links">
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
    </header>
  )
}

export default Header
