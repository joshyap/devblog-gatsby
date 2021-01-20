import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"


import headerStyles from "./header.module.css"

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (        
        <nav className={headerStyles.nav}>
            <h1><Link className={headerStyles.title} to="/">{data.site.siteMetadata.title}</Link></h1>
            <ul className={headerStyles.navLinks}>
                <li><Link to="/blog" className={headerStyles.navItem}>blog</Link></li>
                <li><Link to="/projects" className={headerStyles.navItem}>projects</Link></li>
                <li><Link to="/contact" className={headerStyles.navItem}>contact</Link></li>
            </ul>
        </nav>        
    )    
}


export default Header
