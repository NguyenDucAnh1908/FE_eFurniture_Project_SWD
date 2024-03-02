// import axios from '../customize-axios'
import axios from 'axios';

const checkOutOrder = (
    user_id,
    address,
    phone_number,
    email,
    fullName,
    discounts,
    notes, status,
    shipping_date,
    shipping_method,
    province,
    district,
    ward,
    payment_method,
    coupon_id,
    total_amount,
    cart_items
) => {
    const token = localStorage.getItem("jwt");
    return axios.post("http://localhost:8080/api/v1/orders", {
        user_id,
        address,
        phone_number,
        email,
        fullName,
        discounts,
        notes,
        status,
        shipping_date,
        shipping_method,
        province,
        district,
        ward,
        payment_method,
        coupon_id,
        total_amount,
        cart_items
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};


export { checkOutOrder };
