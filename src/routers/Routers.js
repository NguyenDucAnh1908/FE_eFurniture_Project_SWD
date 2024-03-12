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
import BookingForm from '../pages/BookingForm'
import Dashboard from '../pages/Account/Dashboard'
import Booking from '../pages/Account/Booking'
import ProjectBooking from '../pages/Account/ProjectBooking'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ProductByCategory from '../pages/Product/ProductByCategory'
import ProductByTag from '../pages/Product/ProductByTag'
import ProductByBrand from '../pages/Product/ProductByBrand'
import Design from '../pages/Design'
import DesignDetail from '../pages/DesignDetail'

function Routers() {

  return (
    <>
      {/* <BrowserRouter> */}
      <Routes>
        <Route path='/shop' element={<Shop />} />

        <Route path='/' element={<Home />} />

        <Route path='/login' element={<Login />} />

        <Route path='/product-detail/:id' element={<ProductDetail />} />

        <Route path='/cart' element={<Cart />} />

        {/* <Route path='/check-out' element={<CheckOut/>}/> */}

        <Route path='/check-out/thank-you' element={<CheckOutSuccess />} />

        <Route path='/blog' element={<Blog />} />

        <Route path='/blog-detail/:id' element={<BlogDetail />} />

        <Route path='/my-profile' element={<MyProfile />} />

        <Route path='/address-book' element={<AddressBook />} />

        <Route path='/my-order' element={<MyOrder />} />

        <Route path='/track-order' element={<TrackOrder />} />

        <Route path='/cancellation' element={<Cancellation />} />

        <Route path='/payment-option' element={<PaymentOption />} />

        <Route path='/wish-list' element={<Wishlist />} />

        <Route path='/edit-address' element={<AddressBookEdit />} />

        <Route path='/booking-form' element={<BookingForm />} />

        <Route path='/booking' element={<Booking />} />

        <Route path='/dashboard' element={<Dashboard />} />

        <Route path='/register' element={<Register />} />

        <Route path='/product-detail/:id' element={<ProductDetail />} />

        <Route path='/cart' element={<Cart />} />

        {/* <Route path='/check-out' element={<CheckOut/>}/> */}

        <Route path='/check-out/thank-you' element={<CheckOutSuccess />} />

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

        <Route path='/edit-address' element={<AddressBookEdit />} />

        <Route path='*' element={<NotFound />} />

        {/* {user && user.isLoading ?
          
        } */}
        <Route
          path="/check-out" element={
            <PrivateRounter >
              <CheckOut />
              <CheckOutSuccess/>
            </PrivateRounter>

          }
        />

        <Route path='/test' element={<Test />} />

        <Route exact path='/product-detail-test' element={<IndexProductDetail />} />

      </Routes>
      {/* </BrowserRouter> */}
    </>
  )
}

export default Routers