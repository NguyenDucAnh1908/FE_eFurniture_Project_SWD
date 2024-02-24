import React from 'react'

const DefaultAddress = () => {
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
                                            <a href="/address-make-default">My Account</a></li>
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
                                                        <a href="dashboard">Manage My Account</a></li>
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
                                        <form className="dash__address-make">
                                            <div className="dash__box dash__box--shadow dash__box--bg-white dash__box--radius u-s-m-b-30">
                                                <h2 className="dash__h2 u-s-p-xy-20">Make default Shipping Address</h2>
                                                <div className="dash__table-2-wrap gl-scroll">
                                                    <table className="dash__table-2">
                                                        <thead>
                                                            <tr>
                                                                <th>Action</th>
                                                                <th>Full Name</th>
                                                                <th>Address</th>
                                                                <th>Region</th>
                                                                <th>Phone Number</th>
                                                                <th>Status</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    {/*====== Radio Box ======*/}
                                                                    <div className="radio-box">
                                                                        <input type="radio" id="address-1" name="default-address" defaultChecked />
                                                                        <div className="radio-box__state radio-box__state--primary">
                                                                            <label className="radio-box__label" htmlFor="address-1" /></div>
                                                                    </div>
                                                                    {/*====== End - Radio Box ======*/}
                                                                </td>
                                                                <td>John Doe</td>
                                                                <td>4247 Ashford Drive Virginia VA-20006 USA</td>
                                                                <td>Virginia VA-20006 USA</td>
                                                                <td>(+0) 900901904</td>
                                                                <td>
                                                                    <div className="gl-text">Default Shipping Address</div>
                                                                    <div className="gl-text">Default Billing Address</div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    {/*====== Radio Box ======*/}
                                                                    <div className="radio-box">
                                                                        <input type="radio" id="address-2" name="default-address" />
                                                                        <div className="radio-box__state radio-box__state--primary">
                                                                            <label className="radio-box__label" htmlFor="address-2" /></div>
                                                                    </div>
                                                                    {/*====== End - Radio Box ======*/}
                                                                </td>
                                                                <td>Doe John</td>
                                                                <td>1484 Abner Road</td>
                                                                <td>Eau Claire WI - Wisconsin</td>
                                                                <td>(+0) 7154419563</td>
                                                                <td />
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div>
                                                <button className="btn btn--e-brand-b-2" type="submit">SAVE</button></div>
                                        </form>
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

export default DefaultAddress