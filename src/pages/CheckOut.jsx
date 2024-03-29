import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import { useCart } from 'react-use-cart';
import { checkOutOrder } from '../services/CartApi/CartApi';
import { fetchAllCoupons } from '../services/CartApi/CouponApi';
import { FetchAllAddress, fetchAllAddress } from '../services/AddressApi/AddressApi';
import './ProductDetailImage.css'
import FormCheckOut from '../components/FormCheckOut/FormCheckOut'
import OrderSummary from '../components/FormCheckOut/OrderSummary'
import { UserContext } from '../context/UserContext'
import { useNavigate, useParams, Link } from 'react-router-dom'
import ClockLoader from "react-spinners/ClockLoader";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CheckOut = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate()
    const [user_id, setUserId] = useState(null);
    const [phone_number, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [fullName, setFullName] = useState('');
    const [discounts, setDiscounts] = useState('');
    const [notes, setNotes] = useState('');
    const [orderStatus, setOrderStatus] = useState(null);
    const [paymentStatus, setPaymentStatus] = useState(null);
    const [shipping_date, setShippingDate] = useState('');
    const [shipping_method, setShippingMethod] = useState('');
    const [province, setProvince] = useState('');
    const [district, setDistrict] = useState('');
    const [ward, setWard] = useState('');
    const [payment_method, setPaymentMethod] = useState('');
    const [coupon_id, setCouponId] = useState(null);
    const [total_amount, setTotalAmount] = useState(null);
    const [sub_total, setSubTotal] = useState(null);
    const [cart_items, setCartItems] = useState([]);
    const [startDate, setStartDate] = useState(null);

    const [provinceData, setProvinceData] = useState([]);
    const [districtData, setDistrictData] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [wardData, setWardData] = useState([]);
    // const [loading, setLoading] = useState(false);

    const [listAdress, setListAdress] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState(null);

    const [listCoupon, setListCoupon] = useState([]);
    const [couponCode, setCouponCode] = useState('');
    const [calculatedAmount, setCalculatedAmount] = useState(null);
    const [discountAmount, setDiscountAmount] = useState(0);

    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidShippingDate, setIsValidShippingDate] = useState(true);
    const [isCalculateClicked, setIsCalculateClicked] = useState(false);


    const [fullNameError, setFullNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [addressError, setAddressError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [provinceError, setProvinceError] = useState('');
    const [districtError, setDistrictError] = useState('');
    const [wardError, setWardError] = useState('');
    const [shippingMethodError, setShippingMethodError] = useState('');
    const [startDateError, setStartDateError] = useState('');
    const [paymentMethodError, setPaymentMethodError] = useState('');


    const validateForm = () => {
        let isValid = true;

        // Kiểm tra và cập nhật lỗi cho mỗi trường
        if (!fullName.trim()) {
            setFullNameError('Please enter your full name');
            isValid = false;
        } else {
            setFullNameError('');
        }

        if (!email.trim()) {
            setEmailError('Please enter your email');
            isValid = false;
        } else if (!isValidEmail) {
            setEmailError('Please enter a valid email address');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (!address.trim()) {
            setAddressError('Please enter your address');
            isValid = false;
        } else {
            setAddressError('');
        }

        if (!phone_number.trim()) {
            setPhoneNumberError('Please enter your phone number');
            isValid = false;
        } else {
            setPhoneNumberError('');
        }

        if (!province.trim()) {
            setProvinceError('Please enter your province');
            isValid = false;
        } else {
            setProvinceError('');
        }

        if (!district.trim()) {
            setDistrictError('Please enter your district');
            isValid = false;
        } else {
            setDistrictError('');
        }

        if (!ward.trim()) {
            setWardError('Please enter your ward');
            isValid = false;
        } else {
            setWardError('');
        }

        if (!shipping_method.trim()) {
            setShippingMethodError('Please choose shipping method');
            isValid = false;
        } else {
            setShippingMethodError('');
        }

        if (!startDate) {
            setStartDateError('Please choose shipping date');
            isValid = false;
        } else {
            setStartDateError('');
        }

        if (!payment_method) {
            setPaymentMethodError('Please choose payment method');
            isValid = false;
        } else {
            setPaymentMethodError('');
        }

        return isValid;
    };

    const [loading, setLoading] = useState(false);

    const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
        borderColor: "blue",
    };
    const addDays = (date, days) => {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    };


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

    const handlePlaceOrder = async () => {
        if (!validateForm()) {
            // Nếu form không hợp lệ, không tiến hành gửi đơn hàng
            return;
        }
        const cart_items = items.map(item => ({
            product_id: item.id,
            quantity: item.quantity
        }));
        const user_id = user.account.user.id;
        try {
            setLoading(true);
            let res = await checkOutOrder(
                user_id, address, phone_number, email, fullName, discounts, notes, 1, 1, startDate, shipping_method, province,
                district, ward, payment_method, coupon_id, total_amount, sub_total, cart_items
            );
            console.log("Check Check out order: ", res);
            const id = res.data.id;
            // console.log("Check Check out order: ", res);
            // setTimeout(() => {
            //     setLoading(false);
            emptyCart();
            navigate(`/check-out/${id}/thank-you`);
            // }, 1000);
            if (res && res.id) {
                setUserId('');
                setPhoneNumber('');
                setEmail('');
                setAddress('');
                setFullName('');
                setDiscounts('');
                setNotes('');
                setOrderStatus('');
                setPaymentStatus('');
                setStartDate('');
                setShippingMethod('');
                setProvince('');
                setDistrict('');
                setWard('');
                setPaymentMethod('');
                setCouponId('');
                setTotalAmount('');
                setSubTotal('');
                emptyCart();
                console.log("A User is created success!!");
            } else {
                console.log("An error occurred during creating order!!");
            }
        } catch (error) {
            console.error("Error creating order: ", error);
        }
    };


    useEffect(() => {
        getAddressUser();
        getListCoupon();
    }, []);

    // useEffect(() => {
    //     setSubTotal(cartTotal);
    //     setTotalAmount(calculatedAmount);
    //     setDiscounts(discountAmount.toFixed(2));
    // }, [calculatedAmount, discountAmount, cartTotal]);

    useEffect(() => {
        updateTotalAmount();
    }, [cartTotal, calculatedAmount, discountAmount, isCalculateClicked]);


    const updateTotalAmount = () => {
        const total = isCalculateClicked ? calculatedAmount : cartTotal;
        setTotalAmount(total);
        setSubTotal(cartTotal);
        let discount = 0;
        if (isCalculateClicked) {
            discount = cartTotal - calculatedAmount;
        }
        setDiscounts(discount.toFixed(2));
    };

    const getAddressUser = async () => {
        const id = user.account.user.id;
        let res = await fetchAllAddress(id);
        setListAdress(res.address)
        console.log("Check address: ", res.address)
    };

    const getListCoupon = async () => {
        let res = await fetchAllCoupons();
        setListCoupon(res)
        console.log("Check coupon: ", res)
    };
    const handleCalculateTotal = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/coupons/calculate?couponCode=${couponCode}&totalAmount=${cartTotal}`);
            const { result } = response.data;
            setCalculatedAmount(result);
            const discount = cartTotal - result;
            setDiscountAmount(discount);
            setIsCalculateClicked(true);
        } catch (error) {
            console.error('Error calculating total:', error);
        }
    };
    // const handleCouponChange = (event) => {
    //     const selectedCouponCode = event.target.value;
    //     const selectedCoupon = listCoupon.find(coupon => coupon.code === selectedCouponCode);

    //     if (selectedCoupon) {
    //         setCouponCode(selectedCoupon.code);
    //         setCouponId(selectedCoupon.id);
    //     }
    // };
    const handleCouponChange = (event) => {
        const selectedCouponCode = event.target.value;

        // Kiểm tra nếu không có mã coupon được chọn
        if (!selectedCouponCode) {
            // Cài đặt calculatedAmount bằng cartTotal
            setCalculatedAmount(cartTotal);
            // Xoá mã coupon hiện tại
            setCouponCode('');
            // Xoá ID của coupon
            setCouponId(null);
            // Kết thúc hàm
            return;
        }

        // Tìm mã coupon được chọn trong danh sách coupon
        const selectedCoupon = listCoupon.find(coupon => coupon.code === selectedCouponCode);

        if (selectedCoupon) {
            setCouponCode(selectedCoupon.code);
            setCouponId(selectedCoupon.id);
        }
    };




    const handleUseAddress = (addressItem) => {
        setProvince(addressItem.provinceName);
        setDistrict(addressItem.districtName);
        setWard(addressItem.wardName);
        setPhoneNumber(addressItem.phoneNumber);
        setAddress(addressItem.streetAddress);
        setFullName(addressItem.user.fullName);
        setSelectedAddress(addressItem);
    };

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handleSave = () => {
        console.log("Check save provinces: ", "Total amound: ", total_amount, "Discount: ", discounts)
    };

    const handleEmailChange = (event) => {
        const { value } = event.target;
        setEmail(value);

        // Kiểm tra định dạng email bằng regex
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValidEmail(emailPattern.test(value));
    };

    // const handleShippingDateChange = (event) => {
    //     const selectedDate = new Date(event.target.value);
    //     const currentDate = new Date();

    //     if (selectedDate <= currentDate) {
    //         setIsValidShippingDate(false); // Ngày giao hàng không được nhỏ hơn hoặc bằng ngày hiện tại
    //     } else {
    //         setIsValidShippingDate(true);
    //         setStartDate(event.target.value);
    //     }
    // };

    return (
        <div>
            {/* {
                loading ? <ClockLoader
                    color={'#313A46'}
                    loading={loading}
                    cssOverride={override}
                    size={70}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                /> :
                    <> */}
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

                                                        {/* <label className="check-box__label" for="get-address">Use default shipping and billing address from account</label> */}
                                                    </div>
                                                </div>
                                                {/*====== End - Check Box ======*/}
                                            </div>

                                            {/*====== First Name, Last Name ======*/}
                                            <div className="gl-inline">
                                                <div className="u-s-m-b-15">

                                                    <label className="gl-label" for="billing-lname">FULL NAME *</label>

                                                    <input
                                                        className={`input-text input-text--primary-style ${fullNameError ? '' : 'invalid-email'}`}
                                                        type="text" id="billing-lname" data-bill=""
                                                        value={fullName}
                                                        onChange={(event) => setFullName(event.target.value)}
                                                    /></div>
                                                {fullNameError && <p className="error-message">{fullNameError}</p>}
                                            </div>
                                            {/*====== End - First Name, Last Name ======*/}


                                            {/*====== E-MAIL ======*/}
                                            <div className="u-s-m-b-15">
                                                <label className="gl-label" htmlFor="billing-email">E-MAIL *</label>
                                                <input
                                                    className={`input-text input-text--primary-style ${emailError ? '' : 'invalid-email'}`}
                                                    type="text"
                                                    id="billing-email"
                                                    data-bill=""
                                                    value={email}
                                                    onChange={handleEmailChange}
                                                />
                                                {!isValidEmail && <p className="error-message">Please enter a valid email address</p>}
                                                {emailError && <p className="error-message">{emailError}</p>}
                                            </div>
                                            {/*====== End - E-MAIL ======*/}

                                            <div className="u-s-m-b-15">

                                                <label className="gl-label" for="billing-email">E-Address *</label>

                                                <input
                                                    className={`input-text input-text--primary-style ${addressError ? '' : 'invalid-email'}`}
                                                    type="text" id="billing-email" data-bill=""
                                                    value={address}
                                                    onChange={(event) => setAddress(event.target.value)}
                                                />
                                                {addressError && <p className="error-message">{addressError}</p>}
                                            </div>
                                            {/*====== PHONE ======*/}
                                            <div className="u-s-m-b-15">

                                                <label className="gl-label" for="billing-phone">PHONE *</label>

                                                <input
                                                    className={`input-text input-text--primary-style ${phoneNumberError ? '' : 'invalid-email'}`}
                                                    type="text" id="billing-phone" data-bill=""
                                                    value={phone_number}
                                                    onChange={(event) => setPhoneNumber(event.target.value)}
                                                />
                                                {phoneNumberError && <p className="error-message">{phoneNumberError}</p>}
                                            </div>
                                            {/*====== End - PHONE ======*/}
                                            <label className="gl-label" for="billing-country">STATE/PROVINCE *</label>
                                            <input
                                                className={`input-text input-text--primary-style ${provinceError ? '' : 'invalid-email'}`}
                                                type="text" id="billing-email" data-bill=""
                                                value={province}
                                                onChange={(event) => setProvince(event.target.value)}
                                                readOnly
                                            />
                                            {provinceError && <p className="error-message">{provinceError}</p>}
                                            {/*====== Country ======*/}
                                            <div className="u-s-m-b-15">

                                                {/*====== Select Box ======*/}

                                                <label className="gl-label" for="billing-country">DISTRICT *</label>
                                                <input
                                                    className={`input-text input-text--primary-style ${districtError ? '' : 'invalid-email'}`}
                                                    type="text" id="billing-email" data-bill=""
                                                    value={district}
                                                    onChange={(event) => setDistrict(event.target.value)}
                                                    readOnly
                                                />
                                                {districtError && <p className="error-message">{districtError}</p>}
                                            </div>
                                            <label className="gl-label" for="billing-country">WARD *</label>
                                            <input
                                                className={`input-text input-text--primary-style ${wardError ? '' : 'invalid-email'}`}
                                                type="text" id="billing-email" data-bill=""
                                                value={ward}
                                                onChange={(event) => setWard(event.target.value)}
                                                readOnly
                                            />
                                            {wardError && <p className="error-message">{wardError}</p>}
                                            <div className="u-s-m-b-15">
                                            </div>
                                            {/*====== End - STATE/PROVINCE ======*/}


                                            {/*====== ZIP/POSTAL ======*/}
                                            <label className="gl-label" for="billing-country">Shiping method *</label>
                                            <select 
                                            className={`input-text input-text--primary-style ${shippingMethodError ? '' : 'invalid-email'}`}
                                            id="billing-country"
                                                data-bill="" value={shipping_method}
                                                onChange={(e) => setShippingMethod(e.target.value)}
                                            >
                                                <option selected value="">Choose shipping method</option>
                                                <option value="Standard delivery">Standard delivery</option>
                                            </select>
                                            {shippingMethodError && <p className="error-message">{shippingMethodError}</p>}

                                            <div className="u-s-m-b-15">
                                                <label className="gl-label" htmlFor="shipping-date">Shipping date *</label>
                                                <DatePicker
                                                className={`input-text input-text--primary-style ${startDateError ? '' : 'invalid-email'}`}
                                                    selected={startDate}
                                                    onChange={(date) => setStartDate(date)}
                                                    minDate={new Date()}
                                                    maxDate={addDays(new Date(), 10)}
                                                    placeholderText="Select a date between today and 5 days in the future"
                                                />
                                                {startDateError && <p className="error-message">{startDateError}</p>}
                                            </div>
                                            <div className="u-s-m-b-10">

                                                <label className="gl-label" for="order-note">ORDER NOTE</label>
                                                <textarea className="text-area text-area--primary-style" id="order-note"
                                                    value={notes}
                                                    onChange={(event) => setNotes(event.target.value)}
                                                >
                                                </textarea>
                                            </div>


                                            {/* HEREFORMDONHA */}
                                            <div>

                                                <button onClick={() => handleSave()} className="btn btn--e-transparent-brand-b-2" type="submit">SAVE</button></div>
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
                                                        {listAdress && listAdress.length > 0 && listAdress.map((addressItem, index) => (
                                                            <div key={index} className="ship-b__box u-s-m-b-10">
                                                                <p className="ship-b__p">{addressItem.wardName}, {addressItem.districtName}, {addressItem.provinceName}, VNA(+84) {addressItem.phoneNumber}</p>
                                                                <button
                                                                    className={`ship-b__edit btn--e-transparent-platinum-b-2 ${selectedAddress === addressItem ? 'selectedButton' : ''}`}
                                                                    data-modal="modal"
                                                                    data-modal-id="#edit-ship-address"
                                                                    onClick={() => handleUseAddress(addressItem)}
                                                                >
                                                                    {selectedAddress === addressItem ? "Used" : "Use"}
                                                                </button>
                                                            </div>
                                                        ))}

                                                        <div className="ship-b__box">

                                                            <span className="ship-b__text">Bill to default billing address</span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="o-summary__section u-s-m-b-30">
                                                <div className="o-summary__box">
                                                    <table className="o-summary__table">
                                                        <tbody>

                                                            <tr>
                                                                <td>SUBTOTAL</td>
                                                                <td>${cartTotal}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Discount</td>
                                                                <td>$-{discountAmount.toFixed(2)}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>SHIPPING</td>
                                                                <td>Free</td>
                                                            </tr>
                                                            {/* <tr>
                                                                            <td>GRAND TOTAL</td>
                                                                            <td>${isCalculateClicked ? calculatedAmount : cartTotal}</td>
                                                                        </tr> */}
                                                            <tr>
                                                                <td>GRAND TOTAL</td>
                                                                <td>${total_amount}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>


                                            <div className="c-f u-s-m-b-16">

                                                <span className="gl-text u-s-m-b-16">Enter your coupon code if you have one.</span>
                                                {/* <form className="c-f__form"> */}
                                                <div className="u-s-m-b-16">
                                                    <div className="u-s-m-b-15">

                                                        <label for="coupon"></label>
                                                        <select className="select-box select-box--primary-style" id="billing-country" data-bill=""
                                                            onChange={handleCouponChange}
                                                        >
                                                            <option selected value="">Choose Coupon</option>
                                                            {listCoupon.map(couponItem => (
                                                                <option key={couponItem.id} value={couponItem.code}>
                                                                    {couponItem.code} ({couponItem.couponCondition.map(condition => (
                                                                        `${condition.operator} ${condition.value}`
                                                                    )).join(', ')})
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div className="u-s-m-b-15">

                                                        <button className="btn btn--e-transparent-brand-b-2" type="submit" onClick={handleCalculateTotal}>APPLY</button></div>
                                                </div>
                                                {/* </form> */}
                                            </div>
                                            <div className="o-summary__section u-s-m-b-30">
                                                <div className="o-summary__box">
                                                    <h1 className="checkout-f__h1">PAYMENT INFORMATION</h1>
                                                    <div className="u-s-m-b-10">
                                                        <div className="radio-box">
                                                            <input
                                                                className={`input-text input-text--primary-style ${paymentMethodError ? '' : 'invalid-email'}`}
                                                                type="radio"
                                                                id="cash-on-delivery"
                                                                name="payment"
                                                                value="Cash on Delivery"
                                                                onChange={handlePaymentMethodChange}
                                                            />
                                                            <div className="radio-box__state radio-box__state--primary">
                                                                <label className="radio-box__label" htmlFor="cash-on-delivery">Cash on Delivery</label>
                                                            </div>
                                                            {paymentMethodError && <p className="error-message">{paymentMethodError}</p>}
                                                        </div>
                                                        {/*====== End - Radio Box ======*/}

                                                        <span className="gl-text u-s-m-t-6">Pay Upon Cash on delivery. (This service is only available for some countries)</span>
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
            {/* </>} */}
        </div>
    )
}

export default CheckOut
