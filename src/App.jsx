import ProductForm from './components/ProductForm'
import ProductTable from './components/ProductTable'

function App() {
  const pageStyle = {
    minHeight: '100vh',
    background: '#0b1220',
    padding: '32px 16px',
    color: '#e5e7eb',
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
  }

  const containerStyle = {
    maxWidth: 1100,
    margin: '0 auto',
    display: 'grid',
    justifyItems: 'center', // centraliza os cards
  }

  const headerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    marginBottom: 18,
    width: '100%',
  }

  const titleStyle = {
    margin: 0,
    fontSize: 28,
    letterSpacing: -0.4,
  }

  const subtitleStyle = {
    margin: 0,
    color: '#9ca3af',
    fontSize: 14,
  }

  const cardStyle = {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.10)',
    borderRadius: 14,
    padding: 16,
    boxShadow: '0 12px 30px rgba(0,0,0,0.35)',
    width: '100%',
    maxWidth: 1100, // garante centralização consistente
  }

  const stackStyle = {
    display: 'grid',
    gap: 14,
    width: '100%',
    justifyItems: 'center',
  }

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <header style={headerStyle}>
          <h1 style={titleStyle}>Cadastro de Produtos</h1>
          <p style={subtitleStyle}>
            Preencha os campos e acompanhe a lista abaixo.
          </p>
        </header>

        <div style={stackStyle}>
          <section style={cardStyle}>
            <ProductForm />
          </section>

          <section style={cardStyle}>
            <ProductTable />
          </section>
        </div>
      </div>
    </div>
  )
}

export default App