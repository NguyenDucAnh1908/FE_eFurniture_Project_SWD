import React from 'react'

const Cart = () => {
    return (
        <div>
            {/*====== App Content ======*/}
            <div className="app-content">

                {/*====== Section 1 ======*/}
                <div className="u-s-p-y-60">

                    {/*====== Section Content ======*/}
                    <div className="section__content">
                        <div className="container">
                            <div className="breadcrumb">
                                <div className="breadcrumb__wrap">
                                    <ul className="breadcrumb__list">
                                        <li className="has-separator">

                                            <a href="index.html">Home</a></li>
                                        <li className="is-marked">

                                            <a href="cart.html">Cart</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====== End - Section 1 ======*/}


                {/*====== Section 2 ======*/}
                <div className="u-s-p-b-60">

                    {/*====== Section Intro ======*/}
                    <div className="section__intro u-s-m-b-60">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section__text-wrap">
                                        <h1 className="section__heading u-c-secondary">SHOPPING CART</h1>
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
                                <div className="col-lg-12 col-md-12 col-sm-12 u-s-m-b-30">
                                    <div className="table-responsive">
                                        <table className="table-p">
                                            <tbody>

                                                {/*====== Row ======*/}
                                                <tr>
                                                    <td>
                                                        <div className="table-p__box">
                                                            <div className="table-p__img-wrap">

                                                                <img className="u-img-fluid" src="images/product/electronic/product3.jpg" alt=""/></div>
                                                            <div className="table-p__info">

                                                                <span className="table-p__name">

                                                                    <a href="product-detail.html">Yellow Wireless Headphone</a></span>

                                                                <span className="table-p__category">

                                                                    <a href="shop-side-version-2.html">Electronics</a></span>
                                                                <ul className="table-p__variant-list">
                                                                    <li>

                                                                        <span>Size: 22</span></li>
                                                                    <li>

                                                                        <span>Color: Red</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>

                                                        <span className="table-p__price">$125.00</span></td>
                                                    <td>
                                                        <div className="table-p__input-counter-wrap">

                                                            {/*====== Input Counter ======*/}
                                                            <div className="input-counter">

                                                                <span className="input-counter__minus fas fa-minus"></span>

                                                                <input className="input-counter__text input-counter--text-primary-style" type="text" value="1" data-min="1" data-max="1000"/>

                                                                    <span className="input-counter__plus fas fa-plus"></span></div>
                                                            {/*====== End - Input Counter ======*/}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="table-p__del-wrap">

                                                            <a className="far fa-trash-alt table-p__delete-link" href="#"></a></div>
                                                    </td>
                                                </tr>
                                                {/*====== End - Row ======*/}


                                                {/*====== Row ======*/}
                                                <tr>
                                                    <td>
                                                        <div className="table-p__box">
                                                            <div className="table-p__img-wrap">

                                                                <img className="u-img-fluid" src="images/product/women/product8.jpg" alt=""/></div>
                                                            <div className="table-p__info">

                                                                <span className="table-p__name">

                                                                    <a href="product-detail.html">New Dress D Nice Elegant</a></span>

                                                                <span className="table-p__category">

                                                                    <a href="shop-side-version-2.html">Women Clothing</a></span>
                                                                <ul className="table-p__variant-list">
                                                                    <li>

                                                                        <span>Size: 22</span></li>
                                                                    <li>

                                                                        <span>Color: Red</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>

                                                        <span className="table-p__price">$125.00</span></td>
                                                    <td>
                                                        <div className="table-p__input-counter-wrap">

                                                            {/*====== Input Counter ======*/}
                                                            <div className="input-counter">

                                                                <span className="input-counter__minus fas fa-minus"></span>

                                                                <input className="input-counter__text input-counter--text-primary-style" type="text" value="1" data-min="1" data-max="1000"/>

                                                                    <span className="input-counter__plus fas fa-plus"></span></div>
                                                            {/*====== End - Input Counter ======*/}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="table-p__del-wrap">

                                                            <a className="far fa-trash-alt table-p__delete-link" href="#"></a></div>
                                                    </td>
                                                </tr>
                                                {/*====== End - Row ======*/}


                                                {/*====== Row ======*/}
                                                <tr>
                                                    <td>
                                                        <div className="table-p__box">
                                                            <div className="table-p__img-wrap">

                                                                <img className="u-img-fluid" src="images/product/men/product8.jpg" alt=""/></div>
                                                            <div className="table-p__info">

                                                                <span className="table-p__name">

                                                                    <a href="product-detail.html">New Fashion D Nice Elegant</a></span>

                                                                <span className="table-p__category">

                                                                    <a href="shop-side-version-2.html">Men Clothing</a></span>
                                                                <ul className="table-p__variant-list">
                                                                    <li>

                                                                        <span>Size: 22</span></li>
                                                                    <li>

                                                                        <span>Color: Red</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>

                                                        <span className="table-p__price">$125.00</span></td>
                                                    <td>
                                                        <div className="table-p__input-counter-wrap">

                                                            {/*====== Input Counter ======*/}
                                                            <div className="input-counter">

                                                                <span className="input-counter__minus fas fa-minus"></span>

                                                                <input className="input-counter__text input-counter--text-primary-style" type="text" value="1" data-min="1" data-max="1000"/>

                                                                    <span className="input-counter__plus fas fa-plus"></span></div>
                                                            {/*====== End - Input Counter ======*/}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="table-p__del-wrap">

                                                            <a className="far fa-trash-alt table-p__delete-link" href="#"></a></div>
                                                    </td>
                                                </tr>
                                                {/*====== End - Row ======*/}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="route-box">
                                        <div className="route-box__g1">

                                            <a className="route-box__link" href="shop-side-version-2.html"><i className="fas fa-long-arrow-alt-left"></i>

                                                <span>CONTINUE SHOPPING</span></a></div>
                                        <div className="route-box__g2">

                                            <a className="route-box__link" href="cart.html"><i className="fas fa-trash"></i>

                                                <span>CLEAR CART</span></a>

                                            <a className="route-box__link" href="cart.html"><i className="fas fa-sync"></i>

                                                <span>UPDATE CART</span></a></div>
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

                    {/*====== Section Content ======*/}
                    <div className="section__content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 u-s-m-b-30">
                                    <form className="f-cart">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6 u-s-m-b-30">
                                                <div className="f-cart__pad-box">
                                                    <h1 className="gl-h1">ESTIMATE SHIPPING AND TAXES</h1>

                                                    <span className="gl-text u-s-m-b-30">Enter your destination to get a shipping estimate.</span>
                                                    <div className="u-s-m-b-30">

                                                        {/*====== Select Box ======*/}

                                                        <label className="gl-label" for="shipping-country">COUNTRY *</label><select className="select-box select-box--primary-style" id="shipping-country">
                                                            <option selected value="">Choose Country</option>
                                                            <option value="uae">United Arab Emirate (UAE)</option>
                                                            <option value="uk">United Kingdom (UK)</option>
                                                            <option value="us">United States (US)</option>
                                                        </select>
                                                        {/*====== End - Select Box ======*/}
                                                    </div>
                                                    <div className="u-s-m-b-30">

                                                        {/*====== Select Box ======*/}

                                                        <label className="gl-label" for="shipping-state">STATE/PROVINCE *</label><select className="select-box select-box--primary-style" id="shipping-state">
                                                            <option selected value="">Choose State/Province</option>
                                                            <option value="al">Alabama</option>
                                                            <option value="al">Alaska</option>
                                                            <option value="ny">New York</option>
                                                        </select>
                                                        {/*====== End - Select Box ======*/}
                                                    </div>
                                                    <div className="u-s-m-b-30">

                                                        <label className="gl-label" for="shipping-zip">ZIP/POSTAL CODE *</label>

                                                        <input className="input-text input-text--primary-style" type="text" id="shipping-zip" placeholder="Zip/Postal Code"/></div>
                                                    <div className="u-s-m-b-30">

                                                        <a className="f-cart__ship-link btn--e-transparent-brand-b-2" href="cart.html">CALCULATE SHIPPING</a></div>

                                                    <span className="gl-text">Note: There are some countries where free shipping is available otherwise our flat rate charges or country delivery charges will be apply.</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 u-s-m-b-30">
                                                <div className="f-cart__pad-box">
                                                    <h1 className="gl-h1">NOTE</h1>

                                                    <span className="gl-text u-s-m-b-30">Add Special Note About Your Product</span>
                                                    <div>

                                                        <label for="f-cart-note"></label><textarea className="text-area text-area--primary-style" id="f-cart-note"></textarea></div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 u-s-m-b-30">
                                                <div className="f-cart__pad-box">
                                                    <div className="u-s-m-b-30">
                                                        <table className="f-cart__table">
                                                            <tbody>
                                                                <tr>
                                                                    <td>SHIPPING</td>
                                                                    <td>$4.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>TAX</td>
                                                                    <td>$0.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>SUBTOTAL</td>
                                                                    <td>$379.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>GRAND TOTAL</td>
                                                                    <td>$379.00</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div>

                                                        <button className="btn btn--e-brand-b-2" type="submit"> PROCEED TO CHECKOUT</button></div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*====== End - Section Content ======*/}
                </div>
                {/*====== End - Section 3 ======*/}
            </div>
            {/*====== End - App Content ======*/}
        </div>
    )
}

export default Cart
