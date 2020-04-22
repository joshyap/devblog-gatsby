import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.css"

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} to="/">
                    joshyap.dev
                </Link>
            </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    {/* <li><Link to="/" className={headerStyles.navItem}>Home</Link></li> */}
                    <li><Link to="/blog" className={headerStyles.navItem}>Blog</Link></li>
                    <li><Link to="/projects" className={headerStyles.navItem}>Projects</Link></li>
                    <li><Link to="/contact" className={headerStyles.navItem}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )    
}


export default Header
