import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddressBookEdit = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        streetAddress: '',
        provinceCode: '',
        districtCode: '',
        wardCode: '',
        provinceName: '',
        districtName: '',
        wardName: ''
    });

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

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

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8080/api/v1/address/create_address/1`, formData)
            .then(response => {
                console.log('Address created successfully:', response.data);
            })
            .catch(error => {
                console.error('Error creating address:', error);
                // Handle error
            });
    };




    return (
        <>
            {/*====== App Content ======*/}
            <div class="app-content">

                {/*====== Section 1 ======*/}
                <div class="u-s-p-y-60">

                    {/*====== Section Content ======*/}
                    <div class="section__content">
                        <div class="container">
                            <div class="breadcrumb">
                                <div class="breadcrumb__wrap">
                                    <ul class="breadcrumb__list">
                                        <li class="has-separator">

                                            <a href="index.html">Home</a></li>
                                        <li class="is-marked">

                                            <a href="dash-address-edit.html">My Account</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====== End - Section 1 ======*/}


                {/*====== Section 2 ======*/}
                <div class="u-s-p-b-60">

                    {/*====== Section Content ======*/}
                    <div class="section__content">
                        <div class="dash">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-3 col-md-12">

                                        {/*====== Dashboard Features ======*/}
                                        <div class="dash__box dash__box--bg-white dash__box--shadow u-s-m-b-30">
                                            <div class="dash__pad-1">

                                                <span class="dash__text u-s-m-b-16">Hello, John Doe</span>
                                                <ul class="dash__f-list">
                                                    <li>

                                                        <a href="dashboard.html">Manage My Account</a></li>
                                                    <li>

                                                        <a href="dash-my-profile.html">My Profile</a></li>
                                                    <li>

                                                        <a class="dash-active" href="/address-book">Address Book</a></li>
                                                    <li>

                                                        <a href="dash-track-order.html">Track Order</a></li>
                                                    <li>

                                                        <a href="dash-my-order.html">My Orders</a></li>
                                                    <li>

                                                        <a href="dash-payment-option.html">My Payment Options</a></li>
                                                    <li>

                                                        <a href="dash-cancellation.html">My Returns & Cancellations</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="dash__box dash__box--bg-white dash__box--shadow dash__box--w">
                                            <div class="dash__pad-1">
                                                <ul class="dash__w-list">
                                                    <li>
                                                        <div class="dash__w-wrap">

                                                            <span class="dash__w-icon dash__w-icon-style-1"><i class="fas fa-cart-arrow-down"></i></span>

                                                            <span class="dash__w-text">4</span>

                                                            <span class="dash__w-name">Orders Placed</span></div>
                                                    </li>
                                                    <li>
                                                        <div class="dash__w-wrap">

                                                            <span class="dash__w-icon dash__w-icon-style-2"><i class="fas fa-times"></i></span>

                                                            <span class="dash__w-text">0</span>

                                                            <span class="dash__w-name">Cancel Orders</span></div>
                                                    </li>
                                                    <li>
                                                        <div class="dash__w-wrap">

                                                            <span class="dash__w-icon dash__w-icon-style-3"><i class="far fa-heart"></i></span>

                                                            <span class="dash__w-text">0</span>

                                                            <span class="dash__w-name">Wishlist</span></div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/*====== End - Dashboard Features ======*/}
                                    </div>
                                    <div class="col-lg-9 col-md-12">
                                        <div class="dash__box dash__box--shadow dash__box--radius dash__box--bg-white">
                                            <div class="dash__pad-2">
                                                <h1 class="dash__h1 u-s-m-b-14">Add Address</h1>

                                                {/* <span class="dash__text u-s-m-b-30">We need an address where we could deliver products.</span> */}
                                                <form class="dash-address-manipulation" onSubmit={handleSubmit}>
                                                    <div class="gl-inline">
                                                        <div class="u-s-m-b-30">

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
                                                        <div class="u-s-m-b-30">

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
                                                    <div class="gl-inline">
                                                        <div class="u-s-m-b-30">

                                                            <label className="gl-label" htmlFor="address-phone">PHONE *</label>
                                                            <input
                                                                className="input-text input-text--primary-style"
                                                                type="text"
                                                                id="address-phone"
                                                                name="phoneNumber"
                                                                placeholder="(+0) 900901904"
                                                                value={formData.phoneNumber}
                                                                onChange={handleChange}
                                                                required
                                                            />

                                                        </div>
                                                        <div class="u-s-m-b-30">

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
                                                            />

                                                        </div>
                                                    </div>
                                                    <div class="gl-inline">
                                                        <div class="u-s-m-b-30">

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
                                                            {/* Hidden input to store province name */}
                                                            <input
                                                                type="hidden"
                                                                name="provinceName"
                                                                value={formData.provinceName}
                                                            />
                                                        </div>
                                                        <div class="u-s-m-b-30">

                                                            {/*====== Select Box ======*/}

                                                            <label class="gl-label" for="address-state">DISTRICT *</label>
                                                            <select
                                                                className="select-box select-box--primary-style"
                                                                id="districtCode"
                                                                name="districtCode"
                                                                value={formData.districtCode}
                                                                onChange={handleDistrictChange}
                                                                required
                                                            >
                                                                <option value="">Select District</option>
                                                                {districts.map(district => (
                                                                    <option key={district.id} value={district.id}>{district.name}</option>
                                                                ))}
                                                            </select>
                                                            {/*====== End - Select Box ======*/}
                                                            <input
                                                                type="hidden"
                                                                name="districtName"
                                                                value={formData.districtName}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="gl-inline">

                                                        <div class="u-s-m-b-30">

                                                            {/*====== Select Box ======*/}

                                                            <label class="gl-label" for="address-state">WARD *</label>

                                                            <select
                                                                className="select-box select-box--primary-style"
                                                                id="wardCode"
                                                                name="wardCode"
                                                                value={formData.wardCode}
                                                                onChange={handleWardChange}
                                                                required
                                                            >
                                                                <option value="">Select Ward</option>
                                                                {wards.map(ward => (
                                                                    <option key={ward.id} value={ward.id}>{ward.name}</option>
                                                                ))}
                                                            </select>
                                                            {/*====== End - Select Box ======*/}
                                                            <input
                                                                type="hidden"
                                                                name="wardName"
                                                                value={formData.wardName}
                                                            />
                                                        </div>


                                                        <div class="u-s-m-b-30">

                                                            {/* <label class="gl-label" for="address-street"></label> */}
                                                            {/* <input class="input-text input-text--primary-style" type="text" id="address-postal" placeholder="20006" /> */}

                                                        </div>


                                                    </div>

                                                    <button class="btn btn--e-brand-b-2" type="submit">SAVE</button>
                                                </form>
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
        </>
    )
}

export default AddressBookEdit
