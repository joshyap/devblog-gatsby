import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.css"

// export default props => <h1>{props.headerText}</h1>
{/* <script src="https://use.fontawesome.com/0b7ae9e0e3.js"></script> */}

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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )    
}


export default Header

{/* <Link to="/blog">Blog</Link>
<Link to="/projects/">Projects</Link>
<Link to="/contact/">Contact</Link> */}


