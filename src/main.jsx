import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';

import './index.css'
import App from './App.jsx'
import Download from './Download.jsx'
import Security from './Security.jsx'

createRoot(document.getElementById('root')).render(
    <HelmetProvider>
        <StrictMode>
            <ParallaxProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<App />} />
                        <Route path="/download" element={<Download />} />
                        <Route path="/security" element={<Security />} />
                    </Routes>
                </Router>
            </ParallaxProvider>
        </StrictMode>
    </HelmetProvider>
)
