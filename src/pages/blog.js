import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from "./blog.module.css"


// export default () => {
//   const data = useStaticQuery(graphql`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             frontmatter {
//               title
//               date
//             }
//           }
//         }
//       }
//     }
//   `)

//   return (
//     <Layout>      
//       <h1>Blog posts</h1>
//       <ol>
//         {data.allMarkdownRemark.edges.map((edge) => {
//           return (
//             <li>
//               <h2>{edge.node.frontmatter.title}</h2>
//               <p>{edge.node.frontmatter.date}</p>
//             </li>
//           )
//         })}
//       </ol>
//     </Layout>
//   )
// }

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
          <h1 className={blogStyles.header}>Blog</h1>
          <ol className={blogStyles.bloglist}>
              {data.allMarkdownRemark.edges.map((edge) => {
                  return (
                      <li>
                          <Link to={`/blog/${edge.node.fields.slug}`}>
                              <h2>{edge.node.frontmatter.title}</h2>
                              <p>{edge.node.frontmatter.date} - {edge.node.frontmatter.description}</p>
                          </Link>
                      </li>
                  )
              })}
          </ol>
      </Layout>
  )
}

export default BlogPage