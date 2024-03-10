import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddressBook = () => {
    const [addresses, setAddresses] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:8080/api/address/get_all_address_by_id/1')
            .then(response => {
                setAddresses(response.data.address);
            })
            .catch(error => {
                console.error('Error fetching addresses:', error);
            });
    }, []);

    return (
        <div>
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

                                            <a href="index">Home</a></li>
                                        <li className="is-marked">

                                            <a href="address-book">My Account</a></li>
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
                                                <div className="dash__address-header">
                                                    <h1 className="dash__h1">Address Book</h1>
                                                    <div>

                                                        <span className="dash__link dash__link--black u-s-m-r-8">

                                                            <a href="/address-make-default">Make default shipping address</a></span>

                                                        <span className="dash__link dash__link--black">

                                                            <a href="/address-make-default">Make default shipping address</a></span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="dash__box dash__box--shadow dash__box--bg-white dash__box--radius u-s-m-b-30">
                                            <div className="dash__table-2-wrap gl-scroll">
                                                <table className="dash__table-2">
                                                    <thead>
                                                        <tr>
                                                            <th>Action</th>
                                                            <th>Full Name</th>
                                                            <th>Address</th>

                                                            <th>Phone Number</th>
                                                            <th>Status</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        {addresses.map(address => (
                                                            <tr key={address.id}>
                                                                <td>
                                                                    <a className="address-book-edit btn--e-transparent-platinum-b-2" href={`/address-edit/${address.id}`}>Edit</a>
                                                                </td>
                                                                <td>{`${address.firstName} ${address.lastName}`}</td>
                                                                <td>{`${address.streetAddress}, ${address.wardName}, ${address.districtName}, ${address.provinceName}`}</td>

                                                                <td>{address.phoneNumber}</td>
                                                                <td>
                                                                    <div className="gl-text">Default Shipping Address</div>
                                                                    <div className="gl-text">Default Billing Address </div>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>

                                                </table>

                                            </div>
                                        </div>
                                        <div>

                                            <a className="dash__custom-link btn--e-brand-b-2" href="/edit-address"><i className="fas fa-plus u-s-m-r-8"></i>

                                                <span>Add New Address</span></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*====== End - Section Content ======*/}
                </div>
                {/*====== End - Section 2 ======*/}
            </div>
        </div>
    )
}

export default AddressBook