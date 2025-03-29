import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Views/App.tsx'

import './assets/css/App.css'

import './assets/css/styles_default.css'
import './assets/css/tailwind_output.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
