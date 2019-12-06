import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"

import projectStyles from "../styles/projects.module.scss"
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
              description
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
      <Head title="Projects" />
      <h1 className={projectStyles.postFeed}>Projects</h1>
      <ol className={projectStyles.postFeed}>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <article className={projectStyles.postCard}>
              <Link
                className={projectStyles.postCardLink}
                to={`/projects/${edge.node.fields.slug}`}
              >
                <div className={projectStyles.postCardContent}>
                  <h2 className={projectStyles.postCardTitle}>
                    {edge.node.frontmatter.title}
                    <p className={projectStyles.postCardDescription}>
                      {edge.node.frontmatter.description}
                    </p>
                  </h2>
                </div>
              </Link>
            </article>
          )
        })}
      </ol>
    </Layout>
  )
}

export default ProjectsPage
