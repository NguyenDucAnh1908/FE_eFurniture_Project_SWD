import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


const EditProfile = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const handleSelectChange = (event) => {
        const { name, value } = event.target;

        // Cập nhật giá trị đã chọn vào state tương ứng
        switch (name) {
            case 'month':
                setSelectedMonth(value);
                break;
            case 'day':
                setSelectedDay(value);
                break;
            case 'year':
                setSelectedYear(value);
                break;
            default:
                break;
        }
    };

    const addLeadingZero = (number) => (number < 10 ? `0${number}` : number);

    const months = Array.from({ length: 12 }, (_, index) => addLeadingZero(index + 1));

    const days = Array.from({ length: 31 }, (_, index) => addLeadingZero(index + 1));

    // Tạo mảng các năm từ 1900 đến năm hiện tại
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 1900 + 1 }, (_, index) => currentYear - index);

    const [values, setValues] = useState({
        id: id,
        fullName: '',
        phoneNumber: '',
        active: '',
        dateOfBirth: '',
        email: '',
        role: '',

    });

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/' + id)
            .then(res => {
                setValues({
                    ...values,
                    fullName: res.data.fullName,
                    phoneNumber: res.data.phoneNumber,
                    active: res.data.active,
                    dateOfBirth: res.data.dateOfBirth,
                    email: res.data.email
                });
                console.log("Check user profile: ", res)
            })

            .catch(err => console.log(err));
    }, [])

    const handleUpdateUser = async () => {
        try {
            const selectedDate = `${selectedYear}-${selectedMonth}-${selectedDay}`;
            const formattedDate = new Date(selectedDate).toISOString(); // Chuyển đổi sang định dạng ISO
    
            // Gán ngày tháng đã chọn vào đối tượng values
            setValues({
                ...values,
                dateOfBirth: formattedDate,
            });
    
            // Gọi API để cập nhật thông tin người dùng
            await axios.put('http://localhost:8080/api/v1/updateUser/' + id, values);
    
            // Sau khi cập nhật thành công, chuyển hướng về trang thông tin cá nhân
            navigate('/my-profile');
        } catch (error) {
            console.error('Error updating user:', error);
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

                                                                    <label className="gl-label" for="reg-fname">FULL NAME *</label>

                                                                    <input
                                                                        className="input-text input-text--primary-style"
                                                                        type="text" id="reg-fname"
                                                                        value={values.fullName}
                                                                        onChange={(event) => setValues({ ...values, fullName: event.target.value })}
                                                                        placeholder="John" />
                                                                </div>
                                                            </div>
                                                            <div className="gl-inline">
                                                                <div className="u-s-m-b-30">

                                                                    {/*====== Date of Birth Select-Box ======*/}

                                                                    <span className="gl-label">BIRTHDAY: {values.dateOfBirth}</span>
                                                                    <div className="gl-dob">
                                                                        <select className="select-box select-box--primary-style" name="month" value={selectedMonth} onChange={handleSelectChange}>
                                                                            <option selected>Month</option>
                                                                            {months.map((month) => (
                                                                                <option key={month} value={month}>{month}</option>
                                                                            ))}
                                                                        </select>
                                                                        {/* Dropdown chọn ngày */}
                                                                        <select className="select-box select-box--primary-style" name="day" value={selectedDay} onChange={handleSelectChange}>
                                                                            <option selected>Day</option>
                                                                            {days.map((day) => (
                                                                                <option key={day} value={day}>{day}</option>
                                                                            ))}
                                                                        </select>
                                                                        {/* Dropdown chọn năm */}
                                                                        <select className="select-box select-box--primary-style" name="year" value={selectedYear} onChange={handleSelectChange}>
                                                                            <option selected>Year</option>
                                                                            {years.map((year) => (
                                                                                <option key={year} value={year}>{year}</option>
                                                                            ))}
                                                                        </select>
                                                                    </div>
                                                                    {/*====== End - Date of Birth Select-Box ======*/}
                                                                </div>
                                                                {/* <div className="u-s-m-b-30">

                                                                    <label className="gl-label" for="gender">GENDER</label><select className="select-box select-box--primary-style u-w-100" id="gender">
                                                                        <option selected>Select</option>
                                                                        <option value="male">Male</option>
                                                                        <option value="male">Female</option>
                                                                    </select>
                                                                </div> */}
                                                            </div>
                                                            <div className="gl-inline">
                                                                <div className="u-s-m-b-30">
                                                                    <h2 className="dash__h2 u-s-m-b-8">E-mail</h2>

                                                                    {/* <span className="dash__text">johndoe@domain.com</span> */}
                                                                    <input
                                                                        className="input-text input-text--primary-style"
                                                                        type="text" id="reg-fname"
                                                                        value={values.email}
                                                                        onChange={(event) => setValues({ ...values, email: event.target.value })}
                                                                        placeholder="E-mail" />
                                                                    {/* <div className="dash__link dash__link--secondary">

                                                                        <a href="#">Change</a></div> */}
                                                                </div>
                                                                <div className="u-s-m-b-30">
                                                                    <h2 className="dash__h2 u-s-m-b-8">Phone</h2>

                                                                    <input
                                                                        className="input-text input-text--primary-style"
                                                                        type="text" id="reg-fname"
                                                                        value={values.phoneNumber}
                                                                        onChange={(event) => setValues({ ...values, phoneNumber: event.target.value })}
                                                                        placeholder="Phone" />
                                                                    {/* <div className="dash__link dash__link--secondary">

                                                                        <a href="#">Add</a></div> */}
                                                                </div>
                                                            </div>

                                                            <button className="btn btn--e-brand-b-2" onClick={() => handleUpdateUser()} type="submit">SAVE</button>
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