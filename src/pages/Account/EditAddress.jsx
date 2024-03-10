import React from 'react'

const EditAddress = () => {
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
                                            <a href="/">Home</a></li>
                                        <li className="is-marked">
                                            <a href="/address-edit">My Account</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====== End - Section 1 ======*/}
                {/*====== Section 2 ======*/}
                <div className="u-s-p-b-60">
                    {/*====== Section Content ======*/}
                    <div className="section__content">
                        <div className="dash">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-3 col-md-12">
                                        {/*====== Dashboard Features ======*/}
                                        <div className="dash__box dash__box--bg-white dash__box--shadow u-s-m-b-30">
                                            <div className="dash__pad-1">
                                                <span className="dash__text u-s-m-b-16">Hello, John Doe</span>
                                                <ul className="dash__f-list">
                                                    <li>
                                                        <a href="/dashboard">Manage My Account</a></li>
                                                    <li>
                                                        <a href="/my-profile">My Profile</a></li>
                                                    <li>
                                                        <a className="dash-active" href="/address-book">Address Book</a></li>
                                                    <li>
                                                        <a href="/track-order">Track Order</a></li>
                                                    <li>
                                                        <a href="/my-order">My Orders</a></li>
                                                    <li>
                                                        <a href="/payment-option">My Payment Options</a></li>
                                                    <li>
                                                        <a href="/cancellation">My Returns &amp; Cancellations</a></li>
                                                    <li>
                                                        <a href="/booking">My Booking Design</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="dash__box dash__box--bg-white dash__box--shadow dash__box--w">
                                            <div className="dash__pad-1">
                                                <ul className="dash__w-list">
                                                    <li>
                                                        <div className="dash__w-wrap">
                                                            <span className="dash__w-icon dash__w-icon-style-1"><i className="fas fa-cart-arrow-down" /></span>
                                                            <span className="dash__w-text">4</span>
                                                            <span className="dash__w-name">Orders Placed</span></div>
                                                    </li>
                                                    <li>
                                                        <div className="dash__w-wrap">
                                                            <span className="dash__w-icon dash__w-icon-style-2"><i className="fas fa-times" /></span>
                                                            <span className="dash__w-text">0</span>
                                                            <span className="dash__w-name">Cancel Orders</span></div>
                                                    </li>
                                                    <li>
                                                        <div className="dash__w-wrap">
                                                            <span className="dash__w-icon dash__w-icon-style-3"><i className="far fa-heart" /></span>
                                                            <span className="dash__w-text">0</span>
                                                            <span className="dash__w-name">Wishlist</span></div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/*====== End - Dashboard Features ======*/}
                                    </div>
                                    <div className="col-lg-9 col-md-12">
                                        <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white">
                                            <div className="dash__pad-2">
                                                <h1 className="dash__h1 u-s-m-b-14">Edit Address</h1>
                                                <span className="dash__text u-s-m-b-30">We need an address where we could deliver products.</span>
                                                <form className="dash-address-manipulation">
                                                    <div className="gl-inline">
                                                        <div className="u-s-m-b-30">
                                                            <label className="gl-label" htmlFor="address-fname">FIRST NAME *</label>
                                                            <input className="input-text input-text--primary-style" type="text" id="address-fname" placeholder="John Doe" /></div>
                                                        <div className="u-s-m-b-30">
                                                            <label className="gl-label" htmlFor="address-lname">LAST NAME *</label>
                                                            <input className="input-text input-text--primary-style" type="text" id="address-lname" placeholder="Doe" /></div>
                                                    </div>
                                                    <div className="gl-inline">
                                                        <div className="u-s-m-b-30">
                                                            <label className="gl-label" htmlFor="address-phone">PHONE *</label>
                                                            <input className="input-text input-text--primary-style" type="text" id="address-phone" placeholder="(+0) 900901904" /></div>
                                                        <div className="u-s-m-b-30">
                                                            <label className="gl-label" htmlFor="address-street">STREET ADDRESS *</label>
                                                            <input className="input-text input-text--primary-style" type="text" id="address-street" placeholder="4247 Ashford Drive Virginia" /></div>
                                                    </div>
                                                    <div className="gl-inline">
                                                        <div className="u-s-m-b-30">
                                                            {/*====== Select Box ======*/}
                                                            <label className="gl-label" htmlFor="address-country">COUNTRY *</label><select className="select-box select-box--primary-style" id="address-country">
                                                                <option selected value>Choose Country</option>
                                                                <option value="uae">United Arab Emirate (UAE)</option>
                                                                <option value="uk">United Kingdom (UK)</option>
                                                                <option value="us">United States (US)</option>
                                                            </select>
                                                            {/*====== End - Select Box ======*/}
                                                        </div>
                                                        <div className="u-s-m-b-30">
                                                            {/*====== Select Box ======*/}
                                                            <label className="gl-label" htmlFor="address-state">STATE/PROVINCE *</label><select className="select-box select-box--primary-style" id="address-state">
                                                                <option selected value>Choose State/Province</option>
                                                                <option value="al">Alabama</option>
                                                                <option value="al">Alaska</option>
                                                                <option value="ny">New York</option>
                                                            </select>
                                                            {/*====== End - Select Box ======*/}
                                                        </div>
                                                    </div>
                                                    <div className="gl-inline">
                                                        <div className="u-s-m-b-30">
                                                            <label className="gl-label" htmlFor="address-city">TOWN/CITY *</label>
                                                            <input className="input-text input-text--primary-style" type="text" id="address-city" /></div>
                                                        <div className="u-s-m-b-30">
                                                            <label className="gl-label" htmlFor="address-street">ZIP/POSTAL CODE *</label>
                                                            <input className="input-text input-text--primary-style" type="text" id="address-postal" placeholder={20006} /></div>
                                                    </div>
                                                    <button className="btn btn--e-brand-b-2" type="submit">SAVE</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*====== End - Section Content ======*/}
                </div>
                {/*====== End - Section 2 ======*/}
            </div>
            {/*====== End - App Content ======*/}

        </div>
    )
}

export default EditAddress