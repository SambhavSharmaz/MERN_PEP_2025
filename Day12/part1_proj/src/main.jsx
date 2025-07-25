import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const rootDOM = document.getElementById('root')
const reactroot = ReactDOM.createRoot(rootDOM)

reactroot.render(
  <StrictMode>
    <App />
  </StrictMode>
)
