import React from "react"
// import Layout from "../components/layout"
import * as indexStyles from "./index.module.css"
import Header from "../components/header"
// import Footer from "../components/footer"
import TextLoop from "react-text-loop"
import Logo from "../components/logo.js"
import Head from '../components/head'


const Index = () => (  
  <div>
    <Head title="home" />
    <Header />
      <main className={indexStyles.flexContainer}>
        <section className={indexStyles.left}>
          <h1 className={indexStyles.indexText}>
              hi, i'm josh
          </h1>
          <h1 className={indexStyles.indexText}>
            i like to&nbsp;
            <TextLoop>                    
              <span>build</span>
              <span>learn</span>
              <span>create</span>
            </TextLoop>{" "}
          </h1>
        </section>
        <section className={indexStyles.right}>
          <Logo />
        </section>
      </main>
  </div> 
)

export default Index;