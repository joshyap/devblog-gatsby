import React from 'react'
import * as heroStyles from "./hero.module.css"
import * as Header from "../components/header"
import * as Footer from "../components/footer"
import * as Layout from "../components/layout"

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