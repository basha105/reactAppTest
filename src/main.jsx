import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Life from './Greeting.jsx';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Life />
  </StrictMode>,
)
