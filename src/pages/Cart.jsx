import React, { useEffect, useState } from 'react'
import CartItem from '../components/CartItem/CartItem'
import { useCart } from 'react-use-cart'
import axios from 'axios';
const Cart = () => {
    const [provinceData, setProvinceData] = useState([]);
    const [districtData, setDistrictData] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [wardData, setWardData] = useState([]);
    const [loading, setLoading] = useState(false);
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


    useEffect(() => {
        // Hàm gọi API sẽ được gọi khi component được tạo ra
        const fetchData = async () => {
            try {
                // Cấu hình headers chứa token
                const config = {
                    headers: {
                        'token': '05e9c956-d27f-11ee-9414-ce214539f696'
                    }
                };

                // Gọi API từ URL đã cung cấp và truyền cấu hình headers
                const response = await axios.get('https://online-gateway.ghn.vn/shiip/public-api/master-data/province', config);

                // Lấy dữ liệu từ phản hồi API và lưu vào state
                setProvinceData(response.data.data);
            } catch (error) {
                // Xử lý lỗi nếu có
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        // Gọi hàm fetchData để lấy dữ liệu từ API
        fetchData();
    }, []);

    const handleProvinceChange = async (e) => {
        const selectedProvinceID = e.target.value;
        setSelectedProvince(selectedProvinceID);
        try {
            // Cấu hình headers chứa token
            const config = {
                headers: {
                    'token': '05e9c956-d27f-11ee-9414-ce214539f696'
                }
            };
            setLoading(true);
            const response = await axios.get(`https://online-gateway.ghn.vn/shiip/public-api/master-data/district?province_id=${selectedProvinceID}`, config);
            setDistrictData(response.data.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching district data:', error);
            setLoading(false);
        }
    };

    const handleDistrictChange = async (e) => {
        const selectedDistrictID = e.target.value;
        setSelectedDistrict(selectedDistrictID);
        try {
            // Cấu hình headers chứa token
            const config = {
                headers: {
                    'token': '05e9c956-d27f-11ee-9414-ce214539f696'
                }
            };
            setLoading(true);
            const response = await axios.get(`https://online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id=${selectedDistrictID}`, config);
            setWardData(response.data.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching ward data:', error);
            setLoading(false);
        }
    };

    if (isEmpty) return
    <h1>Chua mua hang kia DMM</h1>
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

                                            <a href="cart.html">Cart</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====== End - Section 1 ======*/}


                {/*====== Section 2 ======*/}
                <div className="u-s-p-b-60">

                    {/*====== Section Intro ======*/}
                    <div className="section__intro u-s-m-b-60">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section__text-wrap">
                                        <h1 className="section__heading u-c-secondary">SHOPPING CART</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*====== End - Section Intro ======*/}


                    {/*====== Section Content ======*/}
                    <div className="section__content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 u-s-m-b-30">
                                    <div className="table-responsive">
                                        <table className="table-p">
                                            <tbody>

                                                {/*====== Row ======*/}
                                                <CartItem
                                                    items={items}
                                                    updateItemQuantity={updateItemQuantity}
                                                    removeItem={removeItem}
                                                />
                                                {/*====== End - Row ======*/}

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="route-box">
                                        <div className="route-box__g1">

                                            <a className="route-box__link" href="shop-side-version-2.html"><i className="fas fa-long-arrow-alt-left"></i>

                                                <span>CONTINUE SHOPPING</span></a></div>
                                        <div className="route-box__g2">

                                            <a className="route-box__link" href="/"><i className="fas fa-trash"></i>

                                                <span onClick={() => emptyCart()}>CLEAR CART</span>
                                            </a>

                                            {/* <a className="route-box__link" href="cart.html"><i className="fas fa-sync"></i>

                                                <span>UPDATE CART</span></a> */}
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
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 u-s-m-b-30">
                                    <form className="f-cart">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6 u-s-m-b-30">
                                                <div className="f-cart__pad-box">
                                                    <h1 className="gl-h1">ESTIMATE SHIPPING AND TAXES</h1>

                                                    <span className="gl-text u-s-m-b-30">Enter your destination to get a shipping estimate.</span>
                                                    <div className="u-s-m-b-30">

                                                        {/*====== Select Box ======*/}
                                                        <label className="gl-label" htmlFor="shipping-state">STATE/PROVINCE *</label>
                                                        <select className="select-box select-box--primary-style" id="shipping-state" onChange={handleProvinceChange} value={selectedProvince}>
                                                            <option value="">Choose State/Province</option>
                                                            {provinceData.map(province => (
                                                                <option key={province.ProvinceID} value={province.ProvinceID}>{province.ProvinceName}</option>
                                                            ))}
                                                        </select>

                                                        {/*====== End - Select Box ======*/}
                                                    </div>
                                                    <div className="u-s-m-b-30">

                                                        {/*====== Select Box ======*/}

                                                        <label className="gl-label" htmlFor="shipping-district">DISTRICT *</label>
                                                        <select className="select-box select-box--primary-style" id="shipping-district" onChange={handleDistrictChange} value={selectedDistrict}>
                                                            <option value="">Choose District</option>
                                                            {districtData.map(district => (
                                                                <option key={district.DistrictID} value={district.DistrictID}>{district.DistrictName}</option>
                                                            ))}
                                                        </select>
                                                        {/*====== End - Select Box ======*/}
                                                    </div>
                                                    <div className="u-s-m-b-30">

                                                        <label className="gl-label" htmlFor="shipping-ward">WARD *</label>
                                                        <select className="select-box select-box--primary-style" id="shipping-ward">
                                                            <option value="">Choose Ward</option>
                                                            {wardData.map(ward => (
                                                                <option key={ward.WardCode} value={ward.WardName}>{ward.WardName}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div className="u-s-m-b-30">

                                                        <a className="f-cart__ship-link btn--e-transparent-brand-b-2" href="cart.html">CALCULATE SHIPPING</a></div>

                                                    <span className="gl-text">Note: There are some countries where free shipping is available otherwise our flat rate charges or country delivery charges will be apply.</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 u-s-m-b-30">
                                                <div className="f-cart__pad-box">
                                                    <h1 className="gl-h1">NOTE</h1>

                                                    <span className="gl-text u-s-m-b-30">Add Special Note About Your Product</span>
                                                    <div>

                                                        <label for="f-cart-note"></label><textarea className="text-area text-area--primary-style" id="f-cart-note"></textarea></div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 u-s-m-b-30">
                                                <div className="f-cart__pad-box">
                                                    <div className="u-s-m-b-30">
                                                        <table className="f-cart__table">
                                                            <tbody>
                                                                <tr>
                                                                    <td>SHIPPING</td>
                                                                    <td>${cartTotal}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>TAX</td>
                                                                    <td>$0.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>SUBTOTAL</td>
                                                                    <td>${cartTotal}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>GRAND TOTAL</td>
                                                                    <td>${cartTotal}</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div>

                                                        <button className="btn btn--e-brand-b-2" type="submit"> PROCEED TO CHECKOUT</button></div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
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

export default Cart
