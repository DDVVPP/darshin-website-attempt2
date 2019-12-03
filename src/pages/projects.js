import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import projectStyles from "./projects.module.scss"
import Head from "../components/head"

const ProjectsPage = () => {
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
      <Head title="Projects">
        <h1>Projects</h1>
        <ol className={projectStyles.posts}>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <li key={edge.node.fields.slug} className={projectStyles.post}>
                <Link to={`/projects/${edge.node.fields.slug}`}>
                  <h2>{edge.node.frontmatter.title}</h2>

                  <p>{edge.node.frontmatter.date}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      </Head>
    </Layout>
  )
}

export default ProjectsPage
