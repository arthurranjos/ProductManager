import ProductForm from './components/ProductForm'
import ProductTable from './components/ProductTable'

function App() {
  return (
    <div>
      <h1>Cadastro de Produtos</h1>

      <ProductForm />

      <hr />

      <ProductTable />
    </div>
  )
}

export default App