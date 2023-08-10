import Footer from "../components/footer"
import Header from "../components/header"
import Products from "../components/products"

import products from '../assets/products.json'

import { SCREENS } from "../App"

export default function ScreenProducts ({ changeScreen }) {
  return (
    <div>
      <Header />
      <Products products={products} />
      <button onClick={() => changeScreen(SCREENS.CART)}>Ir para o carrinho</button>
      <Footer />
    </div>
  )
}