import React from 'react'

const EditProfile = () => {
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

                                        <a href="index">Home</a></li>
                                    <li className="is-marked">

                                        <a href="/edit-profile">My Account</a></li>
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

                                                    <a className="dash-active" href="dashboard">Manage My Account</a></li>
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
                                            <h1 className="dash__h1 u-s-m-b-14">Edit Profile</h1>

                                            <span className="dash__text u-s-m-b-30">Looks like you haven't update your profile</span>
                                            <div className="dash__link dash__link--secondary u-s-m-b-30">

                                                <a data-modal="modal" data-modal-id="#dash-newsletter">Subscribe Newsletter</a></div>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <form className="dash-edit-p">
                                                        <div className="gl-inline">
                                                            <div className="u-s-m-b-30">

                                                                <label className="gl-label" for="reg-fname">FIRST NAME *</label>

                                                                <input className="input-text input-text--primary-style" type="text" id="reg-fname" placeholder="John"/></div>
                                                            <div className="u-s-m-b-30">

                                                                <label className="gl-label" for="reg-lname">LAST NAME *</label>

                                                                <input className="input-text input-text--primary-style" type="text" id="reg-lname" placeholder="Doe"/></div>
                                                        </div>
                                                        <div className="gl-inline">
                                                            <div className="u-s-m-b-30">

                                                                {/*====== Date of Birth Select-Box ======*/}

                                                                <span className="gl-label">BIRTHDAY</span>
                                                                <div className="gl-dob"><select className="select-box select-box--primary-style">
                                                                        <option selected>Month</option>
                                                                        <option value="male">January</option>
                                                                        <option value="male">February</option>
                                                                        <option value="male">March</option>
                                                                        <option value="male">April</option>
                                                                    </select><select className="select-box select-box--primary-style">
                                                                        <option selected>Day</option>
                                                                        <option value="01">01</option>
                                                                        <option value="02">02</option>
                                                                        <option value="03">03</option>
                                                                        <option value="04">04</option>
                                                                    </select><select className="select-box select-box--primary-style">
                                                                        <option selected>Year</option>
                                                                        <option value="1991">1991</option>
                                                                        <option value="1992">1992</option>
                                                                        <option value="1993">1993</option>
                                                                        <option value="1994">1994</option>
                                                                    </select></div>
                                                                {/*====== End - Date of Birth Select-Box ======*/}
                                                            </div>
                                                            <div className="u-s-m-b-30">

                                                                <label className="gl-label" for="gender">GENDER</label><select className="select-box select-box--primary-style u-w-100" id="gender">
                                                                    <option selected>Select</option>
                                                                    <option value="male">Male</option>
                                                                    <option value="male">Female</option>
                                                                </select></div>
                                                        </div>
                                                        <div className="gl-inline">
                                                            <div className="u-s-m-b-30">
                                                                <h2 className="dash__h2 u-s-m-b-8">E-mail</h2>

                                                                <span className="dash__text">johndoe@domain.com</span>
                                                                <div className="dash__link dash__link--secondary">

                                                                    <a href="#">Change</a></div>
                                                            </div>
                                                            <div className="u-s-m-b-30">
                                                                <h2 className="dash__h2 u-s-m-b-8">Phone</h2>

                                                                <span className="dash__text">Please enter your mobile</span>
                                                                <div className="dash__link dash__link--secondary">

                                                                    <a href="#">Add</a></div>
                                                            </div>
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

export default EditProfile