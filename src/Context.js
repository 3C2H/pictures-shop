import React from "react"

const Context = React.createContext()

function ContextProvider({children}) {
  return (
    <Context.Provider value="">
      {children} 
    </Context.Provider>
  )
}

export {ContextProvider, Context}

/* Destructured
function contextProvider({props}) {
  return(
    <Context.Provider value="">
      {props.children} 
    </Context.Provider>
  )
}
*/