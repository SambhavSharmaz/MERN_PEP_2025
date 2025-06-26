import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {App} from './App'
import App1 from './App1'
import App2 from './App2'
import App3 from './App3'
import App4 from './App4'

const rootDOM = document.getElementById('root')
const reactroot = ReactDOM.createRoot(rootDOM)

reactroot.render(
  <StrictMode>
    {/* <App /> */}
    {/* <App1/> */}
    {/* <App2/> */}
    {/* <App3/> */}
    <App4/>
  </StrictMode>,
)
