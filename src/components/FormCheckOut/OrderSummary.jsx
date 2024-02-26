import React from 'react'

const OrderSummary = () => {
    return (
        <>
            <div className="o-summary__section u-s-m-b-30">
                <div className="o-summary__item-wrap gl-scroll">
                    <div className="o-card">
                        <div className="o-card__flex">
                            <div className="o-card__img-wrap">

                                <img className="u-img-fluid" src="images/product/electronic/product3.jpg" alt="" /></div>
                            <div className="o-card__info-wrap">

                                <span className="o-card__name">

                                    <a href="product-detail.html">Yellow Wireless Headphone</a></span>

                                <span className="o-card__quantity">Quantity x 1</span>

                                <span className="o-card__price">$150.00</span></div>
                        </div>

                        <a className="o-card__del far fa-trash-alt"></a>
                    </div>
                    <div className="o-card">
                        <div className="o-card__flex">
                            <div className="o-card__img-wrap">

                                <img className="u-img-fluid" src="images/product/electronic/product18.jpg" alt="" /></div>
                            <div className="o-card__info-wrap">

                                <span className="o-card__name">

                                    <a href="product-detail.html">Nikon DSLR Camera 4k</a></span>

                                <span className="o-card__quantity">Quantity x 1</span>

                                <span className="o-card__price">$150.00</span></div>
                        </div>

                        <a className="o-card__del far fa-trash-alt"></a>
                    </div>
                    <div className="o-card">
                        <div className="o-card__flex">
                            <div className="o-card__img-wrap">

                                <img className="u-img-fluid" src="images/product/women/product8.jpg" alt="" /></div>
                            <div className="o-card__info-wrap">

                                <span className="o-card__name">

                                    <a href="product-detail.html">New Dress D Nice Elegant</a></span>

                                <span className="o-card__quantity">Quantity x 1</span>

                                <span className="o-card__price">$150.00</span></div>
                        </div>

                        <a className="o-card__del far fa-trash-alt"></a>
                    </div>
                    <div className="o-card">
                        <div className="o-card__flex">
                            <div className="o-card__img-wrap">

                                <img className="u-img-fluid" src="images/product/men/product8.jpg" alt="" /></div>
                            <div className="o-card__info-wrap">

                                <span className="o-card__name">

                                    <a href="product-detail.html">New Fashion D Nice Elegant</a></span>

                                <span className="o-card__quantity">Quantity x 1</span>

                                <span className="o-card__price">$150.00</span></div>
                        </div>

                        <a className="o-card__del far fa-trash-alt"></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderSummary
