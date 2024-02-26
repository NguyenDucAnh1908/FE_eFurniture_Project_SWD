import React, { useState } from 'react'

const FormCheckOut = () => {
    const [user_id, setUserId] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [discounts, setDiscounts] = useState('');
    const [notes, setNotes] = useState('');
    const [status, setStatus] = useState('');
    const [shipping_date, setShippingDate] = useState('');
    const [shipping_method, setShippingMethod] = useState('');
    const [tracking_number, setTrackingNumber] = useState('');
    const [shipping_address, setShippingAddress] = useState('');
    const [payment_method, setPaymentMethod] = useState('');
    const [coupon_id, setCouponId] = useState('');
    const [total_amount, setTotalAmount] = useState('');
    return (
        <>
            <div className="col-lg-6">
                <h1 className="checkout-f__h1">DELIVERY INFORMATION</h1>
                <form className="checkout-f__delivery">
                    <div className="u-s-m-b-30">
                        <div className="u-s-m-b-15">

                            {/*====== Check Box ======*/}
                            <div className="check-box">

                                <input type="checkbox" id="get-address" />
                                <div className="check-box__state check-box__state--primary">

                                    <label className="check-box__label" for="get-address">Use default shipping and billing address from account</label></div>
                            </div>
                            {/*====== End - Check Box ======*/}
                        </div>

                        {/*====== First Name, Last Name ======*/}
                        <div className="gl-inline">
                            <div className="u-s-m-b-15">

                                <label className="gl-label" for="billing-fname">FIRST NAME *</label>

                                <input className="input-text input-text--primary-style" type="text" id="billing-fname" data-bill="" /></div>
                            <div className="u-s-m-b-15">

                                <label className="gl-label" for="billing-lname">LAST NAME *</label>

                                <input className="input-text input-text--primary-style" type="text" id="billing-lname" data-bill="" /></div>
                        </div>
                        {/*====== End - First Name, Last Name ======*/}


                        {/*====== E-MAIL ======*/}
                        <div className="u-s-m-b-15">

                            <label className="gl-label" for="billing-email">E-MAIL *</label>

                            <input className="input-text input-text--primary-style" type="text" id="billing-email" data-bill="" /></div>
                        {/*====== End - E-MAIL ======*/}


                        {/*====== PHONE ======*/}
                        <div className="u-s-m-b-15">

                            <label className="gl-label" for="billing-phone">PHONE *</label>

                            <input className="input-text input-text--primary-style" type="text" id="billing-phone" data-bill="" /></div>
                        {/*====== End - PHONE ======*/}


                        {/*====== Street Address ======*/}
                        <div className="u-s-m-b-15">

                            <label className="gl-label" for="billing-street">STREET ADDRESS *</label>

                            <input className="input-text input-text--primary-style" type="text" id="billing-street" placeholder="House name and street name" data-bill="" /></div>
                        <div className="u-s-m-b-15">

                            <label for="billing-street-optional"></label>

                            <input className="input-text input-text--primary-style" type="text" id="billing-street-optional" placeholder="Apartment, suite unit etc. (optional)" data-bill="" /></div>
                        {/*====== End - Street Address ======*/}


                        {/*====== Country ======*/}
                        <div className="u-s-m-b-15">

                            {/*====== Select Box ======*/}

                            <label className="gl-label" for="billing-country">COUNTRY *</label><select className="select-box select-box--primary-style" id="billing-country" data-bill="">
                                <option selected value="">Choose Country</option>
                                <option value="uae">United Arab Emirate (UAE)</option>
                            </select>
                            {/*====== End - Select Box ======*/}
                        </div>
                        {/*====== End - Country ======*/}


                        {/*====== Town / City ======*/}
                        <div className="u-s-m-b-15">

                            <label className="gl-label" for="billing-town-city">TOWN/CITY *</label>

                            <input className="input-text input-text--primary-style" type="text" id="billing-town-city" data-bill="" /></div>
                        {/*====== End - Town / City ======*/}


                        {/*====== STATE/PROVINCE ======*/}
                        <div className="u-s-m-b-15">

                            {/*====== Select Box ======*/}

                            <label className="gl-label" for="billing-state">STATE/PROVINCE *</label><select className="select-box select-box--primary-style" id="billing-state" data-bill="">
                                <option selected value="">Choose State/Province</option>
                                <option value="al">Alabama</option>
                                <option value="al">Alaska</option>
                                <option value="ny">New York</option>
                            </select>
                            {/*====== End - Select Box ======*/}
                        </div>
                        {/*====== End - STATE/PROVINCE ======*/}


                        {/*====== ZIP/POSTAL ======*/}
                        <div className="u-s-m-b-15">

                            <label className="gl-label" for="billing-zip">ZIP/POSTAL CODE *</label>

                            <input className="input-text input-text--primary-style" type="text" id="billing-zip" placeholder="Zip/Postal Code" data-bill="" /></div>
                        {/*====== End - ZIP/POSTAL ======*/}
                        <div className="u-s-m-b-10">

                            {/*====== Check Box ======*/}
                            <div className="check-box">

                                <input type="checkbox" id="make-default-address" data-bill="" />
                                <div className="check-box__state check-box__state--primary">

                                    <label className="check-box__label" for="make-default-address">Make default shipping and billing address</label></div>
                            </div>
                            {/*====== End - Check Box ======*/}
                        </div>
                        <div className="u-s-m-b-10">

                            <a className="gl-link" href="#create-account" data-toggle="collapse">Want to create a new account?</a></div>
                        <div className="collapse u-s-m-b-15" id="create-account">

                            <span className="gl-text u-s-m-b-15">Create an account by entering the information below. If you are a returning customer please login at the top of the page.</span>
                            <div>

                                <label className="gl-label" for="reg-password">Account Password *</label>

                                <input className="input-text input-text--primary-style" type="text" data-bill id="reg-password" /></div>
                        </div>
                        <div className="u-s-m-b-10">

                            <label className="gl-label" for="order-note">ORDER NOTE</label><textarea className="text-area text-area--primary-style" id="order-note"></textarea></div>
                        <div>

                            <button className="btn btn--e-transparent-brand-b-2" type="submit">SAVE</button></div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default FormCheckOut
