import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'

const Account = (props) => {
    const navigate = useNavigate()
    const { user, logout } = useContext(UserContext);
    const handleLogout = () => {
        logout();
        navigate("/") 
    };
    
    if (user && user.isAuthenticated === true) {
        return (
            <>
                <span className="js-menu-toggle"></span>
                <ul style={{ width: "120px" }}>
                    <li>
                        <a href="/my-profile"><i className="fas fa-user-circle u-s-m-r-6"></i>
                            <span>Account</span></a>
                    </li>
                    <li>
                        <a onClick={handleLogout}><i className="fas fa-lock-open u-s-m-r-6"></i>
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
                    <a href="/register"><i className="fas fa-user-plus u-s-m-r-6"></i>
                        <span>Signup</span></a>
                </li>
                <li>
                    <a href="/login"><i className="fas fa-lock u-s-m-r-6"></i>
                        <span>Signin</span></a>
                </li>
            </ul>
        </>
    )}
}

export default Account
