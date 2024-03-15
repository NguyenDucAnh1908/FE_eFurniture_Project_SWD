import React, { useState, useEffect } from 'react'
import { registerUser } from '../../services/UserApi/UserApi';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Register = () => {
    const navigate = useNavigate()

    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [active, setActive] = useState(null);
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [role, setRole] = useState("");


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

    const handleRegister = async () => {
        const dateOfBirth = `${selectedYear}-${selectedMonth}-${selectedDay}`;
        const active = true;
        const role = "USER";
        let res = await registerUser(fullName, phoneNumber, email, password, active, dateOfBirth, role);
        console.log("Check check register: ", res)
        if (res.userResponse && res.userResponse.id && res.status === "Success") {
            navigate("/login")
            toast.success(res.message);
        }else{
            toast.error(res.message)
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
                                            <a href="index.html">Home</a></li>
                                        <li className="is-marked">
                                            <a href="signup.html">Signup</a></li>
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
                                        <h1 className="section__heading u-c-secondary">CREATE AN ACCOUNT</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*====== End - Section Intro ======*/}
                    {/*====== Section Content ======*/}
                    <div className="section__content">
                        <div className="container">
                            <div className="row row--center">
                                <div className="col-lg-6 col-md-8 u-s-m-b-30">
                                    <div className="l-f-o">
                                        <div className="l-f-o__pad-box">
                                            <h1 className="gl-h1">PERSONAL INFORMATION</h1>
                                            {/* <form className="l-f-o__form"> */}
                                            <div className="gl-s-api">
                                                <div className="u-s-m-b-15">
                                                    <button className="gl-s-api__btn gl-s-api__btn--fb" type="button"><i className="fab fa-facebook-f" />
                                                        <span>Signup with Facebook</span></button></div>
                                                <div className="u-s-m-b-30">
                                                    <button className="gl-s-api__btn gl-s-api__btn--gplus" type="button"><i className="fab fa-google" />
                                                        <span>Signup with Google</span></button></div>
                                            </div>
                                            <div className="u-s-m-b-30">
                                                <label className="gl-label" htmlFor="reg-fname">Full NAME *</label>
                                                <input className="input-text input-text--primary-style" type="text"
                                                    id="reg-fname" placeholder="First Name"
                                                    value={fullName}
                                                    onChange={(event) => setFullName(event.target.value)} /></div>
                                            <div className="u-s-m-b-30">
                                                <label className="gl-label" htmlFor="reg-fname">PHONE NUMBER *</label>
                                                <input className="input-text input-text--primary-style" type="text"
                                                    id="reg-fname" placeholder="Phone number"
                                                    value={phoneNumber}
                                                    onChange={(event) => setPhoneNumber(event.target.value)} /></div>
                                            {/* <div className="u-s-m-b-30">
                                                    <label className="gl-label" htmlFor="reg-lname">LAST NAME *</label>
                                                    <input className="input-text input-text--primary-style" type="text" 
                                                    id="reg-lname" placeholder="Last Name" 
                                                    value={user_id}
                                                    onChange={(event) => setUserId(event.target.value)}/></div> */}
                                            <div className="gl-inline">
                                                <div className="u-s-m-b-30">
                                                    {/* Date of Birth Select-Box */}
                                                    <span className="gl-label">BIRTHDAY</span>
                                                    <div className="gl-dob">
                                                        {/* Dropdown chọn tháng */}
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
                                                    {/* End - Date of Birth Select-Box */}
                                                </div>
                                                {/* <div className="u-s-m-b-30">
                                                        <label className="gl-label" htmlFor="gender">GENDER</label><select className="select-box select-box--primary-style u-w-100" id="gender">
                                                            <option selected>Select</option>
                                                            <option value="male">Male</option>
                                                            <option value="male">Female</option>
                                                        </select>
                                                    </div> */}
                                            </div>
                                            <div className="u-s-m-b-30">
                                                <label className="gl-label" htmlFor="reg-email">E-MAIL *</label>
                                                <input className="input-text input-text--primary-style" type="text"
                                                    id="reg-email" placeholder="Enter E-mail"
                                                    value={email}
                                                    onChange={(event) => setEmail(event.target.value)} /></div>
                                            <div className="u-s-m-b-30">
                                                <label className="gl-label" htmlFor="reg-password">PASSWORD *</label>
                                                <input className="input-text input-text--primary-style" type="password"
                                                    id="reg-password" placeholder="Enter Password"
                                                    value={password}
                                                    onChange={(event) => setPassword(event.target.value)} /></div>
                                            <div className="u-s-m-b-15">
                                                <button onClick={() => handleRegister()} className="btn btn--e-transparent-brand-b-2" type="submit">CREATE</button></div>
                                            <a className="gl-link" href="#">Return to Store</a>
                                            {/* </form> */}
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

export default Register
