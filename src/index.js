import React from "react"
import ReactDOM from "react-dom"
// import "./normalize.css"
// import "./styles.css"
import {BrowserRouter as Router} from "react-router-dom"
import App from "./App"
import {ContextProvider} from "./Context"

ReactDOM.render(
  <ContextProvider>
    <Router>
      <App />
    </Router>
  </ContextProvider>,
  document.getElementById("root")
)
