import './Lojas.css'
import { useNavigate } from 'react-router-dom'
import { getStoreLocations } from './mockData'

function Lojas() {
  const navigate = useNavigate()
  const lojas = getStoreLocations()

  return (
    <div className="lojas-container">
      <header className="lojas-header">
        <button className="back-btn" onClick={() => navigate('/home')}>←</button>
        <h1>Nossas Lojas</h1>
        <button className="search-btn">🔍</button>
      </header>

      <div className="lojas-intro">
        <p>Visite nossas lojas e conheça produtos frescos colhidos diariamente</p>
      </div>

      <div className="lojas-grid">
        {lojas.map(loja => (
          <div key={loja.id} className="loja-card">
            <div className="loja-image">{loja.image}</div>
            {loja.featured && <span className="loja-badge">DESTAQUE</span>}
            
            <div className="loja-content">
              <h3>{loja.name}</h3>
              
              <div className="loja-info">
                <p className="loja-address">
                  <span className="info-icon">📍</span>
                  {loja.address}
                </p>
                
                <p className="loja-city">{loja.city}</p>
                
                <p className="loja-phone">
                  <span className="info-icon">📞</span>
                  {loja.phone}
                </p>
                
                <p className="loja-hours">
                  <span className="info-icon">🕐</span>
                  {loja.hours}
                </p>
              </div>

              <button 
                className="loja-btn"
                onClick={() => navigate(`/loja/${loja.id}`)}
              >
                Ver Detalhes
              </button>
            </div>
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

export default Lojas
