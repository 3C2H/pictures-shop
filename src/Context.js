import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
  const [allPhotos, setAllPhotos] = useState([])
  const [cartItems, setCartItems] = useState([])

  const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setAllPhotos(data))
  }, [])

  function toggleFavorite(id) {
    const updatedArr = allPhotos.map(photo => {
      if(photo.id === id) {
        return {...photo, isFavorite: !photo.isFavorite}
      }
      return photo
    })
    setAllPhotos(updatedArr)
  }

  function addToCart(newItem) {
    setCartItems(prevItems => [...prevItems, newItem])
  }

  function removeFromCart(id) {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  function emptyCart() {
    setCartItems([])
  }

  return (
    <Context.Provider value={{allPhotos, toggleFavorite, addToCart,removeFromCart,emptyCart, cartItems}}>
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