import './Busca.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useState } from 'react'

function Busca() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') || '')

  const results = [
    { id: 1, name: 'Tomate Fresco', price: 'R$ 8,90', image: '🍅' },
    { id: 2, name: 'Alface Crocante', price: 'R$ 4,50', image: '🥬' },
    { id: 3, name: 'Cenoura Doce', price: 'R$ 5,90', image: '🥕' },
  ]

  return (
    <div className="busca-container">
      <header className="busca-header">
        <button className="back-btn" onClick={() => navigate('/home')}>←</button>
        <input 
          type="text"
          className="search-input"
          placeholder="Buscar produtos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />
        <button className="search-submit">🔍</button>
      </header>

      <div className="results-container">
        {query ? (
          <>
            <h2>Resultados para "{query}"</h2>
            <div className="results-grid">
              {results.map(product => (
                <div key={product.id} className="result-card">
                  <div className="result-image">{product.image}</div>
                  <h3>{product.name}</h3>
                  <p className="result-price">{product.price}</p>
                  <button className="add-btn">Adicionar</button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">🔍</div>
            <p>Digite para buscar produtos</p>
          </div>
        )}
      </div>

      <nav className="bottom-nav">
        <button className="nav-btn" onClick={() => navigate('/home')}>🏠</button>
        <button className="nav-btn" onClick={() => navigate('/categorias')}>🏪</button>
        <button className="nav-btn" onClick={() => navigate('/favorites')}>❤️</button>
        <button className="nav-btn" onClick={() => navigate('/perfil')}>👤</button>
      </nav>
    </div>
  )
}

export default Busca
