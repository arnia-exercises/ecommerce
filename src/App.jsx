import { useState } from "react"
import ScreenProducts from "./pages/screen-products"
import ScreenCart from "./pages/screen-cart"
import ScreenCheckout from "./pages/screen-checkout"

export const SCREENS = {
  PRODUCTS: 'products',
  CART: 'cart',
  CHECKOUT: 'checkout',
}

function App() {
  const [ screen, setScreen ] = useState(SCREENS.PRODUCTS)

  if (screen === SCREENS.PRODUCTS) {
    return <ScreenProducts changeScreen={setScreen} />
  }
  
  if (screen === SCREENS.CART) {
    return <ScreenCart changeScreen={setScreen} />
  }

  return <ScreenCheckout changeScreen={setScreen} />
  
}

export default App
