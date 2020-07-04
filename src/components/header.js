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
            <div>
                <h1>
                    <Link className={headerStyles.title} to="/">
                        {data.site.siteMetadata.title}
                    </Link>
                </h1>               
            </div>
            <nav>
                <ul className={headerStyles.navList}>                    
                    <li><Link to="/blog" className={headerStyles.navItem}>Blog</Link></li>
                    <li><Link to="/projects" className={headerStyles.navItem}>Projects</Link></li>
                    <li><Link to="/contact" className={headerStyles.navItem}>Contact</Link></li>                    
                </ul>                
            </nav>
        </header>
    )    
}


export default Header
