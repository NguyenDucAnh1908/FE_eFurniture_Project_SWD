import axios from '../customize-axios'

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
    tracking_number,
    shipping_address,
    payment_method,
    coupon_id,
    total_amount,
    cart_items
) => {
    return axios.post("/orders", {
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
        tracking_number,
        shipping_address,
        payment_method,
        coupon_id,
        total_amount,
        cart_items
    });
};


export { checkOutOrder };
