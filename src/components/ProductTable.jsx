import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'

function ProductTable() {
  const products = useSelector((state) => state.products.items)
  const [hoveredRow, setHoveredRow] = useState(null)

  const rootStyle = {
    fontFamily: 'inherit',
    fontSize: 13,
    lineHeight: 1.4,
  }

  const wrapStyle = {
    width: '100%',
    overflowX: 'auto',
    borderRadius: 12,
    border: '1px solid rgba(255,255,255,0.12)',
    background: 'rgba(255,255,255,0.02)',
  }

  const toolbarStyle = {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    gap: 12,
    padding: '10px 12px',
    borderBottom: '1px solid rgba(255,255,255,0.10)',
  }

  const titleStyle = {
    margin: 0,
    fontSize: 13,
    color: '#e5e7eb',
    fontWeight: 700,
  }
  const metaStyle = { margin: 0, fontSize: 12, color: '#9ca3af' }

  const tableStyle = {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: 0,
    minWidth: 980,
    tableLayout: 'fixed', // <- garante alinhamento consistente entre thead/tbody
  }

  const thStyle = {
    textAlign: 'center', // <- centraliza header
    fontSize: 12,
    letterSpacing: 0.3,
    textTransform: 'uppercase',
    padding: '12px 10px', // <- mantém igual ao td
    background: 'rgba(255,255,255,0.06)',
    color: '#cbd5e1',
    borderBottom: '1px solid rgba(255,255,255,0.10)',
    whiteSpace: 'nowrap',
    position: 'sticky',
    top: 0,
    zIndex: 1,
    backdropFilter: 'blur(6px)',
  }

  const tdStyle = {
    padding: '12px 10px',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
    color: '#e5e7eb',
    whiteSpace: 'nowrap',
    textAlign: 'center', // <- centraliza body
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: 13,
    lineHeight: 1.4,
  }

  const tdNumStyle = tdStyle // <- mantém o mesmo alinhamento (centralizado)

  const emptyStyle = {
    margin: 0,
    padding: '12px',
    color: '#9ca3af',
    fontSize: 13,
  }

  const rows = useMemo(() => products, [products])

  return (
    <div style={rootStyle}>
      <div style={wrapStyle}>
        <div style={toolbarStyle}>
          <p style={titleStyle}>Produtos</p>
          <p style={metaStyle}>{rows.length} item(ns)</p>
        </div>

        {rows.length === 0 ? (
          <p style={emptyStyle}>Nenhum produto cadastrado ainda.</p>
        ) : (
          <table style={tableStyle}>
            <colgroup>
              <col style={{ width: 70 }} />
              <col style={{ width: 90 }} />
              <col style={{ width: 90 }} />
              <col style={{ width: 90 }} />
              <col style={{ width: 90 }} />
              <col style={{ width: 90 }} />
              <col style={{ width: 90 }} />
              <col style={{ width: 90 }} />
              <col style={{ width: 90 }} />
            </colgroup>

            <thead>
              <tr>
                <th style={thStyle}>ID</th>
                <th style={thStyle}>Nome</th>
                <th style={thStyle}>Categoria</th>
                <th style={thStyle}>Unidade</th>
                <th style={thStyle}>Peso</th>
                <th style={thStyle}>Dimensões</th>
                <th style={thStyle}>Volume</th>
                <th style={thStyle}>Recipiente</th>
                <th style={thStyle}>Preço</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((product, index) => {
                const isHovered = hoveredRow === index
                const baseBg = index % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.03)'
                const rowStyle = {
                  background: isHovered ? 'rgba(59,130,246,0.10)' : baseBg,
                  transition: 'background 120ms ease',
                }

                return (
                  <tr
                    key={product.id || index}
                    style={rowStyle}
                    onMouseEnter={() => setHoveredRow(index)}
                    onMouseLeave={() => setHoveredRow(null)}
                  >
                    <td style={tdStyle} title={product.id}>{product.id}</td>
                    <td style={tdStyle} title={product.nome}>{product.nome}</td>
                    <td style={tdStyle} title={product.categoria}>{product.categoria}</td>
                    <td style={tdStyle} title={product.unidade}>{product.unidade}</td>
                    <td style={tdNumStyle} title={product.peso}>{product.peso}</td>
                    <td style={tdStyle} title={product.dimensoes}>{product.dimensoes}</td>
                    <td style={tdNumStyle} title={product.volume}>{product.volume}</td>
                    <td style={tdStyle} title={product.recipiente}>{product.recipiente}</td>
                    <td style={tdNumStyle} title={product.preco}>{product.preco}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default ProductTable