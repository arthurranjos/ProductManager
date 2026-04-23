import { useDispatch, useSelector } from 'react-redux'
import { updateField, addProduct, clearForm } from '../store/productSlice'

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

  const formStyle = {
    display: 'grid',
    gap: 16,
    width: '100%',
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    columnGap: 16,
    rowGap: 14,
    alignItems: 'start',
    width: '100%',
  }

  const fieldStyle = {
    display: 'grid',
    gap: 6,
  }

  const labelStyle = {
    fontSize: 12,
    color: '#cbd5e1',
  }

  const inputStyle = {
    width: '100%',
    height: 40,
    boxSizing: 'border-box',
    padding: '10px 12px',
    borderRadius: 10,
    border: '1px solid rgba(255,255,255,0.14)',
    background: 'rgba(255,255,255,0.06)',
    color: '#e5e7eb',
    outline: 'none',
  }

  const actionsStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 10,
    marginTop: 6,
    paddingTop: 6,
  }

  const primaryBtnStyle = {
    padding: '10px 14px',
    borderRadius: 10,
    border: '1px solid rgba(59,130,246,0.55)',
    background: 'rgba(59,130,246,0.18)',
    color: '#e5e7eb',
    cursor: 'pointer',
    fontWeight: 600,
    minWidth: 140,
  }

  const hintStyle = {
    margin: 0,
    marginBottom: 2,
    fontSize: 12,
    color: '#9ca3af',
    lineHeight: 1.4,
  }

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <p style={hintStyle}>
        Dica: use “Tab” para navegar rapidamente pelos campos.
      </p>

      <div style={gridStyle}>
        <div style={fieldStyle}>
          <label style={labelStyle} htmlFor="id">
            ID
          </label>
          <input
            id="id"
            name="id"
            placeholder="Ex: 1001"
            value={form.id}
            onChange={handleChange}
            style={inputStyle}
            autoComplete="off"
            required
          />
        </div>

        <div style={fieldStyle}>
          <label style={labelStyle} htmlFor="nome">
            Nome
          </label>
          <input
            id="nome"
            name="nome"
            placeholder="Ex: Arroz Parboilizado"
            value={form.nome}
            onChange={handleChange}
            style={inputStyle}
            autoComplete="off"
            required
          />
        </div>

        <div style={fieldStyle}>
          <label style={labelStyle} htmlFor="categoria">
            Categoria
          </label>
          <input
            id="categoria"
            name="categoria"
            placeholder="Ex: Alimentos"
            value={form.categoria}
            onChange={handleChange}
            style={inputStyle}
            autoComplete="off"
          />
        </div>

        <div style={fieldStyle}>
          <label style={labelStyle} htmlFor="unidade">
            Unidade
          </label>
          <input
            id="unidade"
            name="unidade"
            placeholder="Ex: kg, un"
            value={form.unidade}
            onChange={handleChange}
            style={inputStyle}
            autoComplete="off"
          />
        </div>

        <div style={fieldStyle}>
          <label style={labelStyle} htmlFor="peso">
            Peso
          </label>
          <input
            id="peso"
            name="peso"
            type="number"
            min="0"
            step="0.01"
            placeholder="Ex: 1.00"
            value={form.peso}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={fieldStyle}>
          <label style={labelStyle} htmlFor="dimensoes">
            Dimensões
          </label>
          <input
            id="dimensoes"
            name="dimensoes"
            placeholder="Ex: 10x20x30 cm"
            value={form.dimensoes}
            onChange={handleChange}
            style={inputStyle}
            autoComplete="off"
          />
        </div>

        <div style={fieldStyle}>
          <label style={labelStyle} htmlFor="volume">
            Volume
          </label>
          <input
            id="volume"
            name="volume"
            type="number"
            min="0"
            step="0.01"
            placeholder="Ex: 0.50"
            value={form.volume}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={fieldStyle}>
          <label style={labelStyle} htmlFor="recipiente">
            Recipiente
          </label>
          <input
            id="recipiente"
            name="recipiente"
            placeholder="Ex: Saco / Caixa"
            value={form.recipiente}
            onChange={handleChange}
            style={inputStyle}
            autoComplete="off"
          />
        </div>

        <div style={fieldStyle}>
          <label style={labelStyle} htmlFor="preco">
            Preço
          </label>
          <input
            id="preco"
            name="preco"
            type="number"
            min="0"
            step="0.01"
            placeholder="Ex: 12.90"
            value={form.preco}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
      </div>

      <div style={actionsStyle}>
        <button type="submit" style={primaryBtnStyle}>
          Cadastrar
        </button>
      </div>
    </form>
  )
}

export default ProductForm