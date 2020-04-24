import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import { strictEqual } from 'assert';

const Footer = () => {
const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                author
            }
        }
    }
`)

    return (
        <footer>
            <p>Created by {data.site.siteMetadata.author}, © 2020</p>            
            {/* <ul>
                <li>
                <a href="https://twitter.com/J0SHYAP" target="_blank" rel="noopener noreferrer"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                </li>
                <li>
                <a href="https://www.linkedin.com/in/joshuacyap/" target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                </li>
                <li>
                    <a href="https://github.com/joshyap" target="_blank" rel="noopener noreferrer"><i class="fa fa-github" aria-hidden="true"></i></a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UCFWhZ6JJaqltd_-qEbPk0IA" target="_blank" rel="noopener noreferrer"><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
                </li>
                <li>
                    <a href="https://www.freecodecamp.org/joshyap" target="_blank" rel="noopener noreferrer"><i class="fa fa-free-code-camp" aria-hidden="true"></i></a>
                </li>
                <li>
                    <a href="mailto:joshua.c.yap@gmail.com" target="_blank" rel="noopener noreferrer"><i class="fa fa-envelope-o" aria-hidden="true"></i></a>
                </li>          
            </ul>                                             */}            
        </footer>
    )
}

export default Footer