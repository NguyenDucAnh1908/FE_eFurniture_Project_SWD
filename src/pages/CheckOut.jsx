import React, { useState } from 'react'
import { useCart } from 'react-use-cart'
import { checkOutOrder } from '../services/CartApi/CartApi'
import FormCheckOut from '../components/FormCheckOut/FormCheckOut'
import OrderSummary from '../components/FormCheckOut/OrderSummary'

const CheckOut = () => {
    const [user_id, setUserId] = useState(null);
    const [phone_number, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [fullName, setFullName] = useState('');
    const [discounts, setDiscounts] = useState('');
    const [notes, setNotes] = useState('');
    const [status, setStatus] = useState(null);
    const [shipping_date, setShippingDate] = useState('');
    const [shipping_method, setShippingMethod] = useState('');
    const [tracking_number, setTrackingNumber] = useState('');
    const [shipping_address, setShippingAddress] = useState(null);
    const [payment_method, setPaymentMethod] = useState('');
    const [coupon_id, setCouponId] = useState(null);
    const [total_amount, setTotalAmount] = useState(null);
    const [cart_items, setCartItems] = useState([]);
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

        // console.log("Check place order: ", "userId: ", user_id,);
        // items.forEach((item, index) => {
        //     console.log("Check place order: ", "userId: ", user_id,);
        //     const { quantity, id } = item;
        //     console.log(`Item ${index + 1}:`);
        //     console.log(" - ID:", id);
        //     console.log(" - Quantity:", quantity);
        // });
    const handlePlaceOrder = async () => {
        const cart_items = items.map(item => ({
            product_id: item.id,
            quantity: item.quantity
        }));
        let res = await checkOutOrder(
            user_id,
            address,
            phone_number,
            email,
            fullName,
            discounts,
            notes, status,
            shipping_date,
            shipping_method,
            tracking_number,
            shipping_address,
            payment_method,
            coupon_id,
            total_amount,
            cart_items
        );
        console.log("Check Check out order: ", res);
        // if (res && res.id) {
        //     setUserId('');
        //     setPhoneNumber('');
        //     setEmail('');
        //     setAddress('')
        //     setFullName('');
        //     setDiscounts('');
        //     setNotes('');
        //     setStatus('');
        //     setShippingDate('');
        //     setShippingMethod('');
        //     setTrackingNumber('');
        //     setShippingAddress('');
        //     setPaymentMethod('');
        //     setCouponId('');
        //     setTotalAmount('');
        //     setCartItems([]);
        //     console.log("A User is created success!!")
        // } else {
        //     console.log("A user is created error!!");
        // }
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

                                            <a href="index.html">Home</a></li>
                                        <li className="is-marked">

                                            <a href="checkout.html">Checkout</a></li>
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
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div id="checkout-msg-group">
                                        <div className="msg u-s-m-b-30">

                                            <span className="msg__text">Returning customer?

                                                <a className="gl-link" href="#return-customer" data-toggle="collapse">Click here to login</a></span>
                                            <div className="collapse" id="return-customer" data-parent="#checkout-msg-group">
                                                <div className="l-f u-s-m-b-16">

                                                    <span className="gl-text u-s-m-b-16">If you have an account with us, please log in.</span>
                                                    <form className="l-f__form">
                                                        <div className="gl-inline">
                                                            <div className="u-s-m-b-15">

                                                                <label className="gl-label" for="login-email">E-MAIL *</label>

                                                                <input className="input-text input-text--primary-style" type="text" id="login-email" placeholder="Enter E-mail" /></div>
                                                            <div className="u-s-m-b-15">

                                                                <label className="gl-label" for="login-password">PASSWORD *</label>

                                                                <input className="input-text input-text--primary-style" type="text" id="login-password" placeholder="Enter Password" /></div>
                                                        </div>
                                                        <div className="gl-inline">
                                                            <div className="u-s-m-b-15">

                                                                <button className="btn btn--e-transparent-brand-b-2" type="submit">LOGIN</button></div>
                                                            <div className="u-s-m-b-15">

                                                                <a className="gl-link" href="lost-password.html">Lost Your Password?</a></div>
                                                        </div>
                                                        {/*====== Check Box ======*/}
                                                        <div className="check-box">
                                                            <input type="checkbox" id="remember-me" />
                                                            <div className="check-box__state check-box__state--primary">
                                                                <label className="check-box__label" for="remember-me">Remember Me</label>
                                                            </div>
                                                        </div>
                                                        {/*====== End - Check Box ======*/}
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="msg">

                                            <span className="msg__text">Have a coupon?

                                                <a className="gl-link" href="#have-coupon" data-toggle="collapse">Click Here to enter your code</a></span>
                                            <div className="collapse" id="have-coupon" data-parent="#checkout-msg-group">
                                                <div className="c-f u-s-m-b-16">

                                                    <span className="gl-text u-s-m-b-16">Enter your coupon code if you have one.</span>
                                                    <form className="c-f__form">
                                                        <div className="u-s-m-b-16">
                                                            <div className="u-s-m-b-15">

                                                                <label for="coupon"></label>

                                                                <input className="input-text input-text--primary-style" type="text" id="coupon" placeholder="Coupon Code" /></div>
                                                            <div className="u-s-m-b-15">

                                                                <button className="btn btn--e-transparent-brand-b-2" type="submit">APPLY</button></div>
                                                        </div>
                                                    </form>
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


                {/*====== Section 3 ======*/}
                <div className="u-s-p-b-60">

                    {/*====== Section Content ======*/}
                    <div className="section__content">
                        <div className="container">
                            <div className="checkout-f">
                                <div className="row">
                                    {/* FormCheckOut */}
                                    <div className="col-lg-6">
                                        <h1 className="checkout-f__h1">DELIVERY INFORMATION</h1>
                                        {/* <form className="checkout-f__delivery"> */}
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

                                                    <label className="gl-label" for="billing-fname">user_id *</label>

                                                    <input className="input-text input-text--primary-style" type="text" id="billing-fname" data-bill=""
                                                        value={user_id}
                                                        onChange={(event) => setUserId(event.target.value)}
                                                    /></div>
                                                <div className="u-s-m-b-15">

                                                    <label className="gl-label" for="billing-lname">LAST NAME *</label>

                                                    <input className="input-text input-text--primary-style" type="text" id="billing-lname" data-bill="" /></div>
                                            </div>
                                            {/*====== End - First Name, Last Name ======*/}


                                            {/*====== E-MAIL ======*/}
                                            <div className="u-s-m-b-15">

                                                <label className="gl-label" for="billing-email">E-MAIL *</label>

                                                <input className="input-text input-text--primary-style" type="text" id="billing-email" data-bill=""
                                                    value={email}
                                                    onChange={(event) => setEmail(event.target.value)}
                                                /></div>
                                            {/*====== End - E-MAIL ======*/}

                                            <div className="u-s-m-b-15">

                                                <label className="gl-label" for="billing-email">E-Address *</label>

                                                <input className="input-text input-text--primary-style" type="text" id="billing-email" data-bill=""
                                                    value={address}
                                                    onChange={(event) => setAddress(event.target.value)}
                                                /></div>
                                            {/*====== PHONE ======*/}
                                            <div className="u-s-m-b-15">

                                                <label className="gl-label" for="billing-phone">PHONE *</label>

                                                <input className="input-text input-text--primary-style" type="text" id="billing-phone" data-bill=""
                                                    value={phone_number}
                                                    onChange={(event) => setPhoneNumber(event.target.value)}
                                                /></div>
                                            {/*====== End - PHONE ======*/}
                                            <div className="u-s-m-b-15">

                                                <label className="gl-label" for="billing-email">E-fullName *</label>

                                                <input className="input-text input-text--primary-style" type="text" id="billing-email" data-bill=""
                                                    value={fullName}
                                                    onChange={(event) => setFullName(event.target.value)}
                                                />
                                            </div>
                                            <div className="u-s-m-b-15">

                                                <label className="gl-label" for="billing-email">E-discounts *</label>

                                                <input className="input-text input-text--primary-style" type="text" id="billing-email" data-bill=""
                                                    value={discounts}
                                                    onChange={(event) => setDiscounts(event.target.value)}
                                                />
                                            </div>
                                            <div className="u-s-m-b-15">

                                                <label className="gl-label" for="billing-email">E-setNotes *</label>

                                                <input className="input-text input-text--primary-style" type="text" id="billing-email" data-bill=""
                                                    value={notes}
                                                    onChange={(event) => setNotes(event.target.value)}
                                                />
                                            </div>
                                            <div className="u-s-m-b-15">

                                                <label className="gl-label" for="billing-email">E-setStatus *</label>

                                                <input className="input-text input-text--primary-style" type="text" id="billing-email" data-bill=""
                                                    value={status}
                                                    onChange={(event) => setStatus(event.target.value)}
                                                />
                                            </div>
                                            <div className="u-s-m-b-15">

                                                <label className="gl-label" for="billing-email">E-shipping_date *</label>

                                                <input className="input-text input-text--primary-style" type="text" id="billing-email" data-bill=""
                                                    value={shipping_date}
                                                    onChange={(event) => setShippingDate(event.target.value)}
                                                />
                                            </div>
                                            <div className="u-s-m-b-15">

                                                <label className="gl-label" for="billing-email">E-setShippingMethod *</label>

                                                <input className="input-text input-text--primary-style" type="text" id="billing-email" data-bill=""
                                                    value={shipping_method}
                                                    onChange={(event) => setShippingMethod(event.target.value)}
                                                />
                                            </div>
                                            <div className="u-s-m-b-15">

                                                <label className="gl-label" for="billing-email">E-tracking_number *</label>

                                                <input className="input-text input-text--primary-style" type="text" id="billing-email" data-bill=""
                                                    value={tracking_number}
                                                    onChange={(event) => setTrackingNumber(event.target.value)}
                                                />
                                            </div>
                                            <div className="u-s-m-b-15">

                                                <label className="gl-label" for="billing-email">E-shipping_address *</label>

                                                <input className="input-text input-text--primary-style" type="text" id="billing-email" data-bill=""
                                                    value={shipping_address}
                                                    onChange={(event) => setShippingAddress(event.target.value)}
                                                />
                                            </div>
                                            <div className="u-s-m-b-15">

                                                <label className="gl-label" for="billing-email">E-payment_method *</label>

                                                <input className="input-text input-text--primary-style" type="text" id="billing-email" data-bill=""
                                                    value={payment_method}
                                                    onChange={(event) => setPaymentMethod(event.target.value)}
                                                />
                                            </div>
                                            <div className="u-s-m-b-15">

                                                <label className="gl-label" for="billing-email">E-setCouponId *</label>

                                                <input className="input-text input-text--primary-style" type="text" id="billing-email" data-bill=""
                                                    value={coupon_id}
                                                    onChange={(event) => setCouponId(event.target.value)}
                                                />
                                            </div>
                                            <div className="u-s-m-b-15">

                                                <label className="gl-label" for="billing-email">E-total_amount *</label>

                                                <input className="input-text input-text--primary-style" type="text" id="billing-email" data-bill=""
                                                    value={total_amount}
                                                    onChange={(event) => setTotalAmount(event.target.value)}
                                                />
                                            </div>


                                            {/* HEREFORMDONHA */}
                                            <div>

                                                <button onClick={() => handlePlaceOrder()} className="btn btn--e-transparent-brand-b-2" type="submit">SAVE</button></div>
                                        </div>
                                        {/* </form> */}
                                    </div>
                                    <div className="col-lg-6">
                                        <h1 className="checkout-f__h1">ORDER SUMMARY</h1>

                                        {/*====== Order Summary ======*/}
                                        <div className="o-summary">
                                            {/* summary */}
                                            <div className="o-summary__section u-s-m-b-30">
                                                <div className="o-summary__item-wrap gl-scroll">
                                                    {items.map((item, index) => (
                                                        <div key={index} className="o-card">
                                                            <div className="o-card__flex">
                                                                <div className="o-card__img-wrap">

                                                                    <img className="u-img-fluid" src={item.thumbnail} alt="" /></div>
                                                                <div className="o-card__info-wrap">

                                                                    <span className="o-card__name">

                                                                        <a href="product-detail.html">{item.name}</a></span>

                                                                    <span className="o-card__quantity">Quantity x {item.quantity}</span>

                                                                    <span className="o-card__price">${item.price}</span></div>
                                                            </div>
                                                            <a className="o-card__del far fa-trash-alt"></a>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="o-summary__section u-s-m-b-30">
                                                <div className="o-summary__box">
                                                    <h1 className="checkout-f__h1">SHIPPING & BILLING</h1>
                                                    <div className="ship-b">

                                                        <span className="ship-b__text">Ship to:</span>
                                                        <div className="ship-b__box u-s-m-b-10">
                                                            <p className="ship-b__p">4247 Ashford Drive Virginia VA-20006 USA (+0) 900901904</p>

                                                            <a className="ship-b__edit btn--e-transparent-platinum-b-2" data-modal="modal" data-modal-id="#edit-ship-address">Edit</a>
                                                        </div>
                                                        <div className="ship-b__box">

                                                            <span className="ship-b__text">Bill to default billing address</span>

                                                            <a className="ship-b__edit btn--e-transparent-platinum-b-2" data-modal="modal" data-modal-id="#edit-ship-address">Edit</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="o-summary__section u-s-m-b-30">
                                                <div className="o-summary__box">
                                                    <table className="o-summary__table">
                                                        <tbody>
                                                            <tr>
                                                                <td>SHIPPING</td>
                                                                <td>$4.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>TAX</td>
                                                                <td>$0.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>SUBTOTAL</td>
                                                                <td>$379.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>GRAND TOTAL</td>
                                                                <td>$379.00</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="o-summary__section u-s-m-b-30">
                                                <div className="o-summary__box">
                                                    <h1 className="checkout-f__h1">PAYMENT INFORMATION</h1>
                                                    {/* <form className="checkout-f__payment"> */}
                                                    <div className="u-s-m-b-10">

                                                        {/*====== Radio Box ======*/}
                                                        <div className="radio-box">

                                                            <input type="radio" id="cash-on-delivery" name="payment" />
                                                            <div className="radio-box__state radio-box__state--primary">

                                                                <label className="radio-box__label" for="cash-on-delivery">Cash on Delivery</label></div>
                                                        </div>
                                                        {/*====== End - Radio Box ======*/}

                                                        <span className="gl-text u-s-m-t-6">Pay Upon Cash on delivery. (This service is only available for some countries)</span>
                                                    </div>
                                                    <div className="u-s-m-b-10">

                                                        {/*====== Radio Box ======*/}
                                                        <div className="radio-box">

                                                            <input type="radio" id="direct-bank-transfer" name="payment" />
                                                            <div className="radio-box__state radio-box__state--primary">

                                                                <label className="radio-box__label" for="direct-bank-transfer">Direct Bank Transfer</label></div>
                                                        </div>
                                                        {/*====== End - Radio Box ======*/}

                                                        <span className="gl-text u-s-m-t-6">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</span>
                                                    </div>
                                                    <div className="u-s-m-b-10">

                                                        {/*====== Radio Box ======*/}
                                                        <div className="radio-box">

                                                            <input type="radio" id="pay-with-check" name="payment" />
                                                            <div className="radio-box__state radio-box__state--primary">

                                                                <label className="radio-box__label" for="pay-with-check">Pay With Check</label></div>
                                                        </div>
                                                        {/*====== End - Radio Box ======*/}

                                                        <span className="gl-text u-s-m-t-6">Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</span>
                                                    </div>
                                                    <div className="u-s-m-b-10">

                                                        {/*====== Radio Box ======*/}
                                                        <div className="radio-box">

                                                            <input type="radio" id="pay-with-card" name="payment" />
                                                            <div className="radio-box__state radio-box__state--primary">

                                                                <label className="radio-box__label" for="pay-with-card">Pay With Credit / Debit Card</label></div>
                                                        </div>
                                                        {/*====== End - Radio Box ======*/}

                                                        <span className="gl-text u-s-m-t-6">International Credit Cards must be eligible for use within the United States.</span>
                                                    </div>
                                                    <div className="u-s-m-b-10">

                                                        {/*====== Radio Box ======*/}
                                                        <div className="radio-box">

                                                            <input type="radio" id="pay-pal" name="payment" />
                                                            <div className="radio-box__state radio-box__state--primary">

                                                                <label className="radio-box__label" for="pay-pal">Pay Pal</label></div>
                                                        </div>
                                                        {/*====== End - Radio Box ======*/}

                                                        <span className="gl-text u-s-m-t-6">When you click "Place Order" below we'll take you to Paypal's site to set up your billing information.</span>
                                                    </div>
                                                    <div className="u-s-m-b-15">

                                                        {/*====== Check Box ======*/}
                                                        <div className="check-box">

                                                            <input type="checkbox" id="term-and-condition" />
                                                            <div className="check-box__state check-box__state--primary">

                                                                <label className="check-box__label" for="term-and-condition">I consent to the</label></div>
                                                        </div>
                                                        {/*====== End - Check Box ======*/}

                                                        <a className="gl-link">Terms of Service.</a>
                                                    </div>
                                                    <div>

                                                        <button className="btn btn--e-brand-b-2" type="submit"
                                                            onClick={() => handlePlaceOrder()}
                                                        >PLACE ORDER</button></div>
                                                    {/* </form> */}
                                                </div>
                                            </div>
                                        </div>
                                        {/*====== End - Order Summary ======*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*====== End - Section Content ======*/}
                </div>
                {/*====== End - Section 3 ======*/}
            </div>
            {/*====== End - App Content ======*/}
        </div>
    )
}

export default CheckOut
