import React from "react"
// import Layout from "../components/layout"
import indexStyles from "./index.module.css"
import Header from "../components/header"
// import Footer from "../components/footer"
import TextLoop from "react-text-loop";


export default () => (
  // <Layout>
    <div className={indexStyles.indexContainer}>      
      <div className={indexStyles.left}>
        <div className={indexStyles.matchHeader}><Header /></div>
        <h1 className={indexStyles.text}>
            hi, i'm josh
        </h1>        
      </div>
      <div className={indexStyles.right}>
        <div className={indexStyles.hidden}><Header /></div>
        <h1 className={indexStyles.text}>          
          i like to&nbsp;
          <TextLoop>                    
              <span>build</span>
              <span>learn</span>
              <span>explore</span>
          </TextLoop>{" "}
        </h1>
        <br/>
        <p className={indexStyles.text}>(P.S. I am currently rebuilding this site as a JAMstack project so it is still a work in progress)</p>        
      </div>      
    </div>    
  // </Layout>
)



    // {/* <Link to="/contact/">Contact</Link> */}
    // {/* <Header headerText="Hi, I'm Josh" /> */}
    // <h1>IN PROGRESS</h1>
    // <h3>I am in the process of rebuilding my portfolio/blog site with react as a JAMstack site. This is not a finished product by any means.</h3>
    // {/* <img src="https://source.unsplash.com/random/400x200" alt="" /> */}
    // {/* <img src={'/marfa.jpg'} alt="Prada store in Marfa" className={indexStyles.homepageImage} /> */}
