import { useState } from "react"
import ScreenProducts from "./pages/screen-products"
import ScreenCart from "./pages/screen-cart"
import ScreenCheckout from "./pages/screen-checkout"

import productsJSON from './assets/products.json'

export const SCREENS = {
  PRODUCTS: 'products',
  CART: 'cart',
  CHECKOUT: 'checkout',
}

function App() {
  const [ screen, setScreen ] = useState(SCREENS.PRODUCTS)
  const [ products, setProducts ] = useState(productsJSON)
  const [ cart, setCart ] = useState([])

  const addToCart = (product) => {
    setCart([
      ...cart,
      {
        ...product,
        quantity: 1
      }
    ])
  }

  if (screen === SCREENS.PRODUCTS) {
    return (
      <ScreenProducts
        changeScreen={setScreen}
        products={products}
        addToCart={addToCart}
      />
    )
  }
  
  if (screen === SCREENS.CART) {
    return (
      <ScreenCart
        changeScreen={setScreen}
        cart={cart}
      />
    )
  }

  return <ScreenCheckout changeScreen={setScreen} />
  
}

export default App
