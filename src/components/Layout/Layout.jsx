import React from 'react'
import { useLocation } from "react-router-dom";
import Routers from "../../routers/Routers";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { CartProvider } from 'react-use-cart';

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
        </>
    )
}

export default Layout
