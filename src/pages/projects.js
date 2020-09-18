import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from 'gatsby'
import blogStyles from "./blog.module.css"

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark ( 
        filter: { 
          frontmatter: { 
            type: { in:["project"] } 
            published: { eq: true }
          }
        } 
        sort: {
          fields: [frontmatter___date]
          order: DESC
        }
      ) {
        edges {
          node {
            frontmatter {
              title
              date
              description
              published
              type
              link
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
        <h1 className={blogStyles.header}>Projects</h1>
        <ol className={blogStyles.bloglist}>
            {data.allMarkdownRemark.edges.map((edge) => {
                return (
                    <li className={blogStyles.listitem}>
                        <a href={edge.node.frontmatter.link} className={blogStyles.linkitem} target="_blank" rel="noreferrer">
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.date} // {edge.node.frontmatter.description}</p>
                        </a>
                    </li>
                )
            })}
        </ol>
    </Layout>
  )
}

export default ProjectsPage