import React, { Component } from 'react'
import Slider from "react-slick";

function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    
    return (
        <div>
            {/* <div className="preloader is-active">
                <div className="preloader__wrap">

                    <img className="preloader__img" src="images/preloader.png" alt="" /></div>
            </div> */}
            {/* Hello */}
            <div id="app">
              {/*====== Main Header ======*/}
              <header className="header--style-1">

{/*====== Nav 1 ======*/}
<nav className="primary-nav primary-nav-wrapper--border">
    <div className="container">

        {/*====== Primary Nav ======*/}
        <div className="primary-nav">

            {/*====== Main Logo ======*/}

            <a className="main-logo" href="#index.html">

                <img src="images/logo/logo-1.png" alt=""/></a>
            {/*====== End - Main Logo ======*/}


            {/*====== Search Form ======*/}
            <form className="main-form">

                <label for="main-search"></label>

                <input className="input-text input-text--border-radius input-text--style-1" type="text" id="main-search" placeholder="Search"/>

                <button className="btn btn--icon fas fa-search main-search-button" type="submit"></button></form>
            {/*====== End - Search Form ======*/}


            {/*====== Dropdown Main plugin ======*/}
            <div className="menu-init" id="navigation">

                <button className="btn btn--icon toggle-button toggle-button--secondary fas fa-cogs" type="button"></button>

                {/*====== Menu ======*/}
                <div className="ah-lg-mode">

                    <span className="ah-close">✕ Close</span>

                    {/*====== List ======*/}
                    <ul className="ah-list ah-list--design1 ah-list--link-color-secondary">
                        <li className="has-dropdown" data-tooltip="tooltip" data-placement="left" title="Account">

                            <a><i className="far fa-user-circle"></i></a>

                            {/*====== Dropdown ======*/}

                            <span className="js-menu-toggle"></span>
                            <ul style={{ width: "120px" }}>
                                <li>

                                    <a href="#dashboard.html"><i className="fas fa-user-circle u-s-m-r-6"></i>

                                        <span>Account</span></a></li>
                                <li>

                                    <a href="#signup.html"><i className="fas fa-user-plus u-s-m-r-6"></i>

                                        <span>Signup</span></a></li>
                                <li>

                                    <a href="#signin.html"><i className="fas fa-lock u-s-m-r-6"></i>

                                        <span>Signin</span></a></li>
                                <li>

                                    <a href="#signup.html"><i className="fas fa-lock-open u-s-m-r-6"></i>

                                        <span>Signout</span></a></li>
                            </ul>
                            {/*====== End - Dropdown ======*/}
                        </li>
                        <li className="has-dropdown" data-tooltip="tooltip" data-placement="left" title="Settings">

                            <a><i className="fas fa-user-cog"></i></a>

                            {/*====== Dropdown ======*/}

                            <span className="js-menu-toggle"></span>
                            <ul style={{ width: "120px" }}>
                                <li className="has-dropdown has-dropdown--ul-right-100">

                                    <a>Language<i className="fas fa-angle-down u-s-m-l-6"></i></a>

                                    {/*====== Dropdown ======*/}

                                    <span className="js-menu-toggle"></span>
                                    <ul style={{ width: "120px" }}>
                                        <li>

                                            <a className="u-c-brand">ENGLISH</a></li>
                                        <li>

                                            <a>ARABIC</a></li>
                                        <li>

                                            <a>FRANCAIS</a></li>
                                        <li>

                                            <a>ESPANOL</a></li>
                                    </ul>
                                    {/*====== End - Dropdown ======*/}
                                </li>
                                <li className="has-dropdown has-dropdown--ul-right-100">

                                    <a>Currency<i className="fas fa-angle-down u-s-m-l-6"></i></a>

                                    {/*====== Dropdown ======*/}

                                    <span className="js-menu-toggle"></span>
                                    <ul style={{ width: "225px" }}>
                                        <li>

                                            <a className="u-c-brand">$ - US DOLLAR</a></li>
                                        <li>

                                            <a>£ - BRITISH POUND STERLING</a></li>
                                        <li>

                                            <a>€ - EURO</a></li>
                                    </ul>
                                    {/*====== End - Dropdown ======*/}
                                </li>
                            </ul>
                            {/*====== End - Dropdown ======*/}
                        </li>
                        <li data-tooltip="tooltip" data-placement="left" title="Contact">

                            <a href="#tel:+0900901904"><i className="fas fa-phone-volume"></i></a></li>
                        <li data-tooltip="tooltip" data-placement="left" title="Mail">

                            <a href="#mailto:contact@domain.com"><i className="far fa-envelope"></i></a></li>
                    </ul>
                    {/*====== End - List ======*/}
                </div>
                {/*====== End - Menu ======*/}
            </div>
            {/*====== End - Dropdown Main plugin ======*/}
        </div>
        {/*====== End - Primary Nav ======*/}
    </div>
</nav>
{/*====== End - Nav 1 ======*/}


{/*====== Nav 2 ======*/}
<nav className="secondary-nav-wrapper">
    <div className="container">

        {/*====== Secondary Nav ======*/}
        <div className="secondary-nav">

            {/*====== Dropdown Main plugin ======*/}
            <div className="menu-init" id="navigation1">

                <button className="btn btn--icon toggle-mega-text toggle-button" type="button">M</button>

                {/*====== Menu ======*/}
                <div className="ah-lg-mode">

                    <span className="ah-close">✕ Close</span>

                    {/*====== List ======*/}
                    <ul className="ah-list">
                        <li className="has-dropdown">

                            <span className="mega-text">M</span>

                            {/*====== Mega Menu ======*/}

                            <span className="js-menu-toggle"></span>
                            <div className="mega-menu">
                                <div className="mega-menu-wrap">
                                    <div className="mega-menu-list">
                                        <ul>
                                            <li className="js-active">

                                                <a href="#shop-side-version-2.html"><i className="fas fa-tv u-s-m-r-6"></i>

                                                    <span>Electronics</span></a>

                                                <span className="js-menu-toggle js-toggle-mark"></span></li>
                                            <li>

                                                <a href="#shop-side-version-2.html"><i className="fas fa-female u-s-m-r-6"></i>

                                                    <span>Women's Clothing</span></a>

                                                <span className="js-menu-toggle"></span></li>
                                            <li>

                                                <a href="#shop-side-version-2.html"><i className="fas fa-male u-s-m-r-6"></i>

                                                    <span>Men's Clothing</span></a>

                                                <span className="js-menu-toggle"></span></li>
                                            <li>

                                                <a href="#index.html"><i className="fas fa-utensils u-s-m-r-6"></i>

                                                    <span>Food & Supplies</span></a>

                                                <span className="js-menu-toggle"></span></li>
                                            <li>

                                                <a href="#index.html"><i className="fas fa-couch u-s-m-r-6"></i>

                                                    <span>Furniture & Decor</span></a>

                                                <span className="js-menu-toggle"></span></li>
                                            <li>

                                                <a href="#index.html"><i className="fas fa-football-ball u-s-m-r-6"></i>

                                                    <span>Sports & Game</span></a>

                                                <span className="js-menu-toggle"></span></li>
                                            <li>

                                                <a href="#index.html"><i className="fas fa-heartbeat u-s-m-r-6"></i>

                                                    <span>Beauty & Health</span></a>

                                                <span className="js-menu-toggle"></span></li>
                                        </ul>
                                    </div>

                                    {/*====== Electronics ======*/}
                                    <div className="mega-menu-content js-active">

                                        {/*====== Mega Menu Row ======*/}
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <ul>
                                                    <li className="mega-list-title">

                                                        <a href="#shop-side-version-2.html">3D PRINTER & SUPPLIES</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">3d Printer</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">3d Printing Pen</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">3d Printing Accessories</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">3d Printer Module Board</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-3">
                                                <ul>
                                                    <li className="mega-list-title">

                                                        <a href="#shop-side-version-2.html">HOME AUDIO & VIDEO</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">TV Boxes</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">TC Receiver & Accessories</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Display Dongle</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Home Theater System</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-3">
                                                <ul>
                                                    <li className="mega-list-title">

                                                        <a href="#shop-side-version-2.html">MEDIA PLAYERS</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Earphones</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Mp3 Players</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Speakers & Radios</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Microphones</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-3">
                                                <ul>
                                                    <li className="mega-list-title">

                                                        <a href="#shop-side-version-2.html">VIDEO GAME ACCESSORIES</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Nintendo Video Games Accessories</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Sony Video Games Accessories</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Xbox Video Games Accessories</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/*====== End - Mega Menu Row ======*/}
                                        <br/>

                                        {/*====== Mega Menu Row ======*/}
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <ul>
                                                    <li className="mega-list-title">

                                                        <a href="#shop-side-version-2.html">SECURITY & PROTECTION</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Security Cameras</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Alarm System</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Security Gadgets</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">CCTV Security & Accessories</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-3">
                                                <ul>
                                                    <li className="mega-list-title">

                                                        <a href="#shop-side-version-2.html">PHOTOGRAPHY & CAMERA</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Digital Cameras</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Sport Camera & Accessories</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Camera Accessories</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Lenses & Accessories</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-3">
                                                <ul>
                                                    <li className="mega-list-title">

                                                        <a href="#shop-side-version-2.html">ARDUINO COMPATIBLE</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Raspberry Pi & Orange Pi</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Module Board</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Smart Robot</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Board Kits</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-3">
                                                <ul>
                                                    <li className="mega-list-title">

                                                        <a href="#shop-side-version-2.html">DSLR Camera</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Nikon Cameras</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Canon Camera</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Sony Camera</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">DSLR Lenses</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/*====== End - Mega Menu Row ======*/}
                                        <br/>

                                        {/*====== Mega Menu Row ======*/}
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <ul>
                                                    <li className="mega-list-title">

                                                        <a href="#shop-side-version-2.html">NECESSARY ACCESSORIES</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Flash Cards</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Memory Cards</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Flash Pins</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Compact Discs</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-9 mega-image">
                                                <div className="mega-banner">

                                                    <a className="u-d-block" href="#shop-side-version-2.html">

                                                        <img className="u-img-fluid u-d-block" src="images/banners/banner-mega-0.jpg" alt=""/></a></div>
                                            </div>
                                        </div>
                                        {/*====== End - Mega Menu Row ======*/}
                                    </div>
                                    {/*====== End - Electronics ======*/}


                                    {/*====== Women ======*/}
                                    <div className="mega-menu-content">

                                        {/*====== Mega Menu Row ======*/}
                                        <div className="row">
                                            <div className="col-lg-6 mega-image">
                                                <div className="mega-banner">

                                                    <a className="u-d-block" href="#shop-side-version-2.html">

                                                        <img className="u-img-fluid u-d-block" src="images/banners/banner-mega-1.jpg" alt=""/></a></div>
                                            </div>
                                            <div className="col-lg-6 mega-image">
                                                <div className="mega-banner">

                                                    <a className="u-d-block" href="#shop-side-version-2.html">

                                                        <img className="u-img-fluid u-d-block" src="images/banners/banner-mega-2.jpg" alt=""/></a></div>
                                            </div>
                                        </div>
                                        {/*====== End - Mega Menu Row ======*/}
                                        <br/>

                                        {/*====== Mega Menu Row ======*/}
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <ul>
                                                    <li className="mega-list-title">

                                                        <a href="#shop-side-version-2.html">HOT CATEGORIES</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Dresses</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Blouses & Shirts</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">T-shirts</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Rompers</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-3">
                                                <ul>
                                                    <li className="mega-list-title">

                                                        <a href="#shop-side-version-2.html">INTIMATES</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Bras</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Brief Sets</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Bustiers & Corsets</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Panties</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-3">
                                                <ul>
                                                    <li className="mega-list-title">

                                                        <a href="#shop-side-version-2.html">WEDDING & EVENTS</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Wedding Dresses</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Evening Dresses</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Prom Dresses</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Flower Dresses</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-3">
                                                <ul>
                                                    <li className="mega-list-title">

                                                        <a href="#shop-side-version-2.html">BOTTOMS</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Skirts</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Shorts</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Leggings</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Jeans</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/*====== End - Mega Menu Row ======*/}
                                        <br/>

                                        {/*====== Mega Menu Row ======*/}
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <ul>
                                                    <li className="mega-list-title">

                                                        <a href="#shop-side-version-2.html">OUTWEAR</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Blazers</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Basics Jackets</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Trench</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Leather & Suede</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-3">
                                                <ul>
                                                    <li className="mega-list-title">

                                                        <a href="#shop-side-version-2.html">JACKETS</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Denim Jackets</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Trucker Jackets</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Windbreaker Jackets</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Leather Jackets</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-3">
                                                <ul>
                                                    <li className="mega-list-title">

                                                        <a href="#shop-side-version-2.html">ACCESSORIES</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Tech Accessories</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Headwear</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Baseball Caps</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Belts</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-3">
                                                <ul>
                                                    <li className="mega-list-title">

                                                        <a href="#shop-side-version-2.html">OTHER ACCESSORIES</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Bags</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Wallets</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Watches</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Sunglasses</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/*====== End - Mega Menu Row ======*/}
                                        <br/>

                                        {/*====== Mega Menu Row ======*/}
                                        <div className="row">
                                            <div className="col-lg-9 mega-image">
                                                <div className="mega-banner">

                                                    <a className="u-d-block" href="#shop-side-version-2.html">

                                                        <img className="u-img-fluid u-d-block" src="images/banners/banner-mega-3.jpg" alt=""/></a></div>
                                            </div>
                                            <div className="col-lg-3 mega-image">
                                                <div className="mega-banner">

                                                    <a className="u-d-block" href="#shop-side-version-2.html">

                                                        <img className="u-img-fluid u-d-block" src="images/banners/banner-mega-4.jpg" alt=""/></a></div>
                                            </div>
                                        </div>
                                        {/*====== End - Mega Menu Row ======*/}
                                    </div>
                                    {/*====== End - Women ======*/}


                                    {/*====== Men ======*/}
                                    <div className="mega-menu-content">

                                        {/*====== Mega Menu Row ======*/}
                                        <div className="row">
                                            <div className="col-lg-4 mega-image">
                                                <div className="mega-banner">

                                                    <a className="u-d-block" href="#shop-side-version-2.html">

                                                        <img className="u-img-fluid u-d-block" src="images/banners/banner-mega-5.jpg" alt=""/></a></div>
                                            </div>
                                            <div className="col-lg-4 mega-image">
                                                <div className="mega-banner">

                                                    <a className="u-d-block" href="#shop-side-version-2.html">

                                                        <img className="u-img-fluid u-d-block" src="images/banners/banner-mega-6.jpg" alt=""/></a></div>
                                            </div>
                                            <div className="col-lg-4 mega-image">
                                                <div className="mega-banner">

                                                    <a className="u-d-block" href="#shop-side-version-2.html">

                                                        <img className="u-img-fluid u-d-block" src="images/banners/banner-mega-7.jpg" alt=""/></a></div>
                                            </div>
                                        </div>
                                        {/*====== End - Mega Menu Row ======*/}
                                        <br/>

                                        {/*====== Mega Menu Row ======*/}
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <ul>
                                                    <li className="mega-list-title">

                                                        <a href="#shop-side-version-2.html">HOT SALE</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">T-Shirts</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Tank Tops</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Polo</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Shirts</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-3">
                                                <ul>
                                                    <li className="mega-list-title">

                                                        <a href="#shop-side-version-2.html">OUTWEAR</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Hoodies</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Trench</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Parkas</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Sweaters</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-3">
                                                <ul>
                                                    <li className="mega-list-title">

                                                        <a href="#shop-side-version-2.html">BOTTOMS</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Casual Pants</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Cargo Pants</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Jeans</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Shorts</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-3">
                                                <ul>
                                                    <li className="mega-list-title">

                                                        <a href="#shop-side-version-2.html">UNDERWEAR</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Boxers</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Briefs</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Robes</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Socks</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/*====== End - Mega Menu Row ======*/}
                                        <br/>

                                        {/*====== Mega Menu Row ======*/}
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <ul>
                                                    <li className="mega-list-title">

                                                        <a href="#shop-side-version-2.html">JACKETS</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Denim Jackets</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Trucker Jackets</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Windbreaker Jackets</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Leather Jackets</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-3">
                                                <ul>
                                                    <li className="mega-list-title">

                                                        <a href="#shop-side-version-2.html">SUNGLASSES</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Pilot</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Wayfarer</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Square</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Round</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-3">
                                                <ul>
                                                    <li className="mega-list-title">

                                                        <a href="#shop-side-version-2.html">ACCESSORIES</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Eyewear Frames</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Scarves</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Hats</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Belts</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-3">
                                                <ul>
                                                    <li className="mega-list-title">

                                                        <a href="#shop-side-version-2.html">OTHER ACCESSORIES</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Bags</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Wallets</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Watches</a></li>
                                                    <li>

                                                        <a href="#shop-side-version-2.html">Tech Accessories</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/*====== End - Mega Menu Row ======*/}
                                        <br/>

                                        {/*====== Mega Menu Row ======*/}
                                        <div className="row">
                                            <div className="col-lg-6 mega-image">
                                                <div className="mega-banner">

                                                    <a className="u-d-block" href="#shop-side-version-2.html">

                                                        <img className="u-img-fluid u-d-block" src="images/banners/banner-mega-8.jpg" alt=""/></a></div>
                                            </div>
                                            <div className="col-lg-6 mega-image">
                                                <div className="mega-banner">

                                                    <a className="u-d-block" href="#shop-side-version-2.html">

                                                        <img className="u-img-fluid u-d-block" src="images/banners/banner-mega-9.jpg" alt=""/></a></div>
                                            </div>
                                        </div>
                                        {/*====== End - Mega Menu Row ======*/}
                                    </div>
                                    {/*====== End - Men ======*/}


                                    {/*====== No Sub Categories ======*/}
                                    <div className="mega-menu-content">
                                        <h5>No Categories</h5>
                                    </div>
                                    {/*====== End - No Sub Categories ======*/}


                                    {/*====== No Sub Categories ======*/}
                                    <div className="mega-menu-content">
                                        <h5>No Categories</h5>
                                    </div>
                                    {/*====== End - No Sub Categories ======*/}


                                    {/*====== No Sub Categories ======*/}
                                    <div className="mega-menu-content">
                                        <h5>No Categories</h5>
                                    </div>
                                    {/*====== End - No Sub Categories ======*/}


                                    {/*====== No Sub Categories ======*/}
                                    <div className="mega-menu-content">
                                        <h5>No Categories</h5>
                                    </div>
                                    {/*====== End - No Sub Categories ======*/}
                                </div>
                            </div>
                            {/*====== End - Mega Menu ======*/}
                        </li>
                    </ul>
                    {/*====== End - List ======*/}
                </div>
                {/*====== End - Menu ======*/}
            </div>
            {/*====== End - Dropdown Main plugin ======*/}


            {/*====== Dropdown Main plugin ======*/}
            <div className="menu-init" id="navigation2">

                <button className="btn btn--icon toggle-button toggle-button--secondary fas fa-cog" type="button"></button>

                {/*====== Menu ======*/}
                <div className="ah-lg-mode">

                    <span className="ah-close">✕ Close</span>

                    {/*====== List ======*/}
                    <ul className="ah-list ah-list--design2 ah-list--link-color-secondary">
                        <li>

                            <a href="#shop-side-version-2.html">NEW ARRIVALS</a></li>
                        <li className="has-dropdown">

                            <a>PAGES<i className="fas fa-angle-down u-s-m-l-6"></i></a>

                            {/*====== Dropdown ======*/}

                            <span className="js-menu-toggle"></span>
                            <ul style={{ width: "170px" }}>
                                <li className="has-dropdown has-dropdown--ul-left-100">

                                    <a>Home<i className="fas fa-angle-down i-state-right u-s-m-l-6"></i></a>

                                    {/*====== Dropdown ======*/}

                                    <span className="js-menu-toggle"></span>
                                    <ul style={{ width: "118px" }}>
                                        <li>

                                            <a href="#index.html">Home 1</a></li>
                                        <li>

                                            <a href="#index-2.html">Home 2</a></li>
                                        <li>

                                            <a href="#index-3.html">Home 3</a></li>
                                    </ul>
                                    {/*====== End - Dropdown ======*/}
                                </li>
                                <li className="has-dropdown has-dropdown--ul-left-100">

                                    <a>Account<i className="fas fa-angle-down i-state-right u-s-m-l-6"></i></a>

                                    {/*====== Dropdown ======*/}

                                    <span className="js-menu-toggle"></span>
                                    <ul style={{ width: "200px" }}>
                                        <li>

                                            <a href="#signin.html">Signin / Already Registered</a></li>
                                        <li>

                                            <a href="#signup.html">Signup / Register</a></li>
                                        <li>

                                            <a href="#lost-password.html">Lost Password</a></li>
                                    </ul>
                                    {/*====== End - Dropdown ======*/}
                                </li>
                                <li className="has-dropdown has-dropdown--ul-left-100">

                                    <a href="#dashboard.html">Dashboard<i className="fas fa-angle-down i-state-right u-s-m-l-6"></i></a>

                                    {/*====== Dropdown ======*/}

                                    <span className="js-menu-toggle"></span>
                                    <ul style={{ width: "200px" }}>
                                        <li className="has-dropdown has-dropdown--ul-left-100">

                                            <a href="#dashboard.html">Manage My Account<i className="fas fa-angle-down i-state-right u-s-m-l-6"></i></a>

                                            {/*====== Dropdown ======*/}

                                            <span className="js-menu-toggle"></span>
                                            <ul style={{ width: "180px" }}>
                                                <li>

                                                    <a href="#dash-edit-profile.html">Edit Profile</a></li>
                                                <li>

                                                    <a href="#dash-address-book.html">Edit Address Book</a></li>
                                                <li>

                                                    <a href="#dash-manage-order.html">Manage Order</a></li>
                                            </ul>
                                            {/*====== End - Dropdown ======*/}
                                        </li>
                                        <li>

                                            <a href="#dash-my-profile.html">My Profile</a></li>
                                        <li className="has-dropdown has-dropdown--ul-left-100">

                                            <a href="#dash-address-book.html">Address Book<i className="fas fa-angle-down i-state-right u-s-m-l-6"></i></a>

                                            {/*====== Dropdown ======*/}

                                            <span className="js-menu-toggle"></span>
                                            <ul style={{ width: "180px" }}>
                                                <li>

                                                    <a href="#dash-address-make-default.html">Address Make Default</a></li>
                                                <li>

                                                    <a href="#dash-address-add.html">Add New Address</a></li>
                                                <li>

                                                    <a href="#dash-address-edit.html">Edit Address Book</a></li>
                                            </ul>
                                            {/*====== End - Dropdown ======*/}
                                        </li>
                                        <li>

                                            <a href="#dash-track-order.html">Track Order</a></li>
                                        <li>

                                            <a href="#dash-my-order.html">My Orders</a></li>
                                        <li>

                                            <a href="#dash-payment-option.html">My Payment Options</a></li>
                                        <li>

                                            <a href="#dash-cancellation.html">My Returns & Cancellations</a></li>
                                    </ul>
                                    {/*====== End - Dropdown ======*/}
                                </li>
                                <li className="has-dropdown has-dropdown--ul-left-100">

                                    <a>Empty<i className="fas fa-angle-down i-state-right u-s-m-l-6"></i></a>

                                    {/*====== Dropdown ======*/}

                                    <span className="js-menu-toggle"></span>
                                    <ul style={{ width: "200px" }}>
                                        <li>

                                            <a href="#empty-search.html">Empty Search</a></li>
                                        <li>

                                            <a href="#empty-cart.html">Empty Cart</a></li>
                                        <li>

                                            <a href="#empty-wishlist.html">Empty Wishlist</a></li>
                                    </ul>
                                    {/*====== End - Dropdown ======*/}
                                </li>
                                <li className="has-dropdown has-dropdown--ul-left-100">

                                    <a>Product Details<i className="fas fa-angle-down i-state-right u-s-m-l-6"></i></a>

                                    {/*====== Dropdown ======*/}

                                    <span className="js-menu-toggle"></span>
                                    <ul style={{ width: "200px" }}>
                                        <li>

                                            <a href="#product-detail.html">Product Details</a></li>
                                        <li>

                                            <a href="#product-detail-variable.html">Product Details Variable</a></li>
                                        <li>

                                            <a href="#product-detail-affiliate.html">Product Details Affiliate</a></li>
                                    </ul>
                                    {/*====== End - Dropdown ======*/}
                                </li>
                                <li className="has-dropdown has-dropdown--ul-left-100">

                                    <a>Shop Grid Layout<i className="fas fa-angle-down i-state-right u-s-m-l-6"></i></a>

                                    {/*====== Dropdown ======*/}

                                    <span className="js-menu-toggle"></span>
                                    <ul style={{ width: "200px" }}>
                                        <li>

                                            <a href="#shop-grid-left.html">Shop Grid Left Sidebar</a></li>
                                        <li>

                                            <a href="#shop-grid-right.html">Shop Grid Right Sidebar</a></li>
                                        <li>

                                            <a href="#shop-grid-full.html">Shop Grid Full Width</a></li>
                                        <li>

                                            <a href="#shop-side-version-2.html">Shop Side Version 2</a></li>
                                    </ul>
                                    {/*====== End - Dropdown ======*/}
                                </li>
                                <li className="has-dropdown has-dropdown--ul-left-100">

                                    <a>Shop List Layout<i className="fas fa-angle-down i-state-right u-s-m-l-6"></i></a>

                                    {/*====== Dropdown ======*/}

                                    <span className="js-menu-toggle"></span>
                                    <ul style={{ width: "200px" }}>
                                        <li>

                                            <a href="#shop-list-left.html">Shop List Left Sidebar</a></li>
                                        <li>

                                            <a href="#shop-list-right.html">Shop List Right Sidebar</a></li>
                                        <li>

                                            <a href="#shop-list-full.html">Shop List Full Width</a></li>
                                    </ul>
                                    {/*====== End - Dropdown ======*/}
                                </li>
                                <li>

                                    <a href="#cart.html">Cart</a></li>
                                <li>

                                    <a href="#wishlist.html">Wishlist</a></li>
                                <li>

                                    <a href="#checkout.html">Checkout</a></li>
                                <li>

                                    <a href="#faq.html">FAQ</a></li>
                                <li>

                                    <a href="#about.html">About us</a></li>
                                <li>

                                    <a href="#contact.html">Contact</a></li>
                                <li>

                                    <a href="#404.html">404</a></li>
                            </ul>
                            {/*====== End - Dropdown ======*/}
                        </li>
                        <li className="has-dropdown">

                            <a>BLOG<i className="fas fa-angle-down u-s-m-l-6"></i></a>

                            {/*====== Dropdown ======*/}

                            <span className="js-menu-toggle"></span>
                            <ul style={{ width: "200px" }}>
                                <li>

                                    <a href="#blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                <li>

                                    <a href="#blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                <li>

                                    <a href="#blog-sidebar-none.html">Blog Sidebar None</a></li>
                                <li>

                                    <a href="#blog-masonry.html">Blog Masonry</a></li>
                                <li>

                                    <a href="#blog-detail.html">Blog Details</a></li>
                            </ul>
                            {/*====== End - Dropdown ======*/}
                        </li>
                        <li>

                            <a href="#shop-side-version-2.html">VALUE OF THE DAY</a></li>
                        <li>

                            <a href="#shop-side-version-2.html">GIFT CARDS</a></li>
                    </ul>
                    {/*====== End - List ======*/}
                </div>
                {/*====== End - Menu ======*/}
            </div>
            {/*====== End - Dropdown Main plugin ======*/}


            {/*====== Dropdown Main plugin ======*/}
            <div className="menu-init" id="navigation3">

                <button className="btn btn--icon toggle-button toggle-button--secondary fas fa-shopping-bag toggle-button-shop" type="button"></button>

                <span className="total-item-round">2</span>

                {/*====== Menu ======*/}
                <div className="ah-lg-mode">

                    <span className="ah-close">✕ Close</span>

                    {/*====== List ======*/}
                    <ul className="ah-list ah-list--design1 ah-list--link-color-secondary">
                        <li>

                            <a href="#index.html"><i className="fas fa-home u-c-brand"></i></a></li>
                        <li>

                            <a href="#wishlist.html"><i className="far fa-heart"></i></a></li>
                        <li className="has-dropdown">

                            <a className="mini-cart-shop-link"><i className="fas fa-shopping-bag"></i>

                                <span className="total-item-round">2</span></a>

                            {/*====== Dropdown ======*/}

                            <span className="js-menu-toggle"></span>
                            <div className="mini-cart">

                                {/*====== Mini Product Container ======*/}
                                <div className="mini-product-container gl-scroll u-s-m-b-15">

                                    {/*====== Card for mini cart ======*/}
                                    <div className="card-mini-product">
                                        <div className="mini-product">
                                            <div className="mini-product__image-wrapper">

                                                <a className="mini-product__link" href="#product-detail.html">

                                                    <img className="u-img-fluid" src="images/product/electronic/product3.jpg" alt=""/></a></div>
                                            <div className="mini-product__info-wrapper">

                                                <span className="mini-product__category">

                                                    <a href="#shop-side-version-2.html">Electronics</a></span>

                                                <span className="mini-product__name">

                                                    <a href="#product-detail.html">Yellow Wireless Headphone</a></span>

                                                <span className="mini-product__quantity">1 x</span>

                                                <span className="mini-product__price">$8</span></div>
                                        </div>

                                        <a className="mini-product__delete-link far fa-trash-alt"></a>
                                    </div>
                                    {/*====== End - Card for mini cart ======*/}


                                    {/*====== Card for mini cart ======*/}
                                    <div className="card-mini-product">
                                        <div className="mini-product">
                                            <div className="mini-product__image-wrapper">

                                                <a className="mini-product__link" href="#product-detail.html">

                                                    <img className="u-img-fluid" src="images/product/electronic/product18.jpg" alt=""/></a></div>
                                            <div className="mini-product__info-wrapper">

                                                <span className="mini-product__category">

                                                    <a href="#shop-side-version-2.html">Electronics</a></span>

                                                <span className="mini-product__name">

                                                    <a href="#product-detail.html">Nikon DSLR Camera 4k</a></span>

                                                <span className="mini-product__quantity">1 x</span>

                                                <span className="mini-product__price">$8</span></div>
                                        </div>

                                        <a className="mini-product__delete-link far fa-trash-alt"></a>
                                    </div>
                                    {/*====== End - Card for mini cart ======*/}


                                    {/*====== Card for mini cart ======*/}
                                    <div className="card-mini-product">
                                        <div className="mini-product">
                                            <div className="mini-product__image-wrapper">

                                                <a className="mini-product__link" href="#product-detail.html">

                                                    <img className="u-img-fluid" src="images/product/women/product8.jpg" alt=""/></a></div>
                                            <div className="mini-product__info-wrapper">

                                                <span className="mini-product__category">

                                                    <a href="#shop-side-version-2.html">Women Clothing</a></span>

                                                <span className="mini-product__name">

                                                    <a href="#product-detail.html">New Dress D Nice Elegant</a></span>

                                                <span className="mini-product__quantity">1 x</span>

                                                <span className="mini-product__price">$8</span></div>
                                        </div>

                                        <a className="mini-product__delete-link far fa-trash-alt"></a>
                                    </div>
                                    {/*====== End - Card for mini cart ======*/}


                                    {/*====== Card for mini cart ======*/}
                                    <div className="card-mini-product">
                                        <div className="mini-product">
                                            <div className="mini-product__image-wrapper">

                                                <a className="mini-product__link" href="#product-detail.html">

                                                    <img className="u-img-fluid" src="images/product/men/product8.jpg" alt=""/></a></div>
                                            <div className="mini-product__info-wrapper">

                                                <span className="mini-product__category">

                                                    <a href="#shop-side-version-2.html">Men Clothing</a></span>

                                                <span className="mini-product__name">

                                                    <a href="#product-detail.html">New Fashion D Nice Elegant</a></span>

                                                <span className="mini-product__quantity">1 x</span>

                                                <span className="mini-product__price">$8</span></div>
                                        </div>

                                        <a className="mini-product__delete-link far fa-trash-alt"></a>
                                    </div>
                                    {/*====== End - Card for mini cart ======*/}
                                </div>
                                {/*====== End - Mini Product Container ======*/}


                                {/*====== Mini Product Statistics ======*/}
                                <div className="mini-product-stat">
                                    <div className="mini-total">

                                        <span className="subtotal-text">SUBTOTAL</span>

                                        <span className="subtotal-value">$16</span></div>
                                    <div className="mini-action">

                                        <a className="mini-link btn--e-brand-b-2" href="#checkout.html">PROCEED TO CHECKOUT</a>

                                        <a className="mini-link btn--e-transparent-secondary-b-2" href="#cart.html">VIEW CART</a></div>
                                </div>
                                {/*====== End - Mini Product Statistics ======*/}
                            </div>
                            {/*====== End - Dropdown ======*/}
                        </li>
                    </ul>
                    {/*====== End - List ======*/}
                </div>
                {/*====== End - Menu ======*/}
            </div>
            {/*====== End - Dropdown Main plugin ======*/}
        </div>
        {/*====== End - Secondary Nav ======*/}
    </div>
</nav>
{/*====== End - Nav 2 ======*/}
</header>
{/*====== End - Main Header ======*/}

                {/*====== App Content ======*/}
                <div className="app-content">

                    {/*====== Primary Slider ======*/}
                    <div className="s-skeleton s-skeleton--h-640 s-skeleton--bg-grey">
                        <div className="owl-carousel primary-style-3" id="hero-slider">
                            {/* <Slider {...settings}>
                                <div>
                                    <h3>1</h3>
                                </div>
                                <div>
                                    <h3>2</h3>
                                </div>
                                <div>
                                    <h3>3</h3>
                                </div>
                                <div>
                                    <h3>4</h3>
                                </div>
                                <div>
                                    <h3>5</h3>
                                </div>
                                <div>
                                    <h3>6</h3>
                                </div>
                            </Slider> */}
                            <div className="hero-slide hero-slide--7">
                            <div className="primary-style-3-wrap">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="slider-content slider-content--animation">

                                                <span className="content-span-1 u-c-white">Update Your Fashion</span>

                                                <span className="content-span-2 u-c-white">10% Discount on Outwear</span>

                                                <span className="content-span-3 u-c-white">Find outwear on best prices</span>

                                                <span className="content-span-4 u-c-white">Starting At

                                                    <span className="u-c-brand">$100.00</span></span>

                                                <a className="shop-now-link btn--e-brand" href="shop-side-version-2.html">SHOP NOW</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            {/* <div className="hero-slide hero-slide--8">
                            <div className="primary-style-3-wrap">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="slider-content slider-content--animation">

                                                <span className="content-span-1 u-c-white">Open Your Eyes</span>

                                                <span className="content-span-2 u-c-white">10% Off On Intimates</span>

                                                <span className="content-span-3 u-c-white">Find intimates on best prices</span>

                                                <span className="content-span-4 u-c-white">Starting At

                                                    <span className="u-c-brand">$100.00</span></span>

                                                <a className="shop-now-link btn--e-brand" href="shop-side-version-2.html">SHOP NOW</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                            {/* <div className="hero-slide hero-slide--9">
                            <div className="primary-style-3-wrap">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="slider-content slider-content--animation">

                                                <span className="content-span-1 u-c-white">Find Top Brands</span>

                                                <span className="content-span-2 u-c-white">10% Off On Outwear</span>

                                                <span className="content-span-3 u-c-white">Find outwear on best prices</span>

                                                <span className="content-span-4 u-c-white">Starting At

                                                    <span className="u-c-brand">$100.00</span></span>

                                                <a className="shop-now-link btn--e-brand" href="shop-side-version-2.html">SHOP NOW</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        </div>
                    </div>
                    {/*====== End - Primary Slider ======*/}


                    {/*====== Section 1 ======*/}
                    <div className="u-s-p-y-60">

                        {/*====== Section Content ======*/}
                        <div className="section__content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-6 u-s-m-b-30">
                                        <div className="promotion-o">
                                            <div className="aspect aspect--bg-grey aspect--square">

                                                <img className="aspect__img" src="images/promo/promo-img-4.jpg" alt="" /></div>
                                            <div className="promotion-o__content">

                                                <a className="promotion-o__link btn--e-white-brand" href="shop-side-version-2.html">Women's Clothing</a></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 u-s-m-b-30">
                                        <div className="promotion-o">
                                            <div className="aspect aspect--bg-grey aspect--square">

                                                <img className="aspect__img" src="images/promo/promo-img-5.jpg" alt="" /></div>
                                            <div className="promotion-o__content">

                                                <a className="promotion-o__link btn--e-white-brand" href="shop-side-version-2.html">Fashion Accessories</a></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 u-s-m-b-30">
                                        <div className="promotion-o">
                                            <div className="aspect aspect--bg-grey aspect--square">

                                                <img className="aspect__img" src="images/promo/promo-img-6.jpg" alt="" /></div>
                                            <div className="promotion-o__content">

                                                <a className="promotion-o__link btn--e-white-brand" href="shop-side-version-2.html">Men's Clothing</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*====== End - Section Content ======*/}
                    </div>
                    {/*====== End - Section 1 ======*/}


                    {/*====== Section 2 ======*/}
                    <div className="u-s-p-b-60">

                        {/*====== Section Content ======*/}
                        <div className="section__content">
                            <div className="container">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12">

                                            <a className="i3-banner" href="shop-side-version-2.html">
                                                <div className="aspect aspect--bg-grey-fb aspect--square">

                                                    <img className="aspect__img i3-banner__img" src="images/banners/i3-banner-1.jpg" alt="" /></div>
                                            </a></div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-6 u-s-m-b-30">
                                                    <div className="product-short u-h-100">
                                                        <div className="product-short__container">
                                                            <div className="product-short__img-wrap">

                                                                <a className="aspect aspect--bg-grey-fb aspect--square u-d-block" href="product-detail.html">

                                                                    <img className="aspect__img product-short__img" src="images/product/women/product14.jpg" alt="" /></a></div>
                                                            <div className="product-short__info">

                                                                <span className="product-short__price">$126.77</span>

                                                                <span className="product-short__name">

                                                                    <a href="product-detail.html">Women Shoes</a></span>

                                                                <span className="product-short__category">

                                                                    <a href="shop-side-version-2.html">Women Clothing</a></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 u-s-m-b-30">
                                                    <div className="product-short u-h-100">
                                                        <div className="product-short__container">
                                                            <div className="product-short__img-wrap">

                                                                <a className="aspect aspect--bg-grey-fb aspect--square u-d-block" href="product-detail.html">

                                                                    <img className="aspect__img product-short__img" src="images/product/men/product12.jpg" alt="" /></a></div>
                                                            <div className="product-short__info">

                                                                <span className="product-short__price">$126.77</span>

                                                                <span className="product-short__name">

                                                                    <a href="product-detail.html">Men Leather Wallet</a></span>

                                                                <span className="product-short__category">

                                                                    <a href="shop-side-version-2.html">Men Clothing</a></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">

                                                    <a className="i3-banner" href="shop-side-version-2.html">
                                                        <div className="aspect aspect--bg-grey-fb aspect--1048-334">

                                                            <img className="aspect__img i3-banner__img" src="images/banners/i3-banner-2.jpg" alt="" /></div>
                                                    </a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*====== End - Section Content ======*/}
                    </div>
                    {/*====== End - Section 2 ======*/}


                    {/*====== Section 3 ======*/}
                    <div className="u-s-p-b-60">

                        {/*====== Section Intro ======*/}
                        <div className="section__intro u-s-m-b-46">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section__text-wrap">
                                            <h1 className="section__heading u-c-secondary u-s-m-b-12">RECENT PRODUCTS</h1>

                                            <span className="section__span u-c-silver">NEWLY ADDED PRODUCTS</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*====== End - Section Intro ======*/}


                        {/*====== Section Content ======*/}
                        <div className="section__content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-3 col-md-4 col-sm-6 u-s-m-b-30">
                                        <div className="product-r u-h-100">
                                            <div className="product-r__container">

                                                <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                                                    <img className="aspect__img" src="images/product/women/product5.jpg" alt="" /></a>
                                                <div className="product-r__action-wrap">
                                                    <ul className="product-r__action-list">
                                                        <li>

                                                            <a data-modal="modal" data-modal-id="#quick-look"><i className="fas fa-search-plus"></i></a></li>
                                                        <li>

                                                            <a data-modal="modal" data-modal-id="#add-to-cart"><i className="fas fa-plus-circle"></i></a></li>
                                                        <li>

                                                            <a href="signin.html"><i className="fas fa-heart"></i></a></li>
                                                        <li>

                                                            <a href="signin.html"><i className="fas fa-envelope"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-r__info-wrap">

                                                <span className="product-r__category">

                                                    <a href="shop-side-version-2.html">Women Clothing</a></span>
                                                <div className="product-r__n-p-wrap">

                                                    <span className="product-r__name">

                                                        <a href="product-detail.html">New Dress A Nice Elegant</a></span>

                                                    <span className="product-r__price">$125.00</span></div>

                                                <span className="product-r__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6 u-s-m-b-30">
                                        <div className="product-r u-h-100">
                                            <div className="product-r__container">

                                                <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                                                    <img className="aspect__img" src="images/product/women/product6.jpg" alt="" /></a>
                                                <div className="product-r__action-wrap">
                                                    <ul className="product-r__action-list">
                                                        <li>

                                                            <a data-modal="modal" data-modal-id="#quick-look"><i className="fas fa-search-plus"></i></a></li>
                                                        <li>

                                                            <a data-modal="modal" data-modal-id="#add-to-cart"><i className="fas fa-plus-circle"></i></a></li>
                                                        <li>

                                                            <a href="signin.html"><i className="fas fa-heart"></i></a></li>
                                                        <li>

                                                            <a href="signin.html"><i className="fas fa-envelope"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-r__info-wrap">

                                                <span className="product-r__category">

                                                    <a href="shop-side-version-2.html">Women Clothing</a></span>
                                                <div className="product-r__n-p-wrap">

                                                    <span className="product-r__name">

                                                        <a href="product-detail.html">New Dress B Nice Elegant</a></span>

                                                    <span className="product-r__price">$125.00</span></div>

                                                <span className="product-r__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6 u-s-m-b-30">
                                        <div className="product-r u-h-100">
                                            <div className="product-r__container">

                                                <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                                                    <img className="aspect__img" src="images/product/women/product7.jpg" alt="" /></a>
                                                <div className="product-r__action-wrap">
                                                    <ul className="product-r__action-list">
                                                        <li>

                                                            <a data-modal="modal" data-modal-id="#quick-look"><i className="fas fa-search-plus"></i></a></li>
                                                        <li>

                                                            <a data-modal="modal" data-modal-id="#add-to-cart"><i className="fas fa-plus-circle"></i></a></li>
                                                        <li>

                                                            <a href="signin.html"><i className="fas fa-heart"></i></a></li>
                                                        <li>

                                                            <a href="signin.html"><i className="fas fa-envelope"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-r__info-wrap">

                                                <span className="product-r__category">

                                                    <a href="shop-side-version-2.html">Women Clothing</a></span>
                                                <div className="product-r__n-p-wrap">

                                                    <span className="product-r__name">

                                                        <a href="product-detail.html">New Dress C Nice Elegant</a></span>

                                                    <span className="product-r__price">$125.00</span></div>

                                                <span className="product-r__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6 u-s-m-b-30">
                                        <div className="product-r u-h-100">
                                            <div className="product-r__container">

                                                <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                                                    <img className="aspect__img" src="images/product/women/product8.jpg" alt="" /></a>
                                                <div className="product-r__action-wrap">
                                                    <ul className="product-r__action-list">
                                                        <li>

                                                            <a data-modal="modal" data-modal-id="#quick-look"><i className="fas fa-search-plus"></i></a></li>
                                                        <li>

                                                            <a data-modal="modal" data-modal-id="#add-to-cart"><i className="fas fa-plus-circle"></i></a></li>
                                                        <li>

                                                            <a href="signin.html"><i className="fas fa-heart"></i></a></li>
                                                        <li>

                                                            <a href="signin.html"><i className="fas fa-envelope"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-r__info-wrap">

                                                <span className="product-r__category">

                                                    <a href="shop-side-version-2.html">Women Clothing</a></span>
                                                <div className="product-r__n-p-wrap">

                                                    <span className="product-r__name">

                                                        <a href="product-detail.html">New Dress D Nice Elegant</a></span>

                                                    <span className="product-r__price">$125.00</span></div>

                                                <span className="product-r__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6 u-s-m-b-30">
                                        <div className="product-r u-h-100">
                                            <div className="product-r__container">

                                                <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                                                    <img className="aspect__img" src="images/product/men/product5.jpg" alt="" /></a>
                                                <div className="product-r__action-wrap">
                                                    <ul className="product-r__action-list">
                                                        <li>

                                                            <a data-modal="modal" data-modal-id="#quick-look"><i className="fas fa-search-plus"></i></a></li>
                                                        <li>

                                                            <a data-modal="modal" data-modal-id="#add-to-cart"><i className="fas fa-plus-circle"></i></a></li>
                                                        <li>

                                                            <a href="signin.html"><i className="fas fa-heart"></i></a></li>
                                                        <li>

                                                            <a href="signin.html"><i className="fas fa-envelope"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-r__info-wrap">

                                                <span className="product-r__category">

                                                    <a href="shop-side-version-2.html">Men Clothing</a></span>
                                                <div className="product-r__n-p-wrap">

                                                    <span className="product-r__name">

                                                        <a href="product-detail.html">New Fashion A Nice Elegant</a></span>

                                                    <span className="product-r__price">$125.00</span></div>

                                                <span className="product-r__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6 u-s-m-b-30">
                                        <div className="product-r u-h-100">
                                            <div className="product-r__container">

                                                <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                                                    <img className="aspect__img" src="images/product/men/product6.jpg" alt="" /></a>
                                                <div className="product-r__action-wrap">
                                                    <ul className="product-r__action-list">
                                                        <li>

                                                            <a data-modal="modal" data-modal-id="#quick-look"><i className="fas fa-search-plus"></i></a></li>
                                                        <li>

                                                            <a data-modal="modal" data-modal-id="#add-to-cart"><i className="fas fa-plus-circle"></i></a></li>
                                                        <li>

                                                            <a href="signin.html"><i className="fas fa-heart"></i></a></li>
                                                        <li>

                                                            <a href="signin.html"><i className="fas fa-envelope"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-r__info-wrap">

                                                <span className="product-r__category">

                                                    <a href="shop-side-version-2.html">Men Clothing</a></span>
                                                <div className="product-r__n-p-wrap">

                                                    <span className="product-r__name">

                                                        <a href="product-detail.html">New Fashion B Nice Elegant</a></span>

                                                    <span className="product-r__price">$125.00</span></div>

                                                <span className="product-r__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6 u-s-m-b-30">
                                        <div className="product-r u-h-100">
                                            <div className="product-r__container">

                                                <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                                                    <img className="aspect__img" src="images/product/men/product7.jpg" alt="" /></a>
                                                <div className="product-r__action-wrap">
                                                    <ul className="product-r__action-list">
                                                        <li>

                                                            <a data-modal="modal" data-modal-id="#quick-look"><i className="fas fa-search-plus"></i></a></li>
                                                        <li>

                                                            <a data-modal="modal" data-modal-id="#add-to-cart"><i className="fas fa-plus-circle"></i></a></li>
                                                        <li>

                                                            <a href="signin.html"><i className="fas fa-heart"></i></a></li>
                                                        <li>

                                                            <a href="signin.html"><i className="fas fa-envelope"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-r__info-wrap">

                                                <span className="product-r__category">

                                                    <a href="shop-side-version-2.html">Men Clothing</a></span>
                                                <div className="product-r__n-p-wrap">

                                                    <span className="product-r__name">

                                                        <a href="product-detail.html">New Fashion C Nice Elegant</a></span>

                                                    <span className="product-r__price">$125.00</span></div>

                                                <span className="product-r__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6 u-s-m-b-30">
                                        <div className="product-r u-h-100">
                                            <div className="product-r__container">

                                                <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                                                    <img className="aspect__img" src="images/product/men/product8.jpg" alt="" /></a>
                                                <div className="product-r__action-wrap">
                                                    <ul className="product-r__action-list">
                                                        <li>

                                                            <a data-modal="modal" data-modal-id="#quick-look"><i className="fas fa-search-plus"></i></a></li>
                                                        <li>

                                                            <a data-modal="modal" data-modal-id="#add-to-cart"><i className="fas fa-plus-circle"></i></a></li>
                                                        <li>

                                                            <a href="signin.html"><i className="fas fa-heart"></i></a></li>
                                                        <li>

                                                            <a href="signin.html"><i className="fas fa-envelope"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-r__info-wrap">

                                                <span className="product-r__category">

                                                    <a href="shop-side-version-2.html">Men Clothing</a></span>
                                                <div className="product-r__n-p-wrap">

                                                    <span className="product-r__name">

                                                        <a href="product-detail.html">New Fashion D Nice Elegant</a></span>

                                                    <span className="product-r__price">$125.00</span></div>

                                                <span className="product-r__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*====== End - Section Content ======*/}
                    </div>
                    {/*====== End - Section 3 ======*/}


                    {/*====== Section 4 ======*/}
                    <div className="u-s-p-b-60">

                        {/*====== Section Intro ======*/}
                        <div className="section__intro u-s-m-b-16">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section__text-wrap">
                                            <h1 className="section__heading u-c-secondary u-s-m-b-12">BEST SELLING PRODUCT</h1>

                                            <span className="section__span u-c-silver u-s-m-b-16">FIND PRODUCTS THAT ARE MOST SELLING</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*====== End - Section Intro ======*/}


                        {/*====== Section Content ======*/}
                        <div className="section__content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="filter-category-container">
                                            <div className="filter__category-wrapper">

                                                <button className="btn filter__btn filter__btn--style-2 js-checked" type="button" data-filter="*">ALL</button></div>
                                            <div className="filter__category-wrapper">

                                                <button className="btn filter__btn filter__btn--style-2" type="button" data-filter=".outwear">OUTWEAR</button></div>
                                            <div className="filter__category-wrapper">

                                                <button className="btn filter__btn filter__btn--style-2" type="button" data-filter=".bottom">BOTTOM</button></div>
                                            <div className="filter__category-wrapper">

                                                <button className="btn filter__btn filter__btn--style-2" type="button" data-filter=".footwear">FOOTWEAR</button></div>
                                            <div className="filter__category-wrapper">

                                                <button className="btn filter__btn filter__btn--style-2" type="button" data-filter=".accessories">ACCESSORIES</button></div>
                                        </div>
                                        <div className="filter__grid-wrapper u-s-m-t-30">
                                            <div className="row">
                                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30 filter__item outwear">
                                                    <div className="product-bs">
                                                        <div className="product-bs__container">
                                                            <div className="product-bs__wrap">

                                                                <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                                                                    <img className="aspect__img" src="images/product/men/product11.jpg" alt="" /></a>
                                                                <div className="product-bs__action-wrap">
                                                                    <ul className="product-bs__action-list">
                                                                        <li>

                                                                            <a data-modal="modal" data-modal-id="#quick-look"><i className="fas fa-search-plus"></i></a></li>
                                                                        <li>

                                                                            <a data-modal="modal" data-modal-id="#add-to-cart"><i className="fas fa-plus-circle"></i></a></li>
                                                                        <li>

                                                                            <a href="signin.html"><i className="fas fa-heart"></i></a></li>
                                                                        <li>

                                                                            <a href="signin.html"><i className="fas fa-envelope"></i></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                            <span className="product-bs__category">

                                                                <a href="shop-side-version-2.html">Men Clothing</a></span>

                                                            <span className="product-bs__name">

                                                                <a href="product-detail.html">Black &amp; White Sweater</a></span>
                                                            <div className="product-bs__rating gl-rating-style"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i>

                                                                <span className="product-bs__review">(23)</span></div>

                                                            <span className="product-bs__price">$125.00

                                                                <span className="product-bs__discount">$160.00</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30 filter__item outwear">
                                                    <div className="product-bs">
                                                        <div className="product-bs__container">
                                                            <div className="product-bs__wrap">

                                                                <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                                                                    <img className="aspect__img" src="images/product/women/product15.jpg" alt="" /></a>
                                                                <div className="product-bs__action-wrap">
                                                                    <ul className="product-bs__action-list">
                                                                        <li>

                                                                            <a data-modal="modal" data-modal-id="#quick-look"><i className="fas fa-search-plus"></i></a></li>
                                                                        <li>

                                                                            <a data-modal="modal" data-modal-id="#add-to-cart"><i className="fas fa-plus-circle"></i></a></li>
                                                                        <li>

                                                                            <a href="signin.html"><i className="fas fa-heart"></i></a></li>
                                                                        <li>

                                                                            <a href="signin.html"><i className="fas fa-envelope"></i></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                            <span className="product-bs__category">

                                                                <a href="shop-side-version-2.html">Women Clothing</a></span>

                                                            <span className="product-bs__name">

                                                                <a href="product-detail.html">Color Yellow Modest A Fashion</a></span>
                                                            <div className="product-bs__rating gl-rating-style"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i>

                                                                <span className="product-bs__review">(23)</span></div>

                                                            <span className="product-bs__price">$125.00

                                                                <span className="product-bs__discount">$160.00</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30 filter__item bottom">
                                                    <div className="product-bs">
                                                        <div className="product-bs__container">
                                                            <div className="product-bs__wrap">

                                                                <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                                                                    <img className="aspect__img" src="images/product/men/product2.jpg" alt="" /></a>
                                                                <div className="product-bs__action-wrap">
                                                                    <ul className="product-bs__action-list">
                                                                        <li>

                                                                            <a data-modal="modal" data-modal-id="#quick-look"><i className="fas fa-search-plus"></i></a></li>
                                                                        <li>

                                                                            <a data-modal="modal" data-modal-id="#add-to-cart"><i className="fas fa-plus-circle"></i></a></li>
                                                                        <li>

                                                                            <a href="signin.html"><i className="fas fa-heart"></i></a></li>
                                                                        <li>

                                                                            <a href="signin.html"><i className="fas fa-envelope"></i></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                            <span className="product-bs__category">

                                                                <a href="shop-side-version-2.html">Men Clothing</a></span>

                                                            <span className="product-bs__name">

                                                                <a href="product-detail.html">White Full Men Underwear</a></span>
                                                            <div className="product-bs__rating gl-rating-style"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i>

                                                                <span className="product-bs__review">(23)</span></div>

                                                            <span className="product-bs__price">$125.00

                                                                <span className="product-bs__discount">$160.00</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30 filter__item bottom">
                                                    <div className="product-bs">
                                                        <div className="product-bs__container">
                                                            <div className="product-bs__wrap">

                                                                <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                                                                    <img className="aspect__img" src="images/product/women/product3.jpg" alt="" /></a>
                                                                <div className="product-bs__action-wrap">
                                                                    <ul className="product-bs__action-list">
                                                                        <li>

                                                                            <a data-modal="modal" data-modal-id="#quick-look"><i className="fas fa-search-plus"></i></a></li>
                                                                        <li>

                                                                            <a data-modal="modal" data-modal-id="#add-to-cart"><i className="fas fa-plus-circle"></i></a></li>
                                                                        <li>

                                                                            <a href="signin.html"><i className="fas fa-heart"></i></a></li>
                                                                        <li>

                                                                            <a href="signin.html"><i className="fas fa-envelope"></i></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                            <span className="product-bs__category">

                                                                <a href="shop-side-version-2.html">Women Clothing</a></span>

                                                            <span className="product-bs__name">

                                                                <a href="product-detail.html">Color Yellow Modest B Fashion</a></span>
                                                            <div className="product-bs__rating gl-rating-style"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i>

                                                                <span className="product-bs__review">(23)</span></div>

                                                            <span className="product-bs__price">$125.00

                                                                <span className="product-bs__discount">$160.00</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30 filter__item accessories">
                                                    <div className="product-bs">
                                                        <div className="product-bs__container">
                                                            <div className="product-bs__wrap">

                                                                <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                                                                    <img className="aspect__img" src="images/product/men/product3.jpg" alt="" /></a>
                                                                <div className="product-bs__action-wrap">
                                                                    <ul className="product-bs__action-list">
                                                                        <li>

                                                                            <a data-modal="modal" data-modal-id="#quick-look"><i className="fas fa-search-plus"></i></a></li>
                                                                        <li>

                                                                            <a data-modal="modal" data-modal-id="#add-to-cart"><i className="fas fa-plus-circle"></i></a></li>
                                                                        <li>

                                                                            <a href="signin.html"><i className="fas fa-heart"></i></a></li>
                                                                        <li>

                                                                            <a href="signin.html"><i className="fas fa-envelope"></i></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                            <span className="product-bs__category">

                                                                <a href="shop-side-version-2.html">Men Clothing</a></span>

                                                            <span className="product-bs__name">

                                                                <a href="product-detail.html">Blown Sunglasses For Deux</a></span>
                                                            <div className="product-bs__rating gl-rating-style"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i>

                                                                <span className="product-bs__review">(23)</span></div>

                                                            <span className="product-bs__price">$125.00

                                                                <span className="product-bs__discount">$160.00</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30 filter__item accessories">
                                                    <div className="product-bs">
                                                        <div className="product-bs__container">
                                                            <div className="product-bs__wrap">

                                                                <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                                                                    <img className="aspect__img" src="images/product/women/product4.jpg" alt="" /></a>
                                                                <div className="product-bs__action-wrap">
                                                                    <ul className="product-bs__action-list">
                                                                        <li>

                                                                            <a data-modal="modal" data-modal-id="#quick-look"><i className="fas fa-search-plus"></i></a></li>
                                                                        <li>

                                                                            <a data-modal="modal" data-modal-id="#add-to-cart"><i className="fas fa-plus-circle"></i></a></li>
                                                                        <li>

                                                                            <a href="signin.html"><i className="fas fa-heart"></i></a></li>
                                                                        <li>

                                                                            <a href="signin.html"><i className="fas fa-envelope"></i></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                            <span className="product-bs__category">

                                                                <a href="shop-side-version-2.html">Women Clothing</a></span>

                                                            <span className="product-bs__name">

                                                                <a href="product-detail.html">Ladies Black Bag</a></span>
                                                            <div className="product-bs__rating gl-rating-style"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i>

                                                                <span className="product-bs__review">(23)</span></div>

                                                            <span className="product-bs__price">$125.00

                                                                <span className="product-bs__discount">$160.00</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30 filter__item footwear">
                                                    <div className="product-bs">
                                                        <div className="product-bs__container">
                                                            <div className="product-bs__wrap">

                                                                <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                                                                    <img className="aspect__img" src="images/product/men/product13.jpg" alt="" /></a>
                                                                <div className="product-bs__action-wrap">
                                                                    <ul className="product-bs__action-list">
                                                                        <li>

                                                                            <a data-modal="modal" data-modal-id="#quick-look"><i className="fas fa-search-plus"></i></a></li>
                                                                        <li>

                                                                            <a data-modal="modal" data-modal-id="#add-to-cart"><i className="fas fa-plus-circle"></i></a></li>
                                                                        <li>

                                                                            <a href="signin.html"><i className="fas fa-heart"></i></a></li>
                                                                        <li>

                                                                            <a href="signin.html"><i className="fas fa-envelope"></i></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                            <span className="product-bs__category">

                                                                <a href="shop-side-version-2.html">Men Clothing</a></span>

                                                            <span className="product-bs__name">

                                                                <a href="product-detail.html">Casual Shoes Independence</a></span>
                                                            <div className="product-bs__rating gl-rating-style"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i>

                                                                <span className="product-bs__review">(23)</span></div>

                                                            <span className="product-bs__price">$125.00

                                                                <span className="product-bs__discount">$160.00</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30 filter__item footwear">
                                                    <div className="product-bs">
                                                        <div className="product-bs__container">
                                                            <div className="product-bs__wrap">

                                                                <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                                                                    <img className="aspect__img" src="images/product/men/product14.jpg" alt="" /></a>
                                                                <div className="product-bs__action-wrap">
                                                                    <ul className="product-bs__action-list">
                                                                        <li>

                                                                            <a data-modal="modal" data-modal-id="#quick-look"><i className="fas fa-search-plus"></i></a></li>
                                                                        <li>

                                                                            <a data-modal="modal" data-modal-id="#add-to-cart"><i className="fas fa-plus-circle"></i></a></li>
                                                                        <li>

                                                                            <a href="signin.html"><i className="fas fa-heart"></i></a></li>
                                                                        <li>

                                                                            <a href="signin.html"><i className="fas fa-envelope"></i></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                            <span className="product-bs__category">

                                                                <a href="shop-side-version-2.html">Men Clothing</a></span>

                                                            <span className="product-bs__name">

                                                                <a href="product-detail.html">Men Casual Shoes Charcoal</a></span>
                                                            <div className="product-bs__rating gl-rating-style"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i>

                                                                <span className="product-bs__review">(23)</span></div>

                                                            <span className="product-bs__price">$125.00

                                                                <span className="product-bs__discount">$160.00</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="load-more">

                                            <button className="btn btn--e-brand" type="button">Load More</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*====== End - Section Content ======*/}
                    </div>
                    {/*====== End - Section 4 ======*/}


                    {/*====== Section 5 ======*/}
                    <div className="u-s-p-b-60">

                        {/*====== Section Intro ======*/}
                        <div className="section__intro u-s-m-b-46">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section__text-wrap">
                                            <h1 className="section__heading u-c-secondary u-s-m-b-12">URBAN SOUL</h1>

                                            <span className="section__span u-c-silver">RECENTLY URBAN PRODUCTS</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*====== End - Section Intro ======*/}


                        {/*====== Section Content ======*/}
                        <div className="section__content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-3 col-md-4 col-sm-6 u-s-m-b-30">
                                        <div className="product-short u-h-100">
                                            <div className="product-short__container">
                                                <div className="product-short__img-wrap">

                                                    <a className="aspect aspect--bg-grey-fb aspect--square u-d-block" href="product-detail.html">

                                                        <img className="aspect__img product-short__img" src="images/product/women/product16.jpg" alt="" /></a></div>
                                                <div className="product-short__info">

                                                    <span className="product-short__price">$126.77</span>

                                                    <span className="product-short__name">

                                                        <a href="product-detail.html">New Dress A Nice Elegant</a></span>

                                                    <span className="product-short__category">

                                                        <a href="shop-side-version-2.html">Women Clothing</a></span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6 u-s-m-b-30">
                                        <div className="product-short u-h-100">
                                            <div className="product-short__container">
                                                <div className="product-short__img-wrap">

                                                    <a className="aspect aspect--bg-grey-fb aspect--square u-d-block" href="product-detail.html">

                                                        <img className="aspect__img product-short__img" src="images/product/women/product17.jpg" alt="" /></a></div>
                                                <div className="product-short__info">

                                                    <span className="product-short__price">$126.77</span>

                                                    <span className="product-short__name">

                                                        <a href="product-detail.html">New Dress B Nice Elegant</a></span>

                                                    <span className="product-short__category">

                                                        <a href="shop-side-version-2.html">Women Clothing</a></span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6 u-s-m-b-30">
                                        <div className="product-short u-h-100">
                                            <div className="product-short__container">
                                                <div className="product-short__img-wrap">

                                                    <a className="aspect aspect--bg-grey-fb aspect--square u-d-block" href="product-detail.html">

                                                        <img className="aspect__img product-short__img" src="images/product/women/product18.jpg" alt="" /></a></div>
                                                <div className="product-short__info">

                                                    <span className="product-short__price">$126.77</span>

                                                    <span className="product-short__name">

                                                        <a href="product-detail.html">New Dress C Nice Elegant</a></span>

                                                    <span className="product-short__category">

                                                        <a href="shop-side-version-2.html">Women Clothing</a></span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6 u-s-m-b-30">
                                        <div className="product-short u-h-100">
                                            <div className="product-short__container">
                                                <div className="product-short__img-wrap">

                                                    <a className="aspect aspect--bg-grey-fb aspect--square u-d-block" href="product-detail.html">

                                                        <img className="aspect__img product-short__img" src="images/product/women/product19.jpg" alt="" /></a></div>
                                                <div className="product-short__info">

                                                    <span className="product-short__price">$126.77</span>

                                                    <span className="product-short__name">

                                                        <a href="product-detail.html">New Dress D Nice Elegant</a></span>

                                                    <span className="product-short__category">

                                                        <a href="shop-side-version-2.html">Women Clothing</a></span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*====== End - Section Content ======*/}
                    </div>
                    {/*====== End - Section 5 ======*/}


                    {/*====== Section 6 ======*/}
                    <div className="u-s-p-b-60">

                        {/*====== Section Content ======*/}
                        <div className="section__content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-6 u-s-m-b-30">
                                        <div className="column-product">

                                            <span className="column-product__title u-c-secondary u-s-m-b-25">SPECIAL PRODUCTS</span>
                                            <ul className="column-product__list">
                                                <li className="column-product__item">
                                                    <div className="product-l">
                                                        <div className="product-l__img-wrap">

                                                            <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">

                                                                <img className="aspect__img" src="images/product/men/product9.jpg" alt="" /></a></div>
                                                        <div className="product-l__info-wrap">

                                                            <span className="product-l__category">

                                                                <a href="shop-side-version-2.html">Men Clothing</a></span>

                                                            <span className="product-l__name">

                                                                <a href="product-detail.html">New Fashion A Nice Elegant</a></span>

                                                            <span className="product-l__price">$125.00</span></div>
                                                    </div>
                                                </li>
                                                <li className="column-product__item">
                                                    <div className="product-l">
                                                        <div className="product-l__img-wrap">

                                                            <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">

                                                                <img className="aspect__img" src="images/product/men/product10.jpg" alt="" /></a></div>
                                                        <div className="product-l__info-wrap">

                                                            <span className="product-l__category">

                                                                <a href="shop-side-version-2.html">Men Clothing</a></span>

                                                            <span className="product-l__name">

                                                                <a href="product-detail.html">New Fashion B Nice Elegant</a></span>

                                                            <span className="product-l__price">$125.00</span></div>
                                                    </div>
                                                </li>
                                                <li className="column-product__item">
                                                    <div className="product-l">
                                                        <div className="product-l__img-wrap">

                                                            <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">

                                                                <img className="aspect__img" src="images/product/women/product9.jpg" alt="" /></a></div>
                                                        <div className="product-l__info-wrap">

                                                            <span className="product-l__category">

                                                                <a href="shop-side-version-2.html">Women Clothing</a></span>

                                                            <span className="product-l__name">

                                                                <a href="product-detail.html">New Dress A Nice Elegant</a></span>

                                                            <span className="product-l__price">$125.00</span></div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 u-s-m-b-30">
                                        <div className="column-product">

                                            <span className="column-product__title u-c-secondary u-s-m-b-25">WEEKLY PRODUCTS</span>
                                            <ul className="column-product__list">
                                                <li className="column-product__item">
                                                    <div className="product-l">
                                                        <div className="product-l__img-wrap">

                                                            <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">

                                                                <img className="aspect__img" src="images/product/women/product10.jpg" alt="" /></a></div>
                                                        <div className="product-l__info-wrap">

                                                            <span className="product-l__category">

                                                                <a href="shop-side-version-2.html">Women Clothing</a></span>

                                                            <span className="product-l__name">

                                                                <a href="product-detail.html">New Dress B Nice Elegant</a></span>

                                                            <span className="product-l__price">$125.00

                                                                <span className="product-l__discount">$160</span></span></div>
                                                    </div>
                                                </li>
                                                <li className="column-product__item">
                                                    <div className="product-l">
                                                        <div className="product-l__img-wrap">

                                                            <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">

                                                                <img className="aspect__img" src="images/product/women/product11.jpg" alt="" /></a></div>
                                                        <div className="product-l__info-wrap">

                                                            <span className="product-l__category">

                                                                <a href="shop-side-version-2.html">Women Clothing</a></span>

                                                            <span className="product-l__name">

                                                                <a href="product-detail.html">New Dress C Nice Elegant</a></span>

                                                            <span className="product-l__price">$125.00

                                                                <span className="product-l__discount">$160</span></span></div>
                                                    </div>
                                                </li>
                                                <li className="column-product__item">
                                                    <div className="product-l">
                                                        <div className="product-l__img-wrap">

                                                            <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">

                                                                <img className="aspect__img" src="images/product/women/product12.jpg" alt="" /></a></div>
                                                        <div className="product-l__info-wrap">

                                                            <span className="product-l__category">

                                                                <a href="shop-side-version-2.html">Women Clothing</a></span>

                                                            <span className="product-l__name">

                                                                <a href="product-detail.html">New Dress D Nice Elegant</a></span>

                                                            <span className="product-l__price">$125.00

                                                                <span className="product-l__discount">$160</span></span></div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 u-s-m-b-30">
                                        <div className="column-product">

                                            <span className="column-product__title u-c-secondary u-s-m-b-25">FLASH PRODUCTS</span>
                                            <ul className="column-product__list">
                                                <li className="column-product__item">
                                                    <div className="product-l">
                                                        <div className="product-l__img-wrap">

                                                            <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">

                                                                <img className="aspect__img" src="images/product/women/product13.jpg" alt="" /></a></div>
                                                        <div className="product-l__info-wrap">
                                                            <div className="product-l__rating gl-rating-style"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div>

                                                            <span className="product-l__category">

                                                                <a href="shop-side-version-2.html">Women Clothing</a></span>

                                                            <span className="product-l__name">

                                                                <a href="product-detail.html">New Dress E Nice Elegant</a></span>

                                                            <span className="product-l__price">$125.00</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="column-product__item">
                                                    <div className="product-l">
                                                        <div className="product-l__img-wrap">

                                                            <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">

                                                                <img className="aspect__img" src="images/product/women/product1.jpg" alt="" /></a></div>
                                                        <div className="product-l__info-wrap">
                                                            <div className="product-l__rating gl-rating-style"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div>

                                                            <span className="product-l__category">

                                                                <a href="shop-side-version-2.html">Women Clothing</a></span>

                                                            <span className="product-l__name">

                                                                <a href="product-detail.html">Women intimate Bra</a></span>

                                                            <span className="product-l__price">$125.00</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="column-product__item">
                                                    <div className="product-l">
                                                        <div className="product-l__img-wrap">

                                                            <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">

                                                                <img className="aspect__img" src="images/product/women/product2.jpg" alt="" /></a></div>
                                                        <div className="product-l__info-wrap">
                                                            <div className="product-l__rating gl-rating-style"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div>

                                                            <span className="product-l__category">

                                                                <a href="shop-side-version-2.html">Women Clothing</a></span>

                                                            <span className="product-l__name">

                                                                <a href="product-detail.html">Women Wedding Event Dress</a></span>

                                                            <span className="product-l__price">$125.00</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*====== End - Section Content ======*/}
                    </div>
                    {/*====== End - Section 6 ======*/}


                    {/*====== Section 7 ======*/}
                    <div className="u-s-p-b-60">

                        {/*====== Section Content ======*/}
                        <div className="section__content">
                            <div className="container">

                                {/*====== Brand Slider ======*/}
                                <div className="slider-fouc">
                                    <div className="owl-carousel" id="brand-slider" data-item="5">
                                        <div className="brand-slide">

                                            <a href="shop-side-version-2.html">

                                                <img src="images/brand/b1.png" alt="" /></a></div>
                                        <div className="brand-slide">

                                            <a href="shop-side-version-2.html">

                                                <img src="images/brand/b2.png" alt="" /></a></div>
                                        <div className="brand-slide">

                                            <a href="shop-side-version-2.html">

                                                <img src="images/brand/b3.png" alt="" /></a></div>
                                        <div className="brand-slide">

                                            <a href="shop-side-version-2.html">

                                                <img src="images/brand/b4.png" alt="" /></a></div>
                                        <div className="brand-slide">

                                            <a href="shop-side-version-2.html">

                                                <img src="images/brand/b5.png" alt="" /></a></div>
                                        <div className="brand-slide">

                                            <a href="shop-side-version-2.html">

                                                <img src="images/brand/b6.png" alt="" /></a></div>
                                    </div>
                                </div>
                                {/*====== End - Brand Slider ======*/}
                            </div>
                        </div>
                        {/*====== End - Section Content ======*/}
                    </div>
                    {/*====== End - Section 7 ======*/}
                </div>
            </div>
        </div>
    )
}

export default Home
