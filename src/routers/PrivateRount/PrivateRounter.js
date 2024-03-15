
import React, { useEffect, useContext } from 'react'
import { Route, useNavigate, Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../../context/UserContext'


const PrivateRounter = (props) => {
  const navigate = useNavigate()
  const { user } = useContext(UserContext);
  console.log("Check User contextttt: ", user)

  if (user && user.isAuthenticated === true && user.role === 'USER') {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }

}

export default PrivateRounter
// if (user && user.isAuthenticated === true) {
//   return (
//     <>{props.children}</>
//   )
// } else {
//   return <>
//     <Navigate to="/login" />
//   </>
// }