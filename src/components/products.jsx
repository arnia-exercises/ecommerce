import Product from "./product";
import Title from "./title";

export default function Products ({ products }) {

  const addToCart = () => {}
  const removeToCart = () => {}

  return (
    <>
      <Title>Produtos</Title>

      {products.map(product => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          value={product.value}
          image={product.image}
        />
      ))}
    </>
  )
}