import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextoProvider } from './context/MiContexto.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextoProvider>
      <App />
    </ContextoProvider>
  </StrictMode>,
)
