import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import { UtilityContextProvider } from './contexts/UtilityContext.jsx';
import './index.css'

import { Provider } from 'react-redux';
import store from './store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UtilityContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </UtilityContextProvider>
  </StrictMode>,
)
