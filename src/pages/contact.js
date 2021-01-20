import React from "react"
import Layout from "../components/layout"
import contactStyles from "./contact.module.css"
import lionelRichie from "../images/lionel-richie-hello.gif"
import Head from "../components/head"


export default () => (
  <Layout>
    <Head title="contact" />
    <div className={contactStyles.twoColumn}>
      <div>          
        <img src={lionelRichie} className={contactStyles.column} alt="Lionel Richie" />
      </div>
      <div>        
        <h1>Looking for me?</h1>
        <ul className={contactStyles.contactList}>
          <li /*{ className={contactStyles.contactList}*/><a href="https://joshyap-bucket.s3.amazonaws.com/joshua-yap-resume-2021.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li> 
          <li /*{ className={contactStyles.contactList}*/><a href="https://www.linkedin.com/in/joshuacyap/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li> 
          <li /*{ className={contactStyles.contactList}*/><a href="https://github.com/joshyap" target="_blank" rel="noopener noreferrer">Github</a></li> 
          <li /*{ className={contactStyles.contactList}*/><a href="https://twitter.com/J0SHYAP" target="_blank" rel="noopener noreferrer">Twitter</a></li> 
          <li /*{ className={contactStyles.contactList}*/><a href="https://dev.to/j0shyap" target="_blank" rel="noopener noreferrer">dev.to</a></li> 
          <li /*{ className={contactStyles.contactList}*/><a href="https://www.freecodecamp.org/joshyap" target="_blank" rel="noopener noreferrer">freeCodeCamp</a></li> 
          <li /*{ className={contactStyles.contactList}*/><a href="https://www.chess.com/member/joshgotfired" target="_blank" rel="noopener noreferrer">Chess.com</a></li> 
        </ul>
      </div>
    </div>
  </Layout>
)