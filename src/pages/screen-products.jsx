import Footer from "../components/footer"
import Header from "../components/header"

import { SCREENS } from "../App"
import Title from "../components/title"
import Product from "../components/product"

export default function ScreenProducts ({ changeScreen, products, addToCart }) {
  return (
    <div>
      <Header />

      <Title>Produtos</Title>

      {products.map(product => (
        <Product
          key={product.id}
          {...product}
          // id={product.id}
          // name={product.name}
          // value={product.value}
          // image={product.imagem}
          addToCart={addToCart}
        />
      ))}

      <button onClick={() => changeScreen(SCREENS.CART)}>Ir para o carrinho</button>
      <Footer />
    </div>
  )
}