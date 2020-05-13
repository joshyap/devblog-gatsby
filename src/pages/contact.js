import React from "react"
import Layout from "../components/layout"
import contactStyles from "./contact.module.css"
import lionelRichie from "../images/lionel-richie-hello.gif"

// let gifStyle = {
//   width: '100%',
//   height: '0',
//   paddingBottom: '69%',
//   position: 'relative'
// }

export default () => (
  <Layout>
    <h3>Looking for me?</h3>
    <div className={contactStyles.twoColumn}>
      <div className={contactStyles.column}>  
        <img src={lionelRichie} alt="Lionel Richie" />
      </div>
      <div className={contactStyles.column}>
        {/* <div style={gifStyle}><iframe src="https://giphy.com/embed/4Nq9NNTuIlMnm" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/hello-gif-4Nq9NNTuIlMnm">via GIPHY</a></p> */}
        <ul className={contactStyles.contactList}>
          <li /*{ className={contactStyles.contactList}*/><a href="https://www.linkedin.com/in/joshuacyap/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li> 
          <li /*{ className={contactStyles.contactList}*/><a href="https://github.com/joshyap" target="_blank" rel="noopener noreferrer">Github</a></li> 
          <li /*{ className={contactStyles.contactList}*/><a href="https://twitter.com/J0SHYAP" target="_blank" rel="noopener noreferrer">Twitter</a></li> 
          <li /*{ className={contactStyles.contactList}*/><a href="https://dev.to/j0shyap" target="_blank" rel="noopener noreferrer">dev.to</a></li> 
          <li /*{ className={contactStyles.contactList}*/><a href="https://www.freecodecamp.org/joshyap" target="_blank" rel="noopener noreferrer">freeCodeCamp</a></li> 
          <li /*{ className={contactStyles.contactList}*/><a href="https://www.chess.com/member/j0shyap" target="_blank" rel="noopener noreferrer">Chess.com</a></li> 
        </ul>
      </div>
    </div>
  </Layout>
)