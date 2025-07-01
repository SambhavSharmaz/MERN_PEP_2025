import { StrictMode } from 'react'
import reactDOM from 'react-dom/client'
import './index.css'
import App from './App1.jsx'

const rootDOM = document.getElementById('root');
const reactroot = reactDOM.createRoot(rootDOM);
reactroot.render(
  // <StrictMode>
    <App />
  // </StrictMode>,
)
