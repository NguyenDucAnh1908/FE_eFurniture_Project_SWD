import React from 'react'
// import Shop from './pages/Shop'
import Shop from "../pages/Shop"
import Home from "../pages/Home"
import ProductDetail from '../pages/ProductDetail'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/product-detail' element={<ProductDetail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Routers
