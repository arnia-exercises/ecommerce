import { SCREENS } from "../App";
import Footer from "../components/footer";
import Header from "../components/header";

export default function ScreenCart ({ changeScreen, cart }) {
  return (
    <>
      <Header />
      <div>CARRINHO</div>

      <pre>{JSON.stringify(cart, null, 2)}</pre>
      
      <button onClick={() => changeScreen(SCREENS.PRODUCTS)}>Continuar comprando</button>
      <button onClick={() => changeScreen(SCREENS.CHECKOUT)}>Finalizar Compra</button>
      <Footer />
    </>
  )
}