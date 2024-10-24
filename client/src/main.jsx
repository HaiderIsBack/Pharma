import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import { UtilityContextProvider } from './contexts/UtilityContext.jsx';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UtilityContextProvider>
      <App />
    </UtilityContextProvider>
  </StrictMode>,
)
