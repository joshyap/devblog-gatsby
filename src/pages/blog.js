import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from "./blog.module.css"


const BlogPage = () => {
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
          <h1 className={blogStyles.header}>Thoughts are my own</h1>
          <ol className={blogStyles.bloglist}>
              {data.allMarkdownRemark.edges.map((edge) => {
                  return (
                      <li className={blogStyles.listitem}>
                          <Link to={`/blog/${edge.node.fields.slug}`} className={blogStyles.linkitem}>
                              <h2>{edge.node.frontmatter.title}</h2>
                              <p>{edge.node.frontmatter.date} // {edge.node.frontmatter.description}</p>
                          </Link>
                      </li>
                  )
              })}
          </ol>
      </Layout>
  )
}

export default BlogPage