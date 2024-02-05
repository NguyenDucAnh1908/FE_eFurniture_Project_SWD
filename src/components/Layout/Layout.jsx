import React from 'react'
import { useLocation } from "react-router-dom";
import Routers from "../../routers/Routers";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
    //const location = useLocation();
    return (
        <>
            <Header />
            <div>
                <Routers />
            </div>
            <Footer />
        </>
    )
}

export default Layout
