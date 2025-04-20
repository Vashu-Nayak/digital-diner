import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Menu from './components/Menu'
import OrderConfirmation from './components/OrderConfirmation'
import OrderHistory from './components/OrderHistory'


function App() {

  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<OrderConfirmation />} />
        <Route path="/history" element={<OrderHistory />} />
      </Routes>
      
    </div>
  )
}

export default App
