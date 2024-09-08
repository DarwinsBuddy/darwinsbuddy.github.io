import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Login } from './components/login/login.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Login>
      <App/>
    </Login>
  </StrictMode>,
)
