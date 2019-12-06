import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const CeramicsPage = () => {
  return (
    <Layout>
      <Head title="Ceramics" />
      <div>
        <h1>Ceramics</h1>
        <h2>Ceramics projects will show up here.</h2>
      </div>
    </Layout>
  )
}

export default CeramicsPage
