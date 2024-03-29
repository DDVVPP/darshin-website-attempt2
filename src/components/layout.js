import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"

import layoutStyles from "../styles/layout.module.scss"

const Layout = props => {
  const [toggleNav] = React.useState(false)
  return (
    <div
      className={`${layoutStyles.siteWrapper} ${
        toggleNav ? `${layoutStyles.siteHeadOpen}` : ``
      }`}
    >
      <Header />
      <main id="site-main" className={layoutStyles.siteMain}>
        <div id="swup" className={layoutStyles.transitionFade}>
          {props.children}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Layout
