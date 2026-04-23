import { useDispatch, useSelector } from 'react-redux'
import {
  updateField,
  addProduct,
  clearForm,
} from '../store/productSlice'

function ProductForm() {
  const dispatch = useDispatch()
  const form = useSelector((state) => state.products.form)

  const handleChange = (e) => {
    dispatch(
      updateField({
        field: e.target.name,
        value: e.target.value,
      })
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(addProduct())
    dispatch(clearForm())
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="id"
        placeholder="ID"
        value={form.id}
        onChange={handleChange}
      />

      <input
        name="nome"
        placeholder="Nome"
        value={form.nome}
        onChange={handleChange}
      />

      <input
        name="categoria"
        placeholder="Categoria"
        value={form.categoria}
        onChange={handleChange}
      />

      <input
        name="unidade"
        placeholder="Unidade"
        value={form.unidade}
        onChange={handleChange}
      />

      <input
        name="peso"
        placeholder="Peso"
        value={form.peso}
        onChange={handleChange}
      />

      <input
        name="dimensoes"
        placeholder="Dimensões"
        value={form.dimensoes}
        onChange={handleChange}
      />

      <input
        name="volume"
        placeholder="Volume"
        value={form.volume}
        onChange={handleChange}
      />

      <input
        name="recipiente"
        placeholder="Recipiente"
        value={form.recipiente}
        onChange={handleChange}
      />

      <input
        name="preco"
        placeholder="Preço"
        value={form.preco}
        onChange={handleChange}
      />

      <button type="submit">
        Cadastrar
      </button>
    </form>
  )
}

export default ProductForm