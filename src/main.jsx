import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import Download from './Download.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ParallaxProvider>
          <Router>
              <Routes>
                  <Route path="/" element={<App />} />
                  <Route path="/download" element={<Download />} />
              </Routes>
          </Router>
      </ParallaxProvider>
  </StrictMode>,
)
