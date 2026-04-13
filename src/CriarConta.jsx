import './CriarConta.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { registerUser } from './mockData'
import googleLogo from './assets/google-login.jpg'
import appleLogo from './assets/apple-login.jpg'

function CriarConta() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: ''
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Limpar erro do campo quando começar a digitar
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Nome é obrigatório'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório'
    }
    
    if (!formData.password) {
      newErrors.password = 'Senha é obrigatória'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Mínimo 8 caracteres'
    }
    
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length === 0) {
      setLoading(true)
      try {
        // Registrar usuário no banco de dados
        const result = registerUser(formData)
        
        if (result.error) {
          setErrors({ email: result.error })
        } else {
          // Conta criada com sucesso
          alert('Conta criada com sucesso! Faça login para continuar.')
          navigate('/login')
        }
      } catch (e) {
        console.error('Erro ao registrar:', e)
        setErrors({ general: 'Erro ao criar conta' })
      } finally {
        setLoading(false)
      }
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <div className="criar-conta-container">
      <div className="criar-conta-content">
        <h1 className="logo-text">Emerald Harvest</h1>
        
        <div className="header-section">
          <h2>Criar conta</h2>
          <p>Comece sua jornada editorial no mundo dos sabores orgânicos.</p>
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="form-group">
            <label>NOME COMPLETO</label>
            <input 
              type="text"
              name="fullName"
              placeholder="Como devemos chamar você?"
              value={formData.fullName}
              onChange={handleChange}
              className={errors.fullName ? 'input-error' : ''}
            />
            {errors.fullName && <span className="error-msg">{errors.fullName}</span>}
          </div>

          {/* Email */}
          <div className="form-group">
            <label>E-MAIL</label>
            <input 
              type="email"
              name="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <span className="error-msg">{errors.email}</span>}
          </div>

          {/* Phone */}
          <div className="form-group">
            <label>CELULAR</label>
            <input 
              type="tel"
              name="phone"
              placeholder="(00) 00000-0000"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? 'input-error' : ''}
            />
            {errors.phone && <span className="error-msg">{errors.phone}</span>}
          </div>

          {/* Password */}
          <div className="form-group">
            <label>SENHA</label>
            <input 
              type="password"
              name="password"
              placeholder="Mínimo 8 caracteres"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? 'input-error' : ''}
            />
            {errors.password && <span className="error-msg">{errors.password}</span>}
          </div>

          {/* Sign Up Button */}
          <button type="submit" className="btn-signup" disabled={loading}>
            {loading ? 'Criando Conta...' : 'Criar Conta'}
          </button>
        </form>

        {/* Divider */}
        <div className="divider">
          <span>OU CADASTRE-SE COM</span>
        </div>

        {/* Social Login */}
        <div className="social-login">
          <button type="button" className="social-btn google-btn">
            <img src={googleLogo} alt="Google" className="social-logo" />
            Google
          </button>
          <button type="button" className="social-btn apple-btn">
            <img src={appleLogo} alt="Apple" className="social-logo" />
            Apple
          </button>
        </div>

        {/* Login Link */}
        <div className="login-link">
          <p>Já tem uma conta? <button type="button" className="login-btn" onClick={() => navigate('/login')}>Entrar</button></p>
        </div>
      </div>
    </div>
  )
}

export default CriarConta
