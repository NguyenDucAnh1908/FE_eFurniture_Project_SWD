import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

const Account = (props) => {
    const { user } = useContext(UserContext);
    
    if (user && user.isAuthenticated === true) {
        return (
            <>
                <span className="js-menu-toggle"></span>
                <ul style={{ width: "120px" }}>
                    <li>
                        <a href="#dashboard.html"><i className="fas fa-user-circle u-s-m-r-6"></i>
                            <span>Account</span></a>
                    </li>
                    <li>
                        <a href="#signout.html"><i className="fas fa-lock-open u-s-m-r-6"></i>
                            <span>Signout</span></a>
                    </li>
                </ul>
            </>
        )
    } else {
        return(
        <>
            <span className="js-menu-toggle"></span>
            <ul style={{ width: "120px" }}>
                <li>
                    <a href="#signup.html"><i className="fas fa-user-plus u-s-m-r-6"></i>
                        <span>Signup</span></a>
                </li>
                <li>
                    <a href="#signin.html"><i className="fas fa-lock u-s-m-r-6"></i>
                        <span>Signin</span></a>
                </li>
            </ul>
        </>
    )}
}

export default Account
