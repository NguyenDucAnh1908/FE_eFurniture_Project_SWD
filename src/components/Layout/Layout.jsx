import React from 'react'
import { useLocation } from "react-router-dom";
import Routers from "../../routers/Routers";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { CartProvider } from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
    //const location = useLocation();
    return (
        <>
            <CartProvider>
                <Header />
                <div>
                    <Routers />
                </div>

                <Footer />
            </CartProvider>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />
        </>
    )
}

export default Layout
