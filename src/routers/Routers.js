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
import AddressBook from '../pages/Account/AddressBook'  
import TrackOrder from '../pages/Account/TrackOrder'
import MyOrder from '../pages/Account/MyOrder'
import Cancellation from '../pages/Account/Cancellation'
import PaymentOption from '../pages/Account/PaymentOption' 
import Wishlist from '../pages/Account/Wishlist'
import AddressAdd from '../pages/Account/AddAddress'

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

        <Route path='/address-book' element={<AddressBook/>}/>
        
        <Route path='/address-add' element={<AddressAdd/>}/>

        <Route path='/my-order' element={<MyOrder/>}/>

        <Route path='/track-order' element={<TrackOrder/>}/>

        <Route path='/cancellation' element={<Cancellation/>}/>

        <Route path='/payment-option' element={<PaymentOption/>}/>

        <Route path='/wish-list' element={<Wishlist/>}/>

        <Route path='/test' element={<Test/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Routers
