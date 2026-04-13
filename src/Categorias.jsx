import './Categorias.css'
import { useNavigate } from 'react-router-dom'

// Importando as novas imagens
import imgAlimentos from './assets/AlimentosDespensa.png'
import imgHortalicas from './assets/Hortaliças].png'
import imgFrutas from './assets/Frutas.png'
import imgLaticinios from './assets/Laticínios.png'
import imgCarnes from './assets/Carnes.png'
import imgBebidas from './assets/Bebidas.png'

function Categorias() {
  const navigate = useNavigate()

  const categories = [
    { id: 1, name: 'Alimentos', image: imgAlimentos, count: '234 produtos' },
    { id: 2, name: 'Hortaliças', image: imgHortalicas, count: '156 produtos' },
    { id: 3, name: 'Frutas', image: imgFrutas, count: '89 produtos' },
    { id: 4, name: 'Laticínios', image: imgLaticinios, count: '67 produtos' },
    { id: 5, name: 'Carnes', image: imgCarnes, count: '45 produtos' },
    { id: 6, name: 'Bebidas', image: imgBebidas, count: '123 produtos' },
  ]

  return (
    <div className="categorias-container">
      <header className="categorias-header">
        <button className="back-btn" onClick={() => navigate('/home')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#064232" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>
        <h1>Categorias</h1>
        <button className="cart-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#064232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
        </button>
      </header>

      <div className="categorias-list">
        {categories.map(cat => (
          <div key={cat.id} className="categoria-card" onClick={() => navigate(`/categoria/${cat.id}`)}>
            <div className="categoria-image-wrapper">
              <img src={cat.image} alt={cat.name} className="categoria-image" />
            </div>
            <div className="categoria-info">
              <div>
                <h3 className="categoria-title">{cat.name}</h3>
                <p className="categoria-count">{cat.count}</p>
              </div>
              <div className="categoria-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#064232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          </div>
        ))}
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
        <div className="nav-item active" onClick={() => navigate('/categorias')}>
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
        <div className="nav-item" onClick={() => navigate('/favorites')}>
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

export default Categorias
