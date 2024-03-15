import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const DesignDetail = () => {
    const [designDetail, setDesignDetail] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/designs/get-by-id/${id}`)
            .then(response => {
                setDesignDetail(response.data);
            })
            .catch(error => {
                console.error('Error fetching design detail:', error);
            });
    }, [id]);



    const handleDownload = () => {
        window.location.href = `http://localhost:8080/api/v1/designs/download-file/${id}`;
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

                                                        <a href="/my-order">My Orders</a></li>
                                                    <li>

                                                        <a href="/payment-option">My Payment Options</a></li>
                                                    <li>

                                                        <a href="/cancellation">My Returns & Cancellations</a></li>
                                                    <li>

                                                        
                                                    <a href="/booking">My Booking Design</a>
                                                        
                                                        </li>
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
                                                {designDetail && (
                                                    <h1 className="dash__h1 u-s-m-b-14">{designDetail.codeDesign}</h1>
                                                )}

                                                {designDetail && (


                                                    <div className="m-order__list">

                                                        <div className="m-order__get">






                                                            <div className="manage-o__description">
                                                                <div className="description__container">
                                                                    <div className="description__img-wrap" >
                                                                        <img className="u-img-fluid" src={designDetail.imageUrls} alt="" />
                                                                    </div>
                                                                    <div className="description-title" >{designDetail.staffName}</div>
                                                                </div>
                                                                <div className="description__info-wrap">
                                                                    <div>
                                                                        <span className="manage-o__badge badge--delivered">{designDetail.status}</span>
                                                                    </div>
                                                                    <div>
                                                                        <span className="manage-o__text-2 u-c-silver">Note: {designDetail.note} <span className="manage-o__text-2 u-c-secondary"></span></span>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className="manage-o__header u-s-m-b-30">
                                                                <div className="dash-l-r">
                                                                    <div>

                                                                    </div>
                                                                    <div >
                                                                        <div className="manage-o__text u-c-silver" >   {designDetail.createdAt}   </div>
                                                                        <div className="dash__link dash__link--brand">
                                                                            <button onClick={handleDownload}>Download</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>




                                                        </div>


                                                        <div>

                                                            <embed src={`data:application/pdf;base64,${designDetail.fileData}`} type="application/pdf" width="100%" height="600px" />
                                                        </div>

                                                    </div>

                                                )}

                                            </div>



                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====== End - Section 2 ======*/}
            </div>
            {/*====== End - App Content ======*/}

        </div>
    )
}

export default DesignDetail