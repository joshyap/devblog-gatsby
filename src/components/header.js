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
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} to="/">
                    {data.site.siteMetadata.title}
                </Link>
            </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    {/* <li><Link to="/" className={headerStyles.navItem}>Home</Link></li> */}
                    <li><Link to="/blog" className={headerStyles.navItem}>Blog</Link></li>
                    <li><Link to="/projects" className={headerStyles.navItem}>Projects</Link></li>
                    <li><Link to="/contact" className={headerStyles.navItem}>Contact</Link></li>
                    {/* <li><button className={headerStyles.navItem + ' ' + headerStyles.colorToggle}>&#9728; &#9790;</button></li> */}
                </ul>                
            </nav>
        </header>
    )    
}


export default Header
