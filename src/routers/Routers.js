import React from 'react'
// import Shop from './pages/Shop'
import Shop from "../pages/Shop"
import Home from "../pages/Home"
import ProductDetail from '../pages/ProductDetail'
import Cart from '../pages/Cart'
import CheckOut from '../pages/CheckOut'
import Blog from '../pages/Blog'
import Test from '../pages/test'
import BlogDetail from '../pages/BlogDetail'
import MyProfile from '../pages/Account/MyProfile'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/product-detail/:id' element={<ProductDetail/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/check-out' element={<CheckOut/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/blog-detail' element={<BlogDetail/>}/>
        <Route path='/my-profile' element={<MyProfile/>}/>
        <Route path='/test' element={<Test/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Routers
