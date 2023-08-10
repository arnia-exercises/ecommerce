import { SCREENS } from "../App";
import Footer from "../components/footer";
import Header from "../components/header";

export default function ScreenCheckout ({ changeScreen }) {
  return (
    <>
      <Header />
      <div>CHECKOUT</div>
      <button onClick={() => changeScreen(SCREENS.PRODUCTS)}>Continuar comprando</button>
      <button onClick={() => alert('TORREI A GRANA')}>Confirmar Compra</button>
      <Footer />
    </>
  )
}