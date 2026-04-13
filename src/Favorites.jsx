import './Favorites.css'
import { useNavigate } from 'react-router-dom'

function Favorites() {
  const navigate = useNavigate()

  const favorites = [
    { id: 1, name: 'Tomate Fresco', price: 'R$ 8,90', image: '🍅' },
    { id: 2, name: 'Alface Crocante', price: 'R$ 4,50', image: '🥬' },
  ]

  return (
    <div className="favorites-container">
      <header className="favorites-header">
        <button className="back-btn" onClick={() => navigate('/home')}>←</button>
        <h1>Favoritos</h1>
        <button className="cart-btn">🛒</button>
      </header>

      <div className="favorites-content">
        {favorites.length > 0 ? (
          <div className="favorites-grid">
            {favorites.map(item => (
              <div key={item.id} className="favorite-card">
                <div className="favorite-image">{item.image}</div>
                <h3>{item.name}</h3>
                <p className="favorite-price">{item.price}</p>
                <button className="add-btn">Adicionar ao Carrinho</button>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">❤️</div>
            <p>Nenhum produto favoritado ainda</p>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <div className="nav-item" onClick={() => navigate('/home')}>
          <div className="nav-item-content">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span>INÍCIO</span>
          </div>
        </div>
        <div className="nav-item" onClick={() => navigate('/categorias')}>
          <div className="nav-item-content">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            <span>CATEGORIAS</span>
          </div>
        </div>
        <div className="nav-item active" onClick={() => navigate('/favorites')}>
          <div className="nav-item-content">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
            </svg>
            <span>PEDIDOS</span>
          </div>
        </div>
        <div className="nav-item" onClick={() => navigate('/perfil')}>
          <div className="nav-item-content">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>PERFIL</span>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Favorites
