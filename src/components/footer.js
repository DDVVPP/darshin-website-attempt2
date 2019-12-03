import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "./footer.module.scss"

const Footer = () => {
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
    <footer className={footerStyles.footer}>
      &copy; {new Date().getFullYear()} {data.site.siteMetadata.author} &mdash;
      Built with{" "}
      <a href="https://gatsbyjs.org" target="_blank" rel="noopener noreferrer">
        Gatsby
      </a>
    </footer>
  )
}

export default Footer
