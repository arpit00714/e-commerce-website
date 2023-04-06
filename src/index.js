
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import CartProvider from './components/context/CartContext'
import App from './App'
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    
    <Router>

    <CartProvider>
      <App />
    </CartProvider>
    </Router>
)