import { useState } from 'react'
import './App.css'

export default function App() {
  const [email, setEmail] = useState('julian@modernagrarian.com')
  const [password, setPassword] = useState('')

  return (
    <main className="container">
      <section className="login-card">
        <h1 className="brand-title">EMERALD HARVEST</h1>
        <p className="subtitle">Welcome back to the modern agrarian lifestyle.</p>

        <form className="login-form">
          <div className="input-group">
            <label>EMAIL ADDRESS</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>

          <div className="input-group">
            <div className="label-row">
              <label>PASSWORD</label>
              <a href="#" className="forgot-link">FORGOT PASSWORD?</a>
            </div>
            <input 
              type="password" 
              placeholder="••••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn-signin">Sign In</button>
        </form>

        <div className="divider">
          <span>OR CONTINUE WITH</span>
        </div>

        <div className="social-login">
          <button className="btn-social">GOOGLE</button>
          <button className="btn-social">APPLE</button>
        </div>

        <p className="footer-text">
          Don't have an account? <a href="#">Create an Account</a>
        </p>
      </section>
    </main>
  )
}

