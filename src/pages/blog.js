import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from 'gatsby'
import * as blogStyles from "./blog.module.css"
import Head from "../components/head"


const BlogPage = () => {
  const data = useStaticQuery(graphql`
        query {        
            allMarkdownRemark ( 
                filter: { 
                    frontmatter: { 
                      type: { in:["blogpost"] } 
                      published: { eq: true }                      
                    }
                  }
                sort: {
                    fields: frontmatter___order
                    order: DESC
                }
            ) {
                edges {
                    node {
                        frontmatter {
                            title
                            order
                            description
                            published
                            type
                        }
                        timeToRead
                        wordCount {
                            words
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
          <Head title="blog" />
          {/* // date(formatString: "MM DD YYYY") */}
          <h1 className={blogStyles.header}>Blog posts - thoughts are my own</h1>
          <ol className={blogStyles.bloglist}>
              {data.allMarkdownRemark.edges.map((edge) => {
                  return (
                      <li className={blogStyles.listitem}>
                          <Link to={`/blog/${edge.node.fields.slug}`} className={blogStyles.linkitem}>
                              <h2>{edge.node.frontmatter.title}</h2>
                              {/* <p>{edge.node.frontmatter.date} // {edge.node.frontmatter.description}</p> */}
                              <p>{edge.node.frontmatter.description}</p>
                              {/* <p>{edge.node.frontmatter.order} - <i>{edge.node.wordCount.words} words</i></p> */}
                          </Link>
                      </li>
                  )
              })}
          </ol>
      </Layout>
  )
}

export default BlogPage