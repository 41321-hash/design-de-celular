import './ProdutoDetalhes.css'
import { useNavigate } from 'react-router-dom'
import picanhaImg from './assets/picanha_premiu.jpeg'

function ProdutoDetalhes() {
  const navigate = useNavigate()

  return (
    <div className="produto-container">
      {/* Imagem de Fundo Completa */}
      <div className="produto-hero-bg" style={{ backgroundImage: `url(${picanhaImg})`, backgroundColor: '#2a3132' }}></div>
      <div className="produto-overlay"></div>

      {/* Header Transparente Flutuante */}
      <header className="produto-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#064232" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>
        <h1 className="header-title">Picanha Premium</h1>
        <div className="header-actions">
          <button className="icon-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#064232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          <button className="icon-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#064232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Conteúdo sobreposto na imagem */}
      <div className="produto-content-overlap">
        <div className="badge-tag">SELEÇÃO BLACK ANGUS</div>
        <div className="produto-title-row">
          <div className="produto-name-col">
            <h2 className="produto-title">Picanha</h2>
            <h2 className="produto-subtitle">Premium</h2>
          </div>
          <div className="produto-price-col">
            <span className="price-label">PREÇO SUGERIDO</span>
            <div className="price-value-container">
              <span className="price-currency">R$</span>
              <span className="price-value">149,90</span>
              <span className="price-unit">/kg</span>
            </div>
          </div>
        </div>

        {/* Info Box Branca */}
        <div className="info-box">
          <h3>Origem e Qualidade</h3>
          <p>
            Nossa Picanha Premium provém de gado Black Angus selecionado, criado em pastagens nativas do Rio Grande do Sul. O acabamento de gordura uniforme de 1cm é o ideal para garantir maciez e sabor inigualáveis no seu churrasco.
          </p>
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

export default ProdutoDetalhes
