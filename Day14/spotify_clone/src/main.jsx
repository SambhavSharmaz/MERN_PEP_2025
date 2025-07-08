import { StrictMode } from 'react'
import './index.css'
import {App} from './App.jsx'
import ReactDOM from "react-dom/client";
import { PlayerProvider } from "./PlayerContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PlayerProvider>
    <App />
  </PlayerProvider>
);
