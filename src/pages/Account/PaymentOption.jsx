import React from 'react'

const PaymentOption = () => {
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

                                        <a href="/payment-option">My Account</a></li>
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

                                                    <a href="/address-book">Address Book</a></li>
                                                <li>

                                                    <a href="/track-order">Track Order</a></li>
                                                <li>

                                                    <a href="/my-order">My Orders</a></li>
                                                <li>

                                                    <a className="dash-active" href="/payment-option">My Payment Options</a></li>
                                                <li>

                                                    <a href="/cancellation">My Returns & Cancellations</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="dash__box dash__box--bg-white dash__box--shadow dash__box--w">
                                        <div className="dash__pad-1">
                                            <ul className="dash__w-list">
                                                <li>
                                                    <div className="dash__w-wrap">

                                                        <span className="dash__w-icon dash__w-icon-style-1"><i className="fas fa-cart-arrow-down"></i></span>

                                                        <span className="dash__w-text">4</span>

                                                        <span className="dash__w-name">Orders Placed</span></div>
                                                </li>
                                                <li>
                                                    <div className="dash__w-wrap">

                                                        <span className="dash__w-icon dash__w-icon-style-2"><i className="fas fa-times"></i></span>

                                                        <span className="dash__w-text">0</span>

                                                        <span className="dash__w-name">Cancel Orders</span></div>
                                                </li>
                                                <li>
                                                    <div className="dash__w-wrap">

                                                        <span className="dash__w-icon dash__w-icon-style-3"><i className="far fa-heart"></i></span>

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
                                            <h1 className="dash__h1 u-s-m-b-14">My Payment Options</h1>

                                            <span className="dash__text">No payment options</span>
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

export default PaymentOption