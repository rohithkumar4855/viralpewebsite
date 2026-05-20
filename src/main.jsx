import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Container from './layout/Container.jsx'

import './globals.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Container>
        <Navbar />
        <App />
        <Footer />
      </Container>
    </BrowserRouter>
  </StrictMode>,
)