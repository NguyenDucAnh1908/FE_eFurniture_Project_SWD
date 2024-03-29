import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom'

const ThankYou = () => {

    const { id } = useParams();
    const navigate = useNavigate()
    const [orderDetail, setOrderDetail] = useState(null);



    const fetchProductDetail = async () => {
        try {
            // const res = await axios.get(``);
            const response = await axios.get("http://localhost:8080/api/v1/orders/2");
            setOrderDetail(response.data);
            console.log("Check product detail: ", response.data);
        } catch (error) {
            console.error('Error fetching order detail:', error);
        }
    };
    useEffect(() => {
        fetchProductDetail();
    }, []);
    return (
        <>
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
                                            <a href="dash-manage-order.html">My Account</a></li>
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
                                        {/* <div className="dash__box dash__box--bg-white dash__box--shadow u-s-m-b-30">
                                    <div className="dash__pad-1">
                                        <span className="dash__text u-s-m-b-16">Hello, John Doe</span>
                                        <ul className="dash__f-list">
                                            <li>
                                                <a className="dash-active" href="dashboard.html">Manage My Account</a></li>
                                            <li>
                                                <a href="dash-my-profile.html">My Profile</a></li>
                                            <li>
                                                <a href="dash-address-book.html">Address Book</a></li>
                                            <li>
                                                <a href="dash-track-order.html">Track Order</a></li>
                                            <li>
                                                <a href="dash-my-order.html">My Orders</a></li>
                                            <li>
                                                <a href="dash-payment-option.html">My Payment Options</a></li>
                                            <li>
                                                <a href="dash-cancellation.html">My Returns &amp; Cancellations</a></li>
                                        </ul>
                                    </div>
                                </div> */}
                                        {/* <div className="dash__box dash__box--bg-white dash__box--shadow dash__box--w">
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
                                </div> */}
                                        {/*====== End - Dashboard Features ======*/}
                                    </div>

                                    <div className="col-lg-9 col-md-12">
                                        <h1 className="dash__h1 u-s-m-b-30">Thank you</h1>

                                        <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30">
                                        {orderDetail && (
                                            <div className="dash__pad-2">
                                                <div className="dash-l-r">
                                                    <div>
                                                        <div className="manage-o__text-2 u-c-secondary">Order #{orderDetail.fullName}</div>
                                                        <div className="manage-o__text u-c-silver">Placed on 26 Oct 2016 09:08:37</div>
                                                    </div>
                                                    <div>
                                                        <div className="manage-o__text-2 u-c-silver">Total:
                                                            <span className="manage-o__text-2 u-c-secondary">${orderDetail.total_amount}</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            )}
                                        </div>
                                        {orderDetail && (
                                        <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30">
                                            <div className="dash__pad-2">
                                                <div className="manage-o">
                                                    <div className="manage-o__header u-s-m-b-30">
                                                        <div className="manage-o__icon"><i className="fas fa-box u-s-m-r-5" />
                                                            <span className="manage-o__text">Package 1</span></div>
                                                    </div>
                                                    <div className="dash-l-r">
                                                        <div className="manage-o__text u-c-secondary">Delivered on 26 Oct 2016</div>
                                                        <div className="manage-o__icon"><i className="fas fa-truck u-s-m-r-5" />
                                                            <span className="manage-o__text">Standard</span></div>
                                                    </div>
                                                    <div className="manage-o__timeline">
                                                        <div className="timeline-row">
                                                            <div className="col-lg-4 u-s-m-b-30">
                                                                <div className="timeline-step">
                                                                    <div className="timeline-l-i timeline-l-i--finish">
                                                                        <span className="timeline-circle" /></div>
                                                                    <span className="timeline-text">Processing</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 u-s-m-b-30">
                                                                <div className="timeline-step">
                                                                    <div className="timeline-l-i timeline-l-i--finish">
                                                                        <span className="timeline-circle" /></div>
                                                                    <span className="timeline-text">Shipped</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 u-s-m-b-30">
                                                                <div className="timeline-step">
                                                                    <div className="timeline-l-i">
                                                                        <span className="timeline-circle" /></div>
                                                                    <span className="timeline-text">Delivered</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                   
                                                    {orderDetail.order_details.map((item, index) => (
                                                        <div className="manage-o__description">
                                                            <div className="description__container">
                                                                <div className="description__img-wrap">
                                                                    <img className="u-img-fluid" src="images/product/electronic/product3.jpg" alt /></div>
                                                                <div className="description-title">Yellow Wireless Headphone</div>
                                                            </div>
                                                            <div className="description__info-wrap">
                                                                <div>
                                                                    <span className="manage-o__text-2 u-c-silver">Quantity:
                                                                        <span className="manage-o__text-2 u-c-secondary">{item.quantity}</span></span></div>
                                                                <div>
                                                                    <span className="manage-o__text-2 u-c-silver">Total:
                                                                        <span className="manage-o__text-2 u-c-secondary">${item.quantity * item.price}</span></span></div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                   
                                                </div>
                                            </div>
                                        </div>
                                        )}
                                        <div className="row">
                                            <div className="col-lg-6">
                                            {orderDetail && (
                                                <div className="dash__box dash__box--bg-white dash__box--shadow u-s-m-b-30">
                                                    <div className="dash__pad-3">
                                                        <h2 className="dash__h2 u-s-m-b-8">Shipping Address</h2>
                                                        <h2 className="dash__h2 u-s-m-b-8">{orderDetail.fullName}</h2>
                                                        <span className="dash__text-2">{orderDetail.address} - {orderDetail.ward} - {orderDetail.district} - {orderDetail.province}</span>
                                                        <span className="dash__text-2">{orderDetail.phone_number}</span>
                                                    </div>
                                                </div>
                                            )}
                                            </div>
                                            {orderDetail && (
                                            <div className="col-lg-6">
                                                <div className="dash__box dash__box--bg-white dash__box--shadow u-h-100">
                                                    <div className="dash__pad-3">
                                                        <h2 className="dash__h2 u-s-m-b-8">Total Summary</h2>
                                                        <div className="dash-l-r u-s-m-b-8">
                                                            <div className="manage-o__text-2 u-c-secondary">Subtotal</div>
                                                            <div className="manage-o__text-2 u-c-secondary">${orderDetail.sub_total}</div>
                                                        </div>
                                                        <div className="dash-l-r u-s-m-b-8">
                                                            <div className="manage-o__text-2 u-c-secondary">Discount</div>
                                                            <div className="manage-o__text-2 u-c-secondary">${orderDetail.discounts}</div>
                                                        </div>
                                                        <div className="dash-l-r u-s-m-b-8">
                                                            <div className="manage-o__text-2 u-c-secondary">Total</div>
                                                            <div className="manage-o__text-2 u-c-secondary">${orderDetail.total_amount}</div>
                                                        </div>
                                                        <span className="dash__text-2">Paid by {orderDetail.payment_method}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            )}
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

        </>
    )
}

export default ThankYou
