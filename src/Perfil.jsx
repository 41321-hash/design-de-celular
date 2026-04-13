import { useState, useEffect } from 'react'
import './Perfil.css'
import { useNavigate } from 'react-router-dom'

function Perfil({ onLogout }) {
  const navigate = useNavigate()
  const [showAddCard, setShowAddCard] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  return (
    <div className="perfil-container">
      {/* Header */}
      <header className="perfil-header">
        <button className="back-btn" onClick={() => navigate('/home')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#064232" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>
        <h1 className="header-title">Formas de Pagamento</h1>
        <button className="add-btn" onClick={onLogout} title="Sair">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
        </button>
      </header>

      <div className="perfil-content">
        
        {/* User Info Block */}
        <div className="user-profile-header">
          <div className="user-avatar-large">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
               <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="user-details">
            <h2>{user ? user.fullName : 'Julian Thorne'}</h2>
            <p>{user ? user.email : 'julian@modernagrarian.com'}</p>
          </div>
        </div>

        {/* Emerald Points Banner */}
        <div className="emerald-points-banner">
          <span className="points-label">Emerald Harvest Rewards</span>
          <div className="points-row">
            <span className="points-value">{user ? user.pontos : 0} Pontos</span>
            <span className="points-level">{user ? user.nivel : 'MEMBRO INICIANTE'}</span>
          </div>
        </div>

        {/* General Settings */}
        <div className="settings-list">
          <div className="settings-item">
            <div className="settings-item-title">Meus Pedidos</div>
            <div className="settings-item-arrow">→</div>
          </div>
          <div className="settings-item">
            <div className="settings-item-title">Endereços de Entrega</div>
            <div className="settings-item-arrow">→</div>
          </div>
        </div>

        <div style={{height: 20}}></div>

        {/* Security Banner */}
        <div className="security-card">
          <div className="security-icon-wrapper">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#064232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
             </svg>
          </div>
          <h3>SEGURANÇA EM PRIMEIRO LUGAR</h3>
          <p>Todas as suas informações de pagamento são criptografadas e armazenadas com segurança.</p>
        </div>

        {/* Saved Cards Section */}
        <div className="saved-cards-section">
          <h2>Cartões Salvos</h2>

          {/* Cartões limpos conforme solicitado - a tela agora está "zerada" */}
          {!showAddCard && (
            <div className="empty-cards" style={{textAlign: 'center', padding: '20px', color: '#999', fontSize: '14px'}}>
              Nenhum cartão cadastrado.
            </div>
          )}
        </div>

        {/* Add Button & Form */}
        {!showAddCard ? (
          <button className="btn-add-method" onClick={() => setShowAddCard(true)}>
             + Adicionar Nova Forma de Pagamento
          </button>
        ) : (
          <div className="add-card-form" style={{background: 'white', padding: '20px', borderRadius: '16px', border: '1px dashed #064232', marginBottom: '20px', animation: 'fadeIn 0.3s ease-out'}}>
            <h3 style={{fontSize: '16px', color: '#064232', marginBottom: '16px'}}>Novo Cartão</h3>
            
            <div className="input-group" style={{marginBottom: '16px'}}>
              <label style={{fontSize: '11px', fontWeight: '800', color: '#064232', display: 'block', marginBottom: '8px'}}>NÚMERO DO CARTÃO</label>
              <input type="text" placeholder="0000 0000 0000 0000" style={{width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #e0e0e0', outline: 'none', background: '#fbfdff', fontFamily: 'inherit', fontSize: '14px'}} />
            </div>

            <div style={{display: 'flex', gap: '12px', marginBottom: '16px'}}>
              <div className="input-group" style={{flex: 1}}>
                <label style={{fontSize: '11px', fontWeight: '800', color: '#064232', display: 'block', marginBottom: '8px'}}>VALIDADE</label>
                <input type="text" placeholder="MM/AA" style={{width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #e0e0e0', outline: 'none', background: '#fbfdff', fontFamily: 'inherit', fontSize: '14px'}} />
              </div>
              <div className="input-group" style={{flex: 1}}>
                <label style={{fontSize: '11px', fontWeight: '800', color: '#064232', display: 'block', marginBottom: '8px'}}>CÓDIGO - CVV</label>
                <input type="text" placeholder="123" style={{width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #e0e0e0', outline: 'none', background: '#fbfdff', fontFamily: 'inherit', fontSize: '14px'}} />
              </div>
            </div>

            <div className="input-group" style={{marginBottom: '24px'}}>
              <label style={{fontSize: '11px', fontWeight: '800', color: '#064232', display: 'block', marginBottom: '8px'}}>NOME DO TITULAR</label>
              <input type="text" placeholder="Como impresso no cartão" style={{width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #e0e0e0', outline: 'none', background: '#fbfdff', fontFamily: 'inherit', fontSize: '14px'}} />
            </div>

            <div style={{display: 'flex', gap: '10px'}}>
              <button style={{flex: 1, padding: '16px', borderRadius: '12px', border: 'none', background: '#064232', color: 'white', fontWeight: '800', fontSize: '14px', cursor: 'pointer'}} onClick={() => setShowAddCard(false)}>Salvar Cartão</button>
              <button style={{flex: 1, padding: '16px', borderRadius: '12px', border: '1.5px dashed #064232', background: 'transparent', color: '#064232', fontWeight: '800', fontSize: '14px', cursor: 'pointer'}} onClick={() => setShowAddCard(false)}>Cancelar</button>
            </div>
          </div>
        )}

      </div>

      {/* Bottom Navigation reused from Home */}
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
        <div className="nav-item" onClick={() => navigate('/categorias')}>
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
        <div className="nav-item active" onClick={() => navigate('/perfil')}>
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

export default Perfil
