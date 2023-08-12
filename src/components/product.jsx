export default function Product ({ addToCart, ...product  }) {
  const { name, value } = product

  return (
    <div>
      <img src="" alt="" />
      <div>
        <button
          onClick={() => addToCart(product)}
        >Adicionar {name} ao carrinho</button>
        <div>R$ {value} </div>
      </div>
    </div>
  )
}
