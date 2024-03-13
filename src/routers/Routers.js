import React from 'react'
// import Shop from './pages/Shop'
import Shop from "../pages/Shop"
import Home from "../pages/Home"
import ProductDetail from '../pages/ProductDetail'
import Cart from '../pages/Cart'
import CheckOut from '../pages/CheckOut'
import Blog from '../pages/Blog'
import BlogDetail from '../pages/BlogDetail'
import MyProfile from '../pages/Account/MyProfile'
import AddressBook from '../pages/Account/AddressBook'
import TrackOrder from '../pages/Account/TrackOrder'
import MyOrder from '../pages/Account/MyOrder'
import Cancellation from '../pages/Account/Cancellation'
import PaymentOption from '../pages/Account/PaymentOption'
import Wishlist from '../pages/Account/Wishlist'
import AddressBookEdit from '../pages/Account/AddressBookEdit'
import CheckOutSuccess from '../components/CheckOutSuccess/CheckOutSuccess'
import Login from '../pages/Account/Login'
import Register from '../pages/Account/Register'
import NotFound from '../pages/NotFound'
import PrivateRounter from './PrivateRount/PrivateRounter'
import Test from '../pages/test'
import IndexProductDetail from '../components/ViewProductDetail/IndexProductDetail'
import ProjectBooking from '../pages/Account/ProjectBooking'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ProductByCategory from '../pages/Product/ProductByCategory'
import ProductByTag from '../pages/Product/ProductByTag'
import ProductByBrand from '../pages/Product/ProductByBrand'
import Design from '../pages/Design'
import DesignDetail from '../pages/DesignDetail'
import ThankYou from '../components/CheckOutSuccess/ThankYou'
import EditAddress from '../pages/Account/EditAddress'

function Routers() {

  return (
    <>
      {/* <BrowserRouter> */}
      <Routes>
        <Route path='/shop' element={<Shop />} />

        <Route path='/' element={<Home />} />

        <Route path='/login' element={<Login />} />

        <Route path='/register' element={<Register />} />

        <Route path='/product-detail/:id' element={<ProductDetail />} />

        <Route path='/cart' element={<Cart />} />

        {/* <Route path='/check-out' element={<CheckOut/>}/> */}

        {/* <Route path='/check-out/thank-you' element={<CheckOutSuccess />} /> */}

        <Route path='/blog' element={<Blog />} />

        <Route path='/design' element={<Design />} />

        <Route path='/design-detail/:id' element={<DesignDetail />} />

        <Route path='/blog-detail/:id' element={<BlogDetail />} />

        <Route path='/my-profile' element={<MyProfile />} />

        <Route path='/address-book' element={<AddressBook />} />

        <Route path='/my-order' element={<MyOrder />} />

        <Route path='/track-order' element={<TrackOrder />} />

        <Route path='/cancellation' element={<Cancellation />} />

        <Route path='/payment-option' element={<PaymentOption />} />

        <Route path='/product-category/:id' element={<ProductByCategory />} />

        <Route path='/product-tag' element={<ProductByTag />} />

        <Route path='/product-brand' element={<ProductByBrand />} />

        <Route path='/edit-address' element={<AddressBookEdit />} />

        <Route path='/view-list-projectbooking/:bookingId' element={<ProjectBooking />} />

        <Route path='*' element={<NotFound />} />

        <Route path='/wish-list' element={<Wishlist />} />
        
        <Route path='/edit-address-detail/:id' element={<EditAddress />} />


        {/* {user && user.isLoading ?

        
          
        } */}
         {/* <Route
          path="/thank" element={
            <PrivateRounter >
              <ThankYou />
            </PrivateRounter>

          }
        /> */}
         {/* <Route path='/thank' element={<ThankYou />} /> */}
        {/* <Route
          path="/check-out" element={
            <PrivateRounter >
              <CheckOut />
            </PrivateRounter>

          }
        /> */}
        <Route element={<PrivateRounter />}>
            <Route path='/check-out' element={<CheckOut />} />
            <Route path='/check-out/:id/thank-you' element={<CheckOutSuccess />} />
        </Route>
       
        
        {/* <Route
          path="/check-out/thank-you" element={
            <PrivateRounter >
              <CheckOutSuccess/>
            </PrivateRounter>
          }
        /> */}

        <Route path='/test' element={<Test />} />

        <Route exact path='/product-detail-test' element={<IndexProductDetail />} />

      </Routes>
      {/* </BrowserRouter> */}
    </>
  )
}

export default Routers