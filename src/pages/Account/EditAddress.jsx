import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams hook

const EditAddress = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        streetAddress: '',
        provinceCode: '',
        districtCode: '',
        wardCode: '',
        provinceName: '',
        districtName: '',
        wardName: ''
    });

    const { id } = useParams(); // Extract the id parameter from the URL

    useEffect(() => {
        // Gọi API để lấy thông tin của địa chỉ dựa trên ID
        const fetchAddress = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/address/get-address-by-id/${id}`);
                const addressData = response.data;
                // Cập nhật trạng thái của component với thông tin địa chỉ nhận được từ API
                setFormData({
                    firstName: addressData.firstName,
                    lastName: addressData.lastName,
                    phoneNumber: addressData.phoneNumber,
                    streetAddress: addressData.streetAddress,
                    provinceCode: addressData.provinceCode,
                    districtCode: addressData.districtCode,
                    provinceName: addressData.provinceName,
                    districtName: addressData.districtName,
                    wardCode: addressData.wardCode,
                    wardName: addressData.wardName

                });
            } catch (error) {
                console.error('Đã xảy ra lỗi khi lấy thông tin địa chỉ:', error);
            }
        };

        fetchAddress(); // Gọi hàm fetchAddress khi component được mount
    }, [id]);



    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);

    useEffect(() => {
        axios.get('https://online-gateway.ghn.vn/shiip/public-api/master-data/province', {
            headers: {
                'token': '05e9c956-d27f-11ee-9414-ce214539f696'
            }
        })
            .then(response => {
                const fetchedProvinces = response.data.data.map(province => ({
                    id: province.ProvinceID,
                    name: province.ProvinceName
                }));
                setProvinces(fetchedProvinces);
            })
            .catch(error => {
                console.error('Error fetching provinces:', error);
            });


    }, []);


    const handleProvinceChange = (e) => {
        const provinceCode = e.target.value;
        const provinceName = e.target.options[e.target.selectedIndex].text; 
        setFormData(prevState => ({
            ...prevState,
            provinceCode: provinceCode,
            provinceName: provinceName,
            districtCode: '', 
            districtName: '', 
            wardCode: '',     
            wardName: ''    
        }));

        axios.get(`https://online-gateway.ghn.vn/shiip/public-api/master-data/district?province_id=${provinceCode}`, {
            headers: {
                'token': '05e9c956-d27f-11ee-9414-ce214539f696'
            }
        })
            .then(response => {
                const fetchedDistricts = response.data.data.map(district => ({
                    id: district.DistrictID,
                    name: district.DistrictName
                }));
                setDistricts(fetchedDistricts);
            })
            .catch(error => {
                console.error('Error fetching districts:', error);
            });
    };

    const handleDistrictChange = (e) => {
        const districtCode = e.target.value;
        const districtName = e.target.options[e.target.selectedIndex].text;
        setFormData(prevState => ({
            ...prevState,
            districtCode: districtCode,
            districtName: districtName,
            wardCode: '', 
            wardName: ''  
        }));
        axios.get(`https://online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id=${districtCode}`, {
            headers: {
                'token': '05e9c956-d27f-11ee-9414-ce214539f696'
            }
        })
            .then(response => {
                const fetchedWards = response.data.data.map(ward => ({
                    id: ward.WardCode,
                    name: ward.WardName
                }));
                setWards(fetchedWards);
            })
            .catch(error => {
                console.error('Error fetching wards:', error);
            });
    };

    const handleWardChange = (e) => {
        const wardCode = e.target.value;
        const wardName = e.target.options[e.target.selectedIndex].text; // Lấy tên của phường/xã
        setFormData(prevState => ({
            ...prevState,
            wardCode: wardCode,
            wardName: wardName
        }));
    };




    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/api/v1/address/update/${id}`, formData);
            console.log('Địa chỉ đã được cập nhật thành công!');
        } catch (error) {
            console.error('Đã xảy ra lỗi khi cập nhật địa chỉ:', error);
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
                                            <a href="/address-edit">My Account</a></li>
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
                                                        <a href="/cancellation">My Returns &amp; Cancellations</a></li>
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
                                                            <span className="dash__w-icon dash__w-icon-style-1"><i className="fas fa-cart-arrow-down" /></span>
                                                            <span className="dash__w-text">4</span>
                                                            <span className="dash__w-name">Orders Placed</span></div>
                                                    </li>
                                                    <li>
                                                        <div className="dash__w-wrap">
                                                            <span className="dash__w-icon dash__w-icon-style-2"><i className="fas fa-times" /></span>
                                                            <span className="dash__w-text">0</span>
                                                            <span className="dash__w-name">Cancel Orders</span></div>
                                                    </li>
                                                    <li>
                                                        <div className="dash__w-wrap">
                                                            <span className="dash__w-icon dash__w-icon-style-3"><i className="far fa-heart" /></span>
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
                                                <h1 className="dash__h1 u-s-m-b-14">Edit Address</h1>
                                                {/* <span className="dash__text u-s-m-b-30">We need an address where we could deliver products.</span> */}
                                                <form className="dash-address-manipulation" onSubmit={handleSubmit}>
                                                <div>
                                                    <div className="gl-inline">
                                                        <div className="u-s-m-b-30">
                                                            <label className="gl-label" htmlFor="address-fname">FIRST NAME *</label>
                                                            <input
                                                                className="input-text input-text--primary-style"
                                                                type="text"
                                                                id="address-fname"
                                                                name="firstName"
                                                                placeholder="John Doe"
                                                                value={formData.firstName}
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                        </div>
                                                        <div className="u-s-m-b-30">
                                                            <label className="gl-label" htmlFor="address-lname">LAST NAME *</label>
                                                            <input
                                                                className="input-text input-text--primary-style"
                                                                type="text"
                                                                id="address-lname"
                                                                name="lastName"
                                                                placeholder="Doe"
                                                                value={formData.lastName}
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="gl-inline">
                                                        <div className="u-s-m-b-30">
                                                            <label className="gl-label" htmlFor="address-phoneNumber">phoneNumber *</label>
                                                            <input
                                                                className="input-text input-text--primary-style"
                                                                type="text"
                                                                id="address-phoneNumber"
                                                                name="phoneNumber"
                                                                placeholder='+84'
                                                                value={formData.phoneNumber}
                                                                onChange={handleChange}
                                                                required
                                                            /></div>
                                                        <div className="u-s-m-b-30">
                                                            <label className="gl-label" htmlFor="address-street">STREET ADDRESS *</label>
                                                            <input
                                                                className="input-text input-text--primary-style"
                                                                type="text"
                                                                id="address-street"
                                                                name="streetAddress"
                                                                placeholder="4247 Ashford Drive Virginia"
                                                                value={formData.streetAddress}
                                                                onChange={handleChange}
                                                                required
                                                            /></div>
                                                    </div>
                                                    <div className="gl-inline">
                                                        <div className="u-s-m-b-30">
                                                            {/*====== Select Box ======*/}
                                                            <label className="gl-label" htmlFor="address-country">PROVINCE *</label>
                                                            <select
                                                                className="select-box select-box--primary-style"
                                                                id="provinceCode"
                                                                name="provinceCode"
                                                                value={formData.provinceCode}
                                                                onChange={handleProvinceChange}
                                                                required
                                                            >
                                                                <option value="">Select Province</option>
                                                                {provinces.map(province => (
                                                                    <option key={province.id} value={province.id}>{province.name}</option>
                                                                ))}
                                                            </select>
                                                            <input
                                                                type="hidden"
                                                                name="provinceName"
                                                                value={formData.provinceName}
                                                            />
                                                            {/*====== End - Select Box ======*/}
                                                        </div>
                                                        <div className="u-s-m-b-30">
                                                            {/*====== Select Box ======*/}
                                                            <label className="gl-label" htmlFor="address-state">DISTRICT  *</label>
                                                            <select
                                                                className="select-box select-box--primary-style"
                                                                id="districtCode"
                                                                name="districtCode"
                                                                value={formData.districtCode}
                                                                onChange={handleDistrictChange}
                                                                required
                                                            >
                                                                <option value="">{formData.districtName}</option>
                                                                {districts.map(district => (
                                                                    <option key={district.id} value={district.id}>{district.name}</option>
                                                                ))}
                                                            </select>
                                                            <input
                                                                type="hidden"
                                                                name="districtName"
                                                                value={formData.districtName}
                                                            />
                                                            {/*====== End - Select Box ======*/}
                                                        </div>
                                                    </div>
                                                    <div className="gl-inline">
                                                        <div className="u-s-m-b-30">
                                                            <label className="gl-label" htmlFor="address-city">WARD  *</label>

                                                            <select
                                                                className="select-box select-box--primary-style"
                                                                id="wardCode"
                                                                name="wardCode"
                                                                value={formData.wardCode}
                                                                onChange={handleWardChange}
                                                                required
                                                            >
                                                                <option value="">{formData.wardName}</option>
                                                                {wards.map(ward => (
                                                                    <option key={ward.id} value={ward.id}>{ward.name}</option>
                                                                ))}
                                                            </select>
                                                            <input
                                                                type="hidden"
                                                                name="wardName"
                                                                value={formData.wardName}
                                                            />
                                                        </div>
                                                        <div className="u-s-m-b-30">
                                                        </div>
                                                    </div>
                                                    <button className="btn btn--e-brand-b-2" type="submit">SAVE</button>
                                             </div>   </form>
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

export default EditAddress