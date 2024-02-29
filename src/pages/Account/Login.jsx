import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { loginUser } from '../../services/UserApi/UserApi'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {

    const navigate = useNavigate()

    const [valueLogin, setValueLogin] = useState("");
    const [valuePassword, setValuePassword] = useState("");
    const defaultObjValidInput = {
        isValidValueLogin: true,
        isValidValuePassword: true,
    }
    const [objValidInput, setObjValidInput] = useState(defaultObjValidInput);

    const handleRegister = async () => {
        navigate("/register");
    }
    const handleLogin = async () => {
        setObjValidInput(defaultObjValidInput)
        if (!valueLogin) {
            setObjValidInput({ ...defaultObjValidInput, isValidValueLogin: false })
            toast.warning("Please enter your email or password");
            return;
        }
        if (!valuePassword) {
            setObjValidInput({ ...defaultObjValidInput, isValidValuePassword: false })
            toast.warning("Please enter your password");
        }
        let response = await loginUser(valueLogin, valuePassword);
        console.log(response);
        if (response.staus === "Success") {
            navigate("/");
            toast.success("Login Success");
        } if (response) {
            toast.error("An error occurred during login")
        }
    }
    //console.log("Check: ", valueLogin)
    const handleLoginEmailChange = (event) => {
        setValueLogin(event.target.value);
    }

    const handleLoginPasswordChange = (event) => {
        setValuePassword(event.target.value);
    }
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

                                            <a href="signin.html">Signin</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====== End - Section 1 ======*/}


                {/*====== Section 2 ======*/}
                <div class="u-s-p-b-60">

                    {/*====== Section Intro ======*/}
                    <div class="section__intro u-s-m-b-60">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="section__text-wrap">
                                        <h1 class="section__heading u-c-secondary">ALREADY REGISTERED?</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*====== End - Section Intro ======*/}


                    {/*====== Section Content ======*/}
                    <div class="section__content">
                        <div class="container">
                            <div class="row row--center">
                                <div class="col-lg-6 col-md-8 u-s-m-b-30">
                                    <div class="l-f-o">
                                        <div class="l-f-o__pad-box">
                                            <h1 class="gl-h1">I'M NEW CUSTOMER</h1>

                                            <span class="gl-text u-s-m-b-30">By creating an account with our store, you will be able to move through the checkout process faster, store shipping addresses, view and track your orders in your account and more.</span>
                                            <div class="u-s-m-b-15">

                                                <a class="l-f-o__create-link btn--e-transparent-brand-b-2" href="signup.html">CREATE AN ACCOUNT</a></div>
                                            <h1 class="gl-h1">SIGNIN</h1>

                                            <span class="gl-text u-s-m-b-30">If you have an account with us, please log in.</span>
                                            {/* <form class="l-f-o__form" > */}
                                                <div class="gl-s-api">
                                                    <div class="u-s-m-b-15">

                                                        <button class="gl-s-api__btn gl-s-api__btn--fb" type="button"><i class="fab fa-facebook-f"></i>

                                                            <span>Signin with Facebook</span></button></div>
                                                    <div class="u-s-m-b-15">

                                                        <button class="gl-s-api__btn gl-s-api__btn--gplus" type="button"><i class="fab fa-google"></i>

                                                            <span>Signin with Google</span></button></div>
                                                </div>
                                                <div class="u-s-m-b-30">

                                                    <label class="gl-label" for="login-email">E-MAIL *</label>

                                                    <input class="input-text input-text--primary-style" type="text" id="login-email"
                                                        placeholder="Enter E-mail"
                                                        value={valueLogin}
                                                        onChange={handleLoginEmailChange}
                                                    /></div>
                                                <div class="u-s-m-b-30">

                                                    <label class="gl-label" for="login-password">PASSWORD *</label>

                                                    <input class="input-text input-text--primary-style" type="text" id="login-password"
                                                        placeholder="Enter Password"
                                                        value={valuePassword}
                                                        onChange={handleLoginPasswordChange}
                                                    /></div>
                                                <div class="gl-inline">
                                                    <div class="u-s-m-b-30">

                                                        <button class="btn btn--e-transparent-brand-b-2" type="submit" onClick={() => handleLogin()}>LOGIN</button></div>
                                                    <div class="u-s-m-b-30">

                                                        <a class="gl-link" href="lost-password.html">Lost Your Password?</a></div>
                                                </div>
                                                <div class="u-s-m-b-30">

                                                    {/*====== Check Box ======*/}
                                                    <div class="check-box">

                                                        <input type="checkbox" id="remember-me" />
                                                        <div class="check-box__state check-box__state--primary">

                                                            <label class="check-box__label" for="remember-me">Remember Me</label></div>
                                                    </div>
                                                    {/*====== End - Check Box ======*/}
                                                </div>
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
        </>
    )
}

export default Login
