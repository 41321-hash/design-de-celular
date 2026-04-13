import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Ofertas from './Ofertas'
import Busca from './Busca'
import Categorias from './Categorias'
import CategoriaDetalhes from './CategoriaDetalhes'
import Favorites from './Favorites'
import Perfil from './Perfil'
import ProdutoDetalhes from './ProdutoDetalhes'
import CriarConta from './CriarConta'
import Lojas from './Lojas'
import { loginUser, initializeMockData } from './mockData'
import googleLogo from './assets/google-login.jpg'
import appleLogo from './assets/apple-login.jpg'

function LoginPage({ onLogin }) {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      if (!email || !password) {
        setError('Email e senha são obrigatórios')
        setLoading(false)
        return
      }

      // Validar contra o banco de dados
      const user = loginUser(email, password)
      
      if (user) {
        // Salvar usuário logado no localStorage
        localStorage.setItem('currentUser', JSON.stringify(user))
        onLogin()
      } else {
        setError('Email ou senha incorretos')
      }
    } catch (e) {
      console.error('Erro ao fazer login:', e)
      setError('Erro ao fazer login')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container-geral">
      <div className="login-card">
        <h1 className="logo">EMERALD HARVEST</h1>
        <p className="subtitle">Welcome back to the modern agrarian lifestyle.</p>
        
        {error && <div className="error-banner">{error}</div>}
        
        <form className="form-login" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>E-MAIL</label>
            <input 
              type="email"
              placeholder="julian@modernagrarian.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>

          <div className="input-group">
            <div className="label-row">
              <label>senha</label>
              <a href="#" className="forgot">esqueci minha senha</a>
            </div>
            <input 
              type="password"
              placeholder="************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
          </div>

          <button type="submit" className="btn-signin" disabled={loading}>
            {loading ? 'Conectando...' : 'Entrar'}
          </button>
        </form>

        <div className="divider">
          <span>ou continue com </span>
        </div>

        <div className="social-login">
          <button className="btn-social" type="button" disabled={loading}>
            <img src={googleLogo} alt="Google" className="logo-social" />
            GOOGLE
          </button>
          <button className="btn-social" type="button" disabled={loading}>
            <img src={appleLogo} alt="Apple" className="logo-social" />
            APPLE
          </button>
        </div>

        <p className="signup-text">
          Não tem uma conta? <button type="button" className="signup-btn" onClick={() => navigate('/criar-conta')}>Criar Conta</button>
        </p>
      </div>
    </div>
  )
}

function HomeRouter({ isLoggedIn, onLogin, onLogout }) {
  if (!isLoggedIn) {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={onLogin} />} />
        <Route path="/criar-conta" element={<CriarConta />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/ofertas" element={<Ofertas />} />
      <Route path="/busca" element={<Busca />} />
      <Route path="/categorias" element={<Categorias />} />
      <Route path="/categoria/:id" element={<CategoriaDetalhes />} />
      <Route path="/produto/:id" element={<ProdutoDetalhes />} />
      <Route path="/lojas" element={<Lojas />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/perfil" element={<Perfil onLogout={onLogout} />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  )
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('currentUser') !== null
  })

  useEffect(() => {
    // Inicializar dados mock
    initializeMockData()
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('currentUser')
    setIsLoggedIn(false)
  }

  return (
    <Router>
      <HomeRouter 
        isLoggedIn={isLoggedIn} 
        onLogin={() => setIsLoggedIn(true)}
        onLogout={handleLogout}
      />
    </Router>
  )
}

export default App