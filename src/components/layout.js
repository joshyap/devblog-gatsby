import React from 'react'
import layoutStyles from "./layout.module.css"
import Header from "../components/header"
import Footer from "../components/footer"
import Container from "../components/container"


const Layout = (props) => {
    return (
        <div className={layoutStyles.layout}>
            <Header />
            <Container>
                {props.children}
            </Container>
            <Footer />
        </div>
    )
}

export default Layout