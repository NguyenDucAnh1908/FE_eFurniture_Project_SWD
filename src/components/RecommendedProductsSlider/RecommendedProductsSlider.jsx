import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { fetchallProduct } from '../../services/productApi/ProductApi'
import './RecommendedProductsSlider.css'

const RecommendedProductsSlider = () => {
    const [productRecommended, setproductRecommended] = useState([]);
    useEffect(() => {
        getProductRecommended();
    }, [])

    const getProductRecommended = async () => {
        let res = await fetchallProduct();
        if (res) {
            setproductRecommended(res)
        }
        console.log("Check res recommended: ", res)
    }
    const slidesToShow = productRecommended.length > 5 ? 5 : productRecommended.length;
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true, // Autoplay enabled
        autoplaySpeed: 2000, // Autoplay speed set to 3 seconds
        // prevArrow: <div className="b-prev"><i className="fas fa-angle-left"></i></div>,
        // nextArrow: <div className="b-next"><i className="fas fa-angle-right"></i></div>,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    // console.log("Check Product recommendations: ", productRecommended)
    return (
        <div>
<div className="section__content">
    <div className="container">
        <Slider {...settings}>
            {productRecommended.map((productRecommendedItem, index) => (
                <div className="u-s-m-b-30" key={index}>
                    <div className="product-o product-o--hover-on">
                        <div className="product-o__wrap">

                            <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                                <img className="aspect__img" src={productRecommendedItem.thumbnail} alt="" /></a>
                            <div className="product-o__action-wrap">
                                <ul className="product-o__action-list">
                                    <li>

                                        <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><i className="fas fa-search-plus"></i></a></li>
                                    <li>

                                        <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><i className="fas fa-plus-circle"></i></a></li>
                                    <li>

                                        <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><i className="fas fa-heart"></i></a></li>
                                    <li>

                                        <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Email me When the price drops"><i className="fas fa-envelope"></i></a></li>
                                </ul>
                            </div>
                        </div>

                        <span className="product-o__category">

                            <a href="shop-side-version-2.html">{productRecommendedItem.category_id.name}</a></span>

                        <span className="product-o__name">

                            <a href="product-detail.html">{productRecommendedItem.name}</a></span>
                        <div className="product-o__rating gl-rating-style"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>

                            <span className="product-o__review">(20)</span></div>

                        <span className="product-o__price">${productRecommendedItem.price_sale}

                            <span className="product-o__discount">${productRecommendedItem.price}</span></span>
                    </div>
                </div>
            ))}
        </Slider>
    </div>
</div>

        </div>
    )
}

export default RecommendedProductsSlider
