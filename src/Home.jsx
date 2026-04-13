import './Home.css'
import { useNavigate } from 'react-router-dom'
import frutasOferta from './assets/frutas_oferta.webp'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="home-container">
      {/* Header */}
      <header className="home-header">
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

      {/* Banner Ofertas */}
      <section className="banner-section">
        <div className="banner" style={{ backgroundImage: `url(${frutasOferta})` }}>
          <div className="banner-overlay"></div>
          <div className="banner-content">
            <h2>Ofertas<br />da<br />Semana</h2>
            <p>Produtos frescos colhidos hoje,<br />direto do produtor para sua<br />mesa com até 30% de<br />desconto.</p>
            <div className="banner-buttons">
              <button className="btn-offers" onClick={() => navigate('/ofertas')}>Ver<br />Ofertas</button>
              <button className="btn-more" onClick={() => navigate('/ofertas')}>Saiba<br />Mais</button>
            </div>
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="categories-section">
        <div className="section-header">
          <div>
            <span className="section-subtitle">NAVEGUE POR</span>
            <h3>Categorias</h3>
          </div>
          <a href="#" className="see-all">Ver todas →</a>
        </div>

        <div className="categories-grid">
          <div className="category-card" onClick={() => navigate('/categorias')}>
            <svg className="category-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#064232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
              <path d="M7 2v20"></path>
              <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path>
            </svg>
            <span className="category-label">Alimentos</span>
          </div>
          <div className="category-card" onClick={() => navigate('/categorias')}>
            <svg className="category-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#064232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
            </svg>
            <span className="category-label">Hortaliças</span>
          </div>
        </div>
      </section>

      {/* Busca */}
      <div className="search-container">
        <button className="search-btn" onClick={() => navigate('/busca')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </div>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <div className="nav-item active" onClick={() => navigate('/home')}>
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
        <div className="nav-item" onClick={() => navigate('/pedidos')}>
          <div className="nav-item-content">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
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

export default Home
