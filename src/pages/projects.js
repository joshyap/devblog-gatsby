import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from 'gatsby'

// export default () => (
//   <Layout>      
//     <p>will eventually go here</p>
//   </Layout>
// )

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
        <h1>Projects</h1>
        <ol>
            {data.allMarkdownRemark.edges.map((edge) => {
                return (
                    <li>
                        <Link to={`/blog/${edge.node.fields.slug}`}>
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

export default ProjectsPage