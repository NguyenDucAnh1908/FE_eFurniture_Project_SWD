import React from 'react'

const OrderProductItem = ({
    imageUrl,
    productName,
    productColor,
    productCapacity,
    productQuantity,
    productPrice,
    trackOrderStatus,
    trackOrderProgress,
}) => {
    return (
        <div className="row">
            <div className="col-md-2">
                <img src={imageUrl} className="img-fluid" alt="Phone" />
            </div>
            <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                <p className="text-muted mb-0">{productName}</p>
            </div>
            <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                <p className="text-muted mb-0 small">{productColor}</p>
            </div>
            <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                <p className="text-muted mb-0 small">Capacity: {productCapacity}</p>
            </div>
            <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                <p className="text-muted mb-0 small">Qty: {productQuantity}</p>
            </div>
            <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                <p className="text-muted mb-0 small">{productPrice}</p>
            </div>
            <div className="col-md-12">
                <div className="d-flex justify-content-between align-items-center mb-1">
                    <p className="text-muted mb-0 small">Track Order</p>
                    <div className="progress" style={{ height: '6px', borderRadius: '16px' }}>
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                                width: `${trackOrderProgress}%`,
                                borderRadius: '16px',
                                backgroundColor: '#a8729a',
                            }}
                            aria-valuenow={trackOrderProgress}
                            aria-valuemin="0"
                            aria-valuemax="100"
                        />
                    </div>
                </div>
                <div className="d-flex justify-content-around mb-1">
                    <p className="text-muted mt-1 mb-0 small ms-xl-5">{trackOrderStatus}</p>
                    <p className="text-muted mt-1 mb-0 small ms-xl-5">Delivered</p>
                </div>
            </div>
        </div>
    );
};

export default OrderProductItem
