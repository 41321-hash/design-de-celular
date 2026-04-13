import './CategoriaDetalhes.css'
import { useNavigate } from 'react-router-dom'
import picanhaImg from './assets/picanha_premiu.jpeg'

function CategoriaDetalhes() {
  const navigate = useNavigate()

  return (
    <div className="categoria-container">
      {/* Header */}
      <header className="categoria-header">
        <div className="delivery-info">
          <svg className="location-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#064232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span className="delivery-text">Entregar em: Av. Paulista, 1000</span>
          <button className="cart-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#064232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Titulo da Categoria */}
      <div className="categoria-title-section">
        <span className="categoria-subtitle">SELEÇÃO PREMIUM</span>
        <h1 className="categoria-title">Carnes</h1>
        <button className="filter-btn">
          <svg className="filter-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="21" x2="4" y2="14"></line>
            <line x1="4" y1="10" x2="4" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12" y2="3"></line>
            <line x1="20" y1="21" x2="20" y2="16"></line>
            <line x1="20" y1="12" x2="20" y2="3"></line>
            <line x1="1" y1="14" x2="7" y2="14"></line>
            <line x1="9" y1="8" x2="15" y2="8"></line>
            <line x1="17" y1="16" x2="23" y2="16"></line>
          </svg>
          Filtros & Ordenação
        </button>
      </div>

      {/* Lista de Produtos (Mock idêntico a imagem) */}
      <div className="products-list">
        <div className="product-card" onClick={() => navigate('/produto/1')}>
          <div className="product-image-container">
            <div className="product-image-placeholder" style={{ backgroundImage: `url(${picanhaImg})`, backgroundColor: '#2a3132' }}></div>
            <span className="destaque-badge">DESTAQUE DA SEMANA</span>
          </div>
          <div className="product-info">
            <div className="product-title-outline">
              <h3>Picanha Premium</h3>
            </div>
            <p>Corte extremamente macio com capa de gordura uniforme, ideal para churrasco.</p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <div className="nav-item" onClick={() => navigate('/home')}>
          <div className="nav-item-content">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span>INÍCIO</span>
          </div>
        </div>
        <div className="nav-item active" onClick={() => navigate('/categorias')}>
          <div className="nav-item-content">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            <span>CATEGORIAS</span>
          </div>
        </div>
        <div className="nav-item" onClick={() => navigate('/pedidos')}>
          <div className="nav-item-content">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

export default CategoriaDetalhes
