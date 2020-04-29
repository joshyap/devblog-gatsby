import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
// import { useStaticQuery } from '../../node_modules/gatsby';
// import { extendingDifferentTypeKindMessage } from '../../node_modules/graphql/validation/rules/PossibleTypeExtensions';

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq : $slug } }) {
            frontmatter {
                title
                date
            }
            html
        }
    }
`

const Blog = (props) => {
    return (
        <Layout>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
        </Layout>
    )
}

// const Blog = () => {
//     const data = useStaticQuery(graphql`
//         query {
//             allMarkdownRemark {
//                 edges {
//                     node {
//                         frontmatter {
//                             title
//                             date
//                         }
//                         fields {
//                             slug
//                         }
//                     }
//                 }
//             }
//         }
//     `)
    
//     return (
//         <Layout>
//             <h1>Blog</h1>
//             <ol>
//                 {data.allMarkdownRemark.edges.map((edge) => {
//                     return (
//                         <li>
//                             <Link to={`/blog/$edge.node.fields.slug}`}>
//                                 <h2>{edge.node.frontmatter.title}</h2>
//                                 <p>{edge.node.frontmatter.date}</p>
//                             </Link>
//                         </li>
//                     )
//                 })}
//             </ol>            
//         </Layout>
//     )
// }

export default Blog