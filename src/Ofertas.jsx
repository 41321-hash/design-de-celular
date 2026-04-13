import './Ofertas.css'
import { useNavigate } from 'react-router-dom'

function Ofertas() {
  const navigate = useNavigate()

  const offers = [
    { id: 1, name: 'Tomate Fresco', price: 'R$ 8,90', original: 'R$ 12,90', image: '🍅', discount: '30%' },
    { id: 2, name: 'Alface Crocante', price: 'R$ 4,50', original: 'R$ 6,50', image: '🥬', discount: '30%' },
    { id: 3, name: 'Cenoura Doce', price: 'R$ 5,90', original: 'R$ 8,90', image: '🥕', discount: '33%' },
    { id: 4, name: 'Batata Inglesa', price: 'R$ 6,90', original: 'R$ 9,90', image: '🥔', discount: '30%' },
    { id: 5, name: 'Brócolis Fresco', price: 'R$ 7,90', original: 'R$ 11,90', image: '🥦', discount: '33%' },
    { id: 6, name: 'Cebola Roxa', price: 'R$ 5,50', original: 'R$ 7,90', image: '🧅', discount: '30%' },
  ]

  return (
    <div className="offers-container">
      <header className="offers-header">
        <button className="back-btn" onClick={() => navigate('/home')}>←</button>
        <h1>Ofertas da Semana</h1>
        <button className="cart-btn">🛒</button>
      </header>

      <div className="offers-grid">
        {offers.map(offer => (
          <div key={offer.id} className="offer-card" onClick={() => navigate(`/produto/${offer.id}`)}>
            <div className="offer-image">{offer.image}</div>
            <div className="offer-badge">{offer.discount} OFF</div>
            <h3>{offer.name}</h3>
            <div className="offer-prices">
              <span className="price">{offer.price}</span>
              <span className="original">{offer.original}</span>
            </div>
            <button className="add-btn" onClick={(e) => { e.stopPropagation(); navigate(`/produto/${offer.id}`); }}>Adicionar</button>
          </div>
        ))}
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

export default Ofertas
