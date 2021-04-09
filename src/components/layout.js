import React from 'react'
import * as layoutStyles from "./layout.module.css"
import Header from "../components/header"
// import Footer from "../components/footer"
import Container from "../components/container"


const Layout = (props) => {
    return (
        <div className={layoutStyles.backLayout}>
            <div className={layoutStyles.layout}>
                {/* <span className="cursor"></span> */}
                <Header />
                <Container>
                    {props.children}
                </Container>
                {/* <Footer /> */}
            </div>
        </div>
    )
}

export default Layout