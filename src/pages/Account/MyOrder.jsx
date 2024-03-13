import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import { UserContext } from '../../context/UserContext'
import { Link } from 'react-router-dom';
const MyOrder = () => {
    const { user } = useContext(UserContext);
    const [orderUsers, setOrderUsers] = useState([]);

    useEffect(() => {
        fetchOrderUsers();
    }, []);

    const fetchOrderUsers = async () => {
        try {
            const id = user.account.user.id;
            const res = await axios.get(`http://localhost:8080/api/v1/orders/user/${id}`)
            setOrderUsers(res.data)
        } catch (error) {
            console.error('Error fetching order detail:', error);
        }
    }


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

                                            <a href="/my-order">My Account</a></li>
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

                                                        <a className="dash-active" href="/my-order">My Orders</a></li>
                                                    <li>

                                                        <a href="/payment-option">My Payment Options</a></li>
                                                    <li>

                                                        <a href="/cancellation">My Returns & Cancellations</a></li>
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
                                        <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30">
                                            <div className="dash__pad-2">
                                                <h1 className="dash__h1 u-s-m-b-14">My Orders</h1>

                                                <span className="dash__text u-s-m-b-30">Here you can see all products that have been delivered.</span>
                                                <form className="m-order u-s-m-b-30">
                                                    <div className="m-order__select-wrapper">

                                                        <label className="u-s-m-r-8" for="my-order-sort">Show Project Booking:</label><select className="select-box select-box--primary-style" id="my-order-sort">
                                                            <option selected> 5 ProjectBoking</option>
                                                            <option> 15 ProjectBooking</option>
                                                            <option> 30 ProjectBooking</option>


                                                            <option>All ProjectBooking</option>
                                                        </select></div>
                                                </form>
                                                {orderUsers.map((order) => (

                                                    <div className="m-order__list">
                                                        <div className="m-order__get">
                                                            <div className="manage-o__header u-s-m-b-30">
                                                                <div className="dash-l-r">
                                                                    <div>
                                                                        <div className="manage-o__text-2 u-c-secondary">Order #{order.fullName}</div>
                                                                        <div className="manage-o__text u-c-silver">Placed on {order.createdAt}</div>
                                                                    </div>
                                                                    <div>
                                                                        <div className="dash__link dash__link--brand">

                                                                            <Link to={`/manage-order/${order.id}`}>MANAGE</Link></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* <div className="manage-o__description">
                                                                <div className="description__container">
                                                                    <div className="description__img-wrap">

                                                                        <img className="u-img-fluid" src="images/product/electronic/product3.jpg" alt="" /></div>
                                                                    <div className="description-title">Yellow Wireless Headphone</div>
                                                                </div>
                                                                <div className="description__info-wrap">
                                                                    <div>

                                                                        <span className="manage-o__badge badge--processing">Processing</span></div>
                                                                    <div>

                                                                        <span className="manage-o__text-2 u-c-silver">Quantity:

                                                                            <span className="manage-o__text-2 u-c-secondary">1</span></span></div>
                                                                    <div>

                                                                        <span className="manage-o__text-2 u-c-silver">Total:

                                                                            <span className="manage-o__text-2 u-c-secondary">$16.00</span></span></div>
                                                                </div>
                                                            </div> */}
                                                        </div>
                                                    </div>
                                                ))}
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

export default MyOrder