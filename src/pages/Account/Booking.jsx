import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';

const Booking = () => {
    const [bookings, setBookings] = useState([]);
    const { user } = useContext(UserContext);
    const user_id = user.account.user.id;
    const [bookingsPage, setBookingsPage] = useState({
        totalPages: 0,
        totalElements: 0,
        currentPage: 0
    });

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async (page) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/booking/all-by-user-id/${user_id}/?page=${page}&size=10`);
            setBookingsPage({
                totalPages: response.data.totalPages,
                totalElements: response.data.totalElements,
                currentPage: response.data.number
            });
            setBookings(response.data.content);
        } catch (error) {
            console.error('Error fetching bookings:', error);
        }
    };

    const handlePageChange = (pageNumber) => {
        fetchBookings(pageNumber);
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'confirmed':
                return 'badge--shipped';
            case 'cancel':
                return 'badge--delivered';
            default:
                return 'badge--processing';
        }
    };


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

                                            <a href="/booking">Booking</a></li>
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

                                                        <a href="/payment-option">My Payment Options</a></li>
                                                    <li>

                                                        <a href="/cancellation">My Returns & Cancellations</a></li>
                                                    <li>

                                                        <a className="dash-active" href="/booking">My Booking Design</a></li>
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
                                                <h1 className="dash__h1 u-s-m-b-14">My Booking</h1>

                                                <span className="dash__text u-s-m-b-30">Here you can see all design you have booking.</span>

                                                <div className="m-booking__list">
                                                    {bookings.map(booking => (
                                                        <div className="m-order__get">
                                                            <div className="manage-o__header u-s-m-b-30">
                                                                <div className="dash-l-r">
                                                                    <div>
                                                                        <div className="manage-o__text-2 u-c-secondary">Booking #{booking.id}</div>
                                                                        <div>
                                                                            <div className="manage-o__text-2 u-c-secondary" ><span className="manage-o__text-2 u-c-silver">Meet time:   </span> August 05 2018 10:29 PM</div>
                                                                        </div>                                                                    </div>
                                                                    <div>
                                                                        <div className="dash__link dash__link--brand">

                                                                            <a href={`/view-list-projectbooking/${booking.id}`}>View Detail</a></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="manage-o__description">
                                                                <div className="description__container">
                                                                    <div className="description__img-wrap">

                                                                        <img className="u-img-fluid" src="images/product/women/product8.jpg" alt="" /></div>
                                                                    <div className="description-title">New Dress D Nice Elegant</div>
                                                                </div>
                                                                <div className="description__info-wrap">
                                                                    <div>
                                                                        <span className={`manage-o__badge badge ${getStatusColor(booking.status.toLowerCase())}`}>
                                                                            {booking.status}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>


                                                    ))}
                                                    <br />
                                                    <div className="m-booking__list">
                                                        <div className="pagination justify-content-end pr-3">
                                                            <a className="btn btn-secondary" onClick={() => handlePageChange(bookingsPage.currentPage - 1)} disabled={bookingsPage.currentPage === 0}>Previous</a>
                                                            <span className="align-self-center mr-2">&nbsp;&nbsp;Page {bookingsPage.currentPage + 1} of {bookingsPage.totalPages}&nbsp;&nbsp;</span>
                                                            <a className="btn btn-secondary" onClick={() => handlePageChange(bookingsPage.currentPage + 1)} disabled={bookingsPage.currentPage === bookingsPage.totalPages - 1}>Next</a>
                                                        </div>
                                                    </div>
                                                </div>
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

export default Booking