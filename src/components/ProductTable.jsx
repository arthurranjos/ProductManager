import { useSelector } from 'react-redux'

function ProductTable() {
  const products = useSelector(
    (state) => state.products.items
  )

  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Categoria</th>
          <th>Unidade</th>
          <th>Peso</th>
          <th>Dimensões</th>
          <th>Volume</th>
          <th>Recipiente</th>
          <th>Preço</th>
        </tr>
      </thead>

      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{product.id}</td>
            <td>{product.nome}</td>
            <td>{product.categoria}</td>
            <td>{product.unidade}</td>
            <td>{product.peso}</td>
            <td>{product.dimensoes}</td>
            <td>{product.volume}</td>
            <td>{product.recipiente}</td>
            <td>{product.preco}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ProductTable