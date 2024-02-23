import React from 'react'
import { useCart } from 'react-use-cart';
import { Route } from 'react-router-dom';
import Shop from '../../pages/Shop';

function Header() {
    const {totalUniqueItems} = useCart();
    return (
        <div>
            {/*====== Main Header ======*/}
            <header className="header--style-1">

                {/*====== Nav 1 ======*/}
                <nav className="primary-nav primary-nav-wrapper--border">
                    <div className="container">

                        {/*====== Primary Nav ======*/}
                        <div className="primary-nav">

                            {/*====== Main Logo ======*/}

                            <a className="main-logo" href="/">

                                <img src="images/logo/logo-1.png" alt="" /></a>
                            {/*====== End - Main Logo ======*/}


                            {/*====== Search Form ======*/}
                            <form className="main-form">

                                <label for="main-search"></label>

                                <input className="input-text input-text--border-radius input-text--style-1" type="text" id="main-search" placeholder="Search" />

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

                                                            <a>ARABIC</a>
                                                        </li>
                                                    </ul>
                                                    {/*====== End - Dropdown ======*/}
                                                </li>
                                                <li className="has-dropdown has-dropdown--ul-right-100">

                                                    <a>Currency<i className="fas fa-angle-down u-s-m-l-6"></i></a>

                                                    {/*====== Dropdown ======*/}

                                                    <span className="js-menu-toggle"></span>
                                                    <ul style={{ width: "225px" }}>
                                                        <li>

                                                            <a className="u-c-brand">$ - US DOLLAR</a>
                                                        </li>
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

                                            <a href="/shop">SHOP</a>

                                        </li>
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

                                                            <a href="#index.html">Home 1</a>
                                                        </li>
                                                    </ul>
                                                    {/*====== End - Dropdown ======*/}
                                                </li>
                                                <li className="has-dropdown has-dropdown--ul-left-100">

                                                    <a>Account<i className="fas fa-angle-down i-state-right u-s-m-l-6"></i></a>

                                                    {/*====== Dropdown ======*/}

                                                    <span className="js-menu-toggle"></span>
                                                    <ul style={{ width: "200px" }}>
                                                        <li>

                                                            <a href="#signin.html">Signin / Already Registered</a>
                                                        </li>

                                                    </ul>
                                                    {/*====== End - Dropdown ======*/}
                                                </li>
                                                <li>

                                                    <a href="#404.html">404</a></li>
                                            </ul>
                                            {/*====== End - Dropdown ======*/}
                                        </li>
                                        <li className="has-dropdown">

                                            <a href="/blog">BLOG</a>

                                            {/*====== Dropdown ======*/}

                                            {/* <span className="js-menu-toggle"></span>
                                            <ul style={{ width: "200px" }}>
                                                <li>

                                                    <a href="#blog-left-sidebar.html">Blog Left Sidebar</a>
                                                </li>
                                            </ul> */}
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

                                            <a href="/"><i className="fas fa-home u-c-brand"></i></a></li>
                                        <li>

                                            <a href="#wishlist.html"><i className="far fa-heart"></i></a></li>
                                        <li className="has-dropdown">

                                            <a className="mini-cart-shop-link"><i className="fas fa-shopping-bag"></i>

                                                <span className="total-item-round">{totalUniqueItems}</span></a>

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

                                                                    <img className="u-img-fluid" src="images/product/electronic/product3.jpg" alt="" /></a></div>
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
        </div>
    )
}

export default Header
