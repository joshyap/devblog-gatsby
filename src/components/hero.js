import React from 'react'
import heroStyles from "./hero.module.css"
import Header from "../components/header"
import Footer from "../components/footer"
import Layout from "../components/layout"

const Hero = () => {
    return (
        <Layout>
        <Hero className={heroStyles.hero}>
            <Header className={heroStyles.heroHeader}/>
            <div className={heroStyles.left}>            
                <h1>HI</h1><br />
                {/* <p>This portfolio is a work in progress</p> */}
            </div>
            <div className={heroStyles.right}>
                <h1>THERE</h1>            
            </div>
            <Footer className={heroStyles.heroFooter}/>
        </Hero>
        </Layout>
    )
}

export default Hero