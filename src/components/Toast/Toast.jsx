import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

const Toast = () => {
    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition:Bounce
            />
            {/* Same as */}
            <ToastContainer />
        </div>
    )
}

export default Toast
