import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const IllustrationPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Illustration" />
      <div>
        <h1>Illustration</h1>
        <h2>Illustration projects will show up here.</h2>
      </div>
    </Layout>
  )
}

export default IllustrationPage
