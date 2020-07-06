import React from "react"
// import Layout from "../components/layout"
<<<<<<< HEAD
import indexStyles from "./index.module.css"
import Header from "../components/header"
import Footer from "../components/footer"


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
          i like to make things
        </h1>
        <br/><br/>
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
=======
import Hero from "../components/hero"
// import indexStyles from "./index.module.css"

export default () => (
  <Hero>
    <h1>IN PROGRESS</h1>
    <h3>I am in the process of rebuilding my portfolio/blog site with react as a JAMstack site. This is not a finished product by any means.</h3>
  </Hero>    
)


// export default () => (
//   <Layout>
//     {/* <Link to="/contact/">Contact</Link> */}
//     {/* <Header headerText="Hi, I'm Josh" /> */}
//     <Hero>
//       <h1>IN PROGRESS</h1>
//       <h3>I am in the process of rebuilding my portfolio/blog site with react as a JAMstack site. This is not a finished product by any means.</h3>
//     </Hero>    
//     {/* <img src="https://source.unsplash.com/random/400x200" alt="" /> */}
//     <img src={'/marfa.jpg'} alt="Prada store in Marfa" className={indexStyles.homepageImage} />
//   </Layout>
// )

>>>>>>> b81df51504d3a32cef4081edd06cd7678617af1d
