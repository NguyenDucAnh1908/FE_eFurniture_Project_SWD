import React, { Component, useState } from 'react'
import Slider from "react-slick";
import axios from 'axios';
import { useEffect } from 'react';
import { fetchallUser } from '../services/UserService';

function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const [listProduct, setListProduct] = useState([]);
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProduct();
        fetchCategories();
        fetchProducts();
    }, []);

    const getProduct = async () => {
        let res = await fetchallUser();
        if (res && res.data) {
            setListProduct(res.data)
        }
        console.log("Check res: ", res)
    }

    const fetchCategories = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/v1/categories");
            if (response && response.data) {
                setCategories(response.data);
            }
        } catch (error) {
            console.error("Lỗi khi lấy danh sách danh mục:", error);
        }
    };

    const fetchProducts = async (categoryId = null) => {
        let url = 'http://localhost:8080/api/v1/products/category';
        if (categoryId) {
            url += `?category_id=${categoryId}`;
        }

        try {
            const response = await axios.get(url);
            if (response && response.data) {
                setProducts(response.data);
            }
        } catch (error) {
            console.error("Lỗi khi lấy danh sách sản phẩm:", error);
        }
    };

    const handleCategoryClick = (categoryId) => {
        fetchProducts(categoryId);
    };
    console.log("product: ", products)
    console.log(listProduct);
    return (
        <div>
            {/* <div className="preloader is-active">
                <div className="preloader__wrap">

                    <img className="preloader__img" src="images/preloader.png" alt="" /></div>
            </div> */}
            {/* Hello */}
            <div id="app">


                {/*====== App Content ======*/}
                <div className="app-content">

                    {/*====== Primary Slider ======*/}
                    <div className="s-skeleton s-skeleton--h-640 s-skeleton--bg-grey">
                        <div className="owl-carousel primary-style-3" id="hero-slider">
                            {/* <Slider {...settings}>
                                <div>
                                    <h3>1</h3>
                                </div>
                                <div>
                                    <h3>2</h3>
                                </div>
                                <div>
                                    <h3>3</h3>
                                </div>
                                <div>
                                    <h3>4</h3>
                                </div>
                                <div>
                                    <h3>5</h3>
                                </div>
                                <div>
                                    <h3>6</h3>
                                </div>
                            </Slider> */}
                            <div className="hero-slide hero-slide--7">
                                <div className="primary-style-3-wrap">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="slider-content slider-content--animation">

                                                    <span className="content-span-1 u-c-white">Update Your Fashion</span>

                                                    <span className="content-span-2 u-c-white">10% Discount on Outwear</span>

                                                    <span className="content-span-3 u-c-white">Find outwear on best prices</span>

                                                    <span className="content-span-4 u-c-white">Starting At

                                                        <span className="u-c-brand">$100.00</span></span>

                                                    <a className="shop-now-link btn--e-brand" href="shop-side-version-2.html">SHOP NOW</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="hero-slide hero-slide--8">
                            <div className="primary-style-3-wrap">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="slider-content slider-content--animation">

                                                <span className="content-span-1 u-c-white">Open Your Eyes</span>

                                                <span className="content-span-2 u-c-white">10% Off On Intimates</span>

                                                <span className="content-span-3 u-c-white">Find intimates on best prices</span>

                                                <span className="content-span-4 u-c-white">Starting At

                                                    <span className="u-c-brand">$100.00</span></span>

                                                <a className="shop-now-link btn--e-brand" href="shop-side-version-2.html">SHOP NOW</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                            {/* <div className="hero-slide hero-slide--9">
                            <div className="primary-style-3-wrap">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="slider-content slider-content--animation">

                                                <span className="content-span-1 u-c-white">Find Top Brands</span>

                                                <span className="content-span-2 u-c-white">10% Off On Outwear</span>

                                                <span className="content-span-3 u-c-white">Find outwear on best prices</span>

                                                <span className="content-span-4 u-c-white">Starting At

                                                    <span className="u-c-brand">$100.00</span></span>

                                                <a className="shop-now-link btn--e-brand" href="shop-side-version-2.html">SHOP NOW</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        </div>
                    </div>
                    {/*====== End - Primary Slider ======*/}


                    {/*====== Section 1 ======*/}
                    <div className="u-s-p-y-60">

                        {/*====== Section Content ======*/}
                        <div className="section__content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-6 u-s-m-b-30">
                                        <div className="promotion-o">
                                            <div className="aspect aspect--bg-grey aspect--square">

                                                <img className="aspect__img" src="images/promo/promo-img-4.jpg" alt="" /></div>
                                            <div className="promotion-o__content">

                                                <a className="promotion-o__link btn--e-white-brand" href="shop-side-version-2.html">Women's Clothing</a></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 u-s-m-b-30">
                                        <div className="promotion-o">
                                            <div className="aspect aspect--bg-grey aspect--square">

                                                <img className="aspect__img" src="images/promo/promo-img-5.jpg" alt="" /></div>
                                            <div className="promotion-o__content">

                                                <a className="promotion-o__link btn--e-white-brand" href="shop-side-version-2.html">Fashion Accessories</a></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 u-s-m-b-30">
                                        <div className="promotion-o">
                                            <div className="aspect aspect--bg-grey aspect--square">

                                                <img className="aspect__img" src="images/promo/promo-img-6.jpg" alt="" /></div>
                                            <div className="promotion-o__content">

                                                <a className="promotion-o__link btn--e-white-brand" href="shop-side-version-2.html">Men's Clothing</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*====== End - Section Content ======*/}
                    </div>
                    {/*====== End - Section 1 ======*/}


                    {/*====== Section 2 ======*/}
                    <div className="u-s-p-b-60">

                        {/*====== Section Content ======*/}
                        <div className="section__content">
                            <div className="container">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12">

                                            <a className="i3-banner" href="shop-side-version-2.html">
                                                <div className="aspect aspect--bg-grey-fb aspect--square">

                                                    <img className="aspect__img i3-banner__img" src="images/banners/i3-banner-1.jpg" alt="" /></div>
                                            </a></div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-6 u-s-m-b-30">
                                                    <div className="product-short u-h-100">
                                                        <div className="product-short__container">
                                                            <div className="product-short__img-wrap">

                                                                <a className="aspect aspect--bg-grey-fb aspect--square u-d-block" href="product-detail.html">

                                                                    <img className="aspect__img product-short__img" src="images/product/women/product14.jpg" alt="" /></a></div>
                                                            <div className="product-short__info">

                                                                <span className="product-short__price">$126.77</span>

                                                                <span className="product-short__name">

                                                                    <a href="product-detail.html">Women Shoes</a></span>

                                                                <span className="product-short__category">

                                                                    <a href="shop-side-version-2.html">Women Clothing</a></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 u-s-m-b-30">
                                                    <div className="product-short u-h-100">
                                                        <div className="product-short__container">
                                                            <div className="product-short__img-wrap">

                                                                <a className="aspect aspect--bg-grey-fb aspect--square u-d-block" href="product-detail.html">

                                                                    <img className="aspect__img product-short__img" src="images/product/men/product12.jpg" alt="" /></a></div>
                                                            <div className="product-short__info">

                                                                <span className="product-short__price">$126.77</span>

                                                                <span className="product-short__name">

                                                                    <a href="product-detail.html">Men Leather Wallet</a></span>

                                                                <span className="product-short__category">

                                                                    <a href="shop-side-version-2.html">Men Clothing</a></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">

                                                    <a className="i3-banner" href="shop-side-version-2.html">
                                                        <div className="aspect aspect--bg-grey-fb aspect--1048-334">

                                                            <img className="aspect__img i3-banner__img" src="images/banners/i3-banner-2.jpg" alt="" /></div>
                                                    </a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*====== End - Section Content ======*/}
                    </div>
                    {/*====== End - Section 2 ======*/}


                    {/*====== Section 3 ======*/}
                    <div className="u-s-p-b-60">

                        {/*====== Section Intro ======*/}
                        <div className="section__intro u-s-m-b-46">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section__text-wrap">
                                            <h1 className="section__heading u-c-secondary u-s-m-b-12">RECENT PRODUCTS</h1>

                                            <span className="section__span u-c-silver">NEWLY ADDED PRODUCTS</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*====== End - Section Intro ======*/}


                        {/*====== Section Content ======*/}
                        <div className="section__content">
                            <div className="container">
                                <div className="row">
                                    {listProduct && listProduct.length > 0 &&
                                        listProduct.map((productItem, index) => {
                                            return (
                                                <div className="col-lg-3 col-md-4 col-sm-6 u-s-m-b-30" key={`products-${productItem}`}>
                                                    <div className="product-r u-h-100">
                                                        <div className="product-r__container">

                                                            <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                                                                <img className="aspect__img" src={productItem.thumbnail} alt="" /></a>
                                                            <div className="product-r__action-wrap">
                                                                <ul className="product-r__action-list">
                                                                    <li>

                                                                        <a data-modal="modal" data-modal-id="#quick-look"><i className="fas fa-search-plus"></i></a></li>
                                                                    <li>

                                                                        <a data-modal="modal" data-modal-id="#add-to-cart"><i className="fas fa-plus-circle"></i></a></li>
                                                                    <li>

                                                                        <a href="signin.html"><i className="fas fa-heart"></i></a></li>
                                                                    <li>

                                                                        <a href="signin.html"><i className="fas fa-envelope"></i></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="product-r__info-wrap">

                                                            <span className="product-r__category">

                                                                <a href="shop-side-version-2.html">{productItem.createdAt}</a></span>
                                                            <div className="product-r__n-p-wrap">

                                                                <span className="product-r__name">

                                                                    <a href="product-detail.html">{productItem.name}</a></span>

                                                                <span className="product-r__price">{productItem.price}</span></div>

                                                            <span className="product-r__description">{productItem.description}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                    {/* <div className="col-lg-3 col-md-4 col-sm-6 u-s-m-b-30">
                                        <div className="product-r u-h-100">
                                            <div className="product-r__container">

                                                <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                                                    <img className="aspect__img" src="images/product/women/product5.jpg" alt="" /></a>
                                                <div className="product-r__action-wrap">
                                                    <ul className="product-r__action-list">
                                                        <li>

                                                            <a data-modal="modal" data-modal-id="#quick-look"><i className="fas fa-search-plus"></i></a></li>
                                                        <li>

                                                            <a data-modal="modal" data-modal-id="#add-to-cart"><i className="fas fa-plus-circle"></i></a></li>
                                                        <li>

                                                            <a href="signin.html"><i className="fas fa-heart"></i></a></li>
                                                        <li>

                                                            <a href="signin.html"><i className="fas fa-envelope"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-r__info-wrap">

                                                <span className="product-r__category">

                                                    <a href="shop-side-version-2.html">Women Clothing</a></span>
                                                <div className="product-r__n-p-wrap">

                                                    <span className="product-r__name">

                                                        <a href="product-detail.html">New Dress A Nice Elegant</a></span>

                                                    <span className="product-r__price">$125.00</span></div>

                                                <span className="product-r__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* <div className="col-lg-3 col-md-4 col-sm-6 u-s-m-b-30">
                                        <div className="product-r u-h-100">
                                            <div className="product-r__container">

                                                <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                                                    <img className="aspect__img" src="images/product/women/product6.jpg" alt="" /></a>
                                                <div className="product-r__action-wrap">
                                                    <ul className="product-r__action-list">
                                                        <li>

                                                            <a data-modal="modal" data-modal-id="#quick-look"><i className="fas fa-search-plus"></i></a></li>
                                                        <li>

                                                            <a data-modal="modal" data-modal-id="#add-to-cart"><i className="fas fa-plus-circle"></i></a></li>
                                                        <li>

                                                            <a href="signin.html"><i className="fas fa-heart"></i></a></li>
                                                        <li>

                                                            <a href="signin.html"><i className="fas fa-envelope"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-r__info-wrap">

                                                <span className="product-r__category">

                                                    <a href="shop-side-version-2.html">Women Clothing</a></span>
                                                <div className="product-r__n-p-wrap">

                                                    <span className="product-r__name">

                                                        <a href="product-detail.html">New Dress B Nice Elegant</a></span>

                                                    <span className="product-r__price">$125.00</span></div>

                                                <span className="product-r__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6 u-s-m-b-30">
                                        <div className="product-r u-h-100">
                                            <div className="product-r__container">

                                                <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                                                    <img className="aspect__img" src="images/product/women/product7.jpg" alt="" /></a>
                                                <div className="product-r__action-wrap">
                                                    <ul className="product-r__action-list">
                                                        <li>

                                                            <a data-modal="modal" data-modal-id="#quick-look"><i className="fas fa-search-plus"></i></a></li>
                                                        <li>

                                                            <a data-modal="modal" data-modal-id="#add-to-cart"><i className="fas fa-plus-circle"></i></a></li>
                                                        <li>

                                                            <a href="signin.html"><i className="fas fa-heart"></i></a></li>
                                                        <li>

                                                            <a href="signin.html"><i className="fas fa-envelope"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-r__info-wrap">

                                                <span className="product-r__category">

                                                    <a href="shop-side-version-2.html">Women Clothing</a></span>
                                                <div className="product-r__n-p-wrap">

                                                    <span className="product-r__name">

                                                        <a href="product-detail.html">New Dress C Nice Elegant</a></span>

                                                    <span className="product-r__price">$125.00</span></div>

                                                <span className="product-r__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6 u-s-m-b-30">
                                        <div className="product-r u-h-100">
                                            <div className="product-r__container">

                                                <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                                                    <img className="aspect__img" src="images/product/women/product8.jpg" alt="" /></a>
                                                <div className="product-r__action-wrap">
                                                    <ul className="product-r__action-list">
                                                        <li>

                                                            <a data-modal="modal" data-modal-id="#quick-look"><i className="fas fa-search-plus"></i></a></li>
                                                        <li>

                                                            <a data-modal="modal" data-modal-id="#add-to-cart"><i className="fas fa-plus-circle"></i></a></li>
                                                        <li>

                                                            <a href="signin.html"><i className="fas fa-heart"></i></a></li>
                                                        <li>

                                                            <a href="signin.html"><i className="fas fa-envelope"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-r__info-wrap">

                                                <span className="product-r__category">

                                                    <a href="shop-side-version-2.html">Women Clothing</a></span>
                                                <div className="product-r__n-p-wrap">

                                                    <span className="product-r__name">

                                                        <a href="product-detail.html">New Dress D Nice Elegant</a></span>

                                                    <span className="product-r__price">$125.00</span></div>

                                                <span className="product-r__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6 u-s-m-b-30">
                                        <div className="product-r u-h-100">
                                            <div className="product-r__container">

                                                <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                                                    <img className="aspect__img" src="images/product/men/product5.jpg" alt="" /></a>
                                                <div className="product-r__action-wrap">
                                                    <ul className="product-r__action-list">
                                                        <li>

                                                            <a data-modal="modal" data-modal-id="#quick-look"><i className="fas fa-search-plus"></i></a></li>
                                                        <li>

                                                            <a data-modal="modal" data-modal-id="#add-to-cart"><i className="fas fa-plus-circle"></i></a></li>
                                                        <li>

                                                            <a href="signin.html"><i className="fas fa-heart"></i></a></li>
                                                        <li>

                                                            <a href="signin.html"><i className="fas fa-envelope"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-r__info-wrap">

                                                <span className="product-r__category">

                                                    <a href="shop-side-version-2.html">Men Clothing</a></span>
                                                <div className="product-r__n-p-wrap">

                                                    <span className="product-r__name">

                                                        <a href="product-detail.html">New Fashion A Nice Elegant</a></span>

                                                    <span className="product-r__price">$125.00</span></div>

                                                <span className="product-r__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6 u-s-m-b-30">
                                        <div className="product-r u-h-100">
                                            <div className="product-r__container">

                                                <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                                                    <img className="aspect__img" src="images/product/men/product6.jpg" alt="" /></a>
                                                <div className="product-r__action-wrap">
                                                    <ul className="product-r__action-list">
                                                        <li>

                                                            <a data-modal="modal" data-modal-id="#quick-look"><i className="fas fa-search-plus"></i></a></li>
                                                        <li>

                                                            <a data-modal="modal" data-modal-id="#add-to-cart"><i className="fas fa-plus-circle"></i></a></li>
                                                        <li>

                                                            <a href="signin.html"><i className="fas fa-heart"></i></a></li>
                                                        <li>

                                                            <a href="signin.html"><i className="fas fa-envelope"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-r__info-wrap">

                                                <span className="product-r__category">

                                                    <a href="shop-side-version-2.html">Men Clothing</a></span>
                                                <div className="product-r__n-p-wrap">

                                                    <span className="product-r__name">

                                                        <a href="product-detail.html">New Fashion B Nice Elegant</a></span>

                                                    <span className="product-r__price">$125.00</span></div>

                                                <span className="product-r__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6 u-s-m-b-30">
                                        <div className="product-r u-h-100">
                                            <div className="product-r__container">

                                                <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                                                    <img className="aspect__img" src="images/product/men/product7.jpg" alt="" /></a>
                                                <div className="product-r__action-wrap">
                                                    <ul className="product-r__action-list">
                                                        <li>

                                                            <a data-modal="modal" data-modal-id="#quick-look"><i className="fas fa-search-plus"></i></a></li>
                                                        <li>

                                                            <a data-modal="modal" data-modal-id="#add-to-cart"><i className="fas fa-plus-circle"></i></a></li>
                                                        <li>

                                                            <a href="signin.html"><i className="fas fa-heart"></i></a></li>
                                                        <li>

                                                            <a href="signin.html"><i className="fas fa-envelope"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-r__info-wrap">

                                                <span className="product-r__category">

                                                    <a href="shop-side-version-2.html">Men Clothing</a></span>
                                                <div className="product-r__n-p-wrap">

                                                    <span className="product-r__name">

                                                        <a href="product-detail.html">New Fashion C Nice Elegant</a></span>

                                                    <span className="product-r__price">$125.00</span></div>

                                                <span className="product-r__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6 u-s-m-b-30">
                                        <div className="product-r u-h-100">
                                            <div className="product-r__container">

                                                <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                                                    <img className="aspect__img" src="images/product/men/product8.jpg" alt="" /></a>
                                                <div className="product-r__action-wrap">
                                                    <ul className="product-r__action-list">
                                                        <li>

                                                            <a data-modal="modal" data-modal-id="#quick-look"><i className="fas fa-search-plus"></i></a></li>
                                                        <li>

                                                            <a data-modal="modal" data-modal-id="#add-to-cart"><i className="fas fa-plus-circle"></i></a></li>
                                                        <li>

                                                            <a href="signin.html"><i className="fas fa-heart"></i></a></li>
                                                        <li>

                                                            <a href="signin.html"><i className="fas fa-envelope"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-r__info-wrap">

                                                <span className="product-r__category">

                                                    <a href="shop-side-version-2.html">Men Clothing</a></span>
                                                <div className="product-r__n-p-wrap">

                                                    <span className="product-r__name">

                                                        <a href="product-detail.html">New Fashion D Nice Elegant</a></span>

                                                    <span className="product-r__price">$125.00</span></div>

                                                <span className="product-r__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        {/*====== End - Section Content ======*/}
                    </div>
                    {/*====== End - Section 3 ======*/}


                    {/*====== Section 4 ======*/}
                    <div className="u-s-p-b-60">

                        {/*====== Section Intro ======*/}
                        <div className="section__intro u-s-m-b-16">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section__text-wrap">
                                            <h1 className="section__heading u-c-secondary u-s-m-b-12">BEST SELLING PRODUCT</h1>

                                            <span className="section__span u-c-silver u-s-m-b-16">FIND PRODUCTS THAT ARE MOST SELLING</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*====== End - Section Intro ======*/}


                        {/*====== Section Content ======*/}
                        <div className="section__content">
                            <div className="container">
                                {/* <div className="row">
                                    <div className="col-lg-12">
                                        <div className="filter-category-container">
                                            <div className="filter__category-wrapper">

                                                <button className="btn filter__btn filter__btn--style-2 js-checked" type="button" data-filter="*">ALL</button></div>
                                            <div className="filter__category-wrapper">

                                                <button className="btn filter__btn filter__btn--style-2" type="button" data-filter=".outwear">OUTWEAR</button></div>
                                            <div className="filter__category-wrapper">

                                                <button className="btn filter__btn filter__btn--style-2" type="button" data-filter=".bottom">BOTTOM</button></div>
                                        </div>
                                        <div className="filter__grid-wrapper u-s-m-t-30">
                                            <div className="row">
                                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30 filter__item outwear">
                                                    <div className="product-bs">
                                                        <div className="product-bs__container">
                                                            <div className="product-bs__wrap">

                                                                <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                                                                    <img className="aspect__img" src="images/product/men/product11.jpg" alt="" /></a>
                                                                <div className="product-bs__action-wrap">
                                                                    <ul className="product-bs__action-list">
                                                                        <li>

                                                                            <a data-modal="modal" data-modal-id="#quick-look"><i className="fas fa-search-plus"></i></a></li>
                                                                        <li>

                                                                            <a data-modal="modal" data-modal-id="#add-to-cart"><i className="fas fa-plus-circle"></i></a></li>
                                                                        <li>

                                                                            <a href="signin.html"><i className="fas fa-heart"></i></a></li>
                                                                        <li>

                                                                            <a href="signin.html"><i className="fas fa-envelope"></i></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                            <span className="product-bs__category">

                                                                <a href="shop-side-version-2.html">Men Clothing</a></span>

                                                            <span className="product-bs__name">

                                                                <a href="product-detail.html">Black &amp; White Sweater</a></span>
                                                            <div className="product-bs__rating gl-rating-style"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i>

                                                                <span className="product-bs__review">(23)</span></div>

                                                            <span className="product-bs__price">$125.00

                                                                <span className="product-bs__discount">$160.00</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="load-more">

                                            <button className="btn btn--e-brand" type="button">Load More</button></div>
                                    </div>
                                </div> */}
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="filter-category-container">
                                            {categories && categories.length > 0 && categories.map((category) => (
                                                <div className="filter__category-wrapper" key={category.id}>
                                                    <button className="btn filter__btn filter__btn--style-2" type="button" onClick={() => handleCategoryClick(category.id)}>
                                                        {category.name}
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="filter__grid-wrapper u-s-m-t-30">
                                            <div className="row">
                                                {products && products.length > 0 && products.map((product, index) => (
                                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30 filter__item" key={index}>
                                                        <div className="product-bs">
                                                            <div className="product-bs__container">
                                                                <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                                                                    <img className="aspect__img" src={product.thumbnail} alt="" />
                                                                </a>
                                                                {/* Rest of your product details */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="load-more">

                                            <button className="btn btn--e-brand" type="button">Load More</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*====== End - Section Content ======*/}
                    </div>
                    {/*====== End - Section 4 ======*/}


                    {/*====== Section 5 ======*/}
                    <div className="u-s-p-b-60">

                        {/*====== Section Intro ======*/}
                        <div className="section__intro u-s-m-b-46">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section__text-wrap">
                                            <h1 className="section__heading u-c-secondary u-s-m-b-12">URBAN SOUL</h1>

                                            <span className="section__span u-c-silver">RECENTLY URBAN PRODUCTS</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*====== End - Section Intro ======*/}


                        {/*====== Section Content ======*/}
                        <div className="section__content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-3 col-md-4 col-sm-6 u-s-m-b-30">
                                        <div className="product-short u-h-100">
                                            <div className="product-short__container">
                                                <div className="product-short__img-wrap">

                                                    <a className="aspect aspect--bg-grey-fb aspect--square u-d-block" href="product-detail.html">

                                                        <img className="aspect__img product-short__img" src="images/product/women/product16.jpg" alt="" /></a></div>
                                                <div className="product-short__info">

                                                    <span className="product-short__price">$126.77</span>

                                                    <span className="product-short__name">

                                                        <a href="product-detail.html">New Dress A Nice Elegant</a></span>

                                                    <span className="product-short__category">

                                                        <a href="shop-side-version-2.html">Women Clothing</a></span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6 u-s-m-b-30">
                                        <div className="product-short u-h-100">
                                            <div className="product-short__container">
                                                <div className="product-short__img-wrap">

                                                    <a className="aspect aspect--bg-grey-fb aspect--square u-d-block" href="product-detail.html">

                                                        <img className="aspect__img product-short__img" src="images/product/women/product17.jpg" alt="" /></a></div>
                                                <div className="product-short__info">

                                                    <span className="product-short__price">$126.77</span>

                                                    <span className="product-short__name">

                                                        <a href="product-detail.html">New Dress B Nice Elegant</a></span>

                                                    <span className="product-short__category">

                                                        <a href="shop-side-version-2.html">Women Clothing</a></span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6 u-s-m-b-30">
                                        <div className="product-short u-h-100">
                                            <div className="product-short__container">
                                                <div className="product-short__img-wrap">

                                                    <a className="aspect aspect--bg-grey-fb aspect--square u-d-block" href="product-detail.html">

                                                        <img className="aspect__img product-short__img" src="images/product/women/product18.jpg" alt="" /></a></div>
                                                <div className="product-short__info">

                                                    <span className="product-short__price">$126.77</span>

                                                    <span className="product-short__name">

                                                        <a href="product-detail.html">New Dress C Nice Elegant</a></span>

                                                    <span className="product-short__category">

                                                        <a href="shop-side-version-2.html">Women Clothing</a></span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6 u-s-m-b-30">
                                        <div className="product-short u-h-100">
                                            <div className="product-short__container">
                                                <div className="product-short__img-wrap">

                                                    <a className="aspect aspect--bg-grey-fb aspect--square u-d-block" href="product-detail.html">

                                                        <img className="aspect__img product-short__img" src="images/product/women/product19.jpg" alt="" /></a></div>
                                                <div className="product-short__info">

                                                    <span className="product-short__price">$126.77</span>

                                                    <span className="product-short__name">

                                                        <a href="product-detail.html">New Dress D Nice Elegant</a></span>

                                                    <span className="product-short__category">

                                                        <a href="shop-side-version-2.html">Women Clothing</a></span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*====== End - Section Content ======*/}
                    </div>
                    {/*====== End - Section 5 ======*/}


                    {/*====== Section 6 ======*/}
                    <div className="u-s-p-b-60">

                        {/*====== Section Content ======*/}
                        <div className="section__content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-6 u-s-m-b-30">
                                        <div className="column-product">

                                            <span className="column-product__title u-c-secondary u-s-m-b-25">SPECIAL PRODUCTS</span>
                                            <ul className="column-product__list">
                                                <li className="column-product__item">
                                                    <div className="product-l">
                                                        <div className="product-l__img-wrap">

                                                            <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">

                                                                <img className="aspect__img" src="images/product/men/product9.jpg" alt="" /></a></div>
                                                        <div className="product-l__info-wrap">

                                                            <span className="product-l__category">

                                                                <a href="shop-side-version-2.html">Men Clothing</a></span>

                                                            <span className="product-l__name">

                                                                <a href="product-detail.html">New Fashion A Nice Elegant</a></span>

                                                            <span className="product-l__price">$125.00</span></div>
                                                    </div>
                                                </li>
                                                <li className="column-product__item">
                                                    <div className="product-l">
                                                        <div className="product-l__img-wrap">

                                                            <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">

                                                                <img className="aspect__img" src="images/product/men/product10.jpg" alt="" /></a></div>
                                                        <div className="product-l__info-wrap">

                                                            <span className="product-l__category">

                                                                <a href="shop-side-version-2.html">Men Clothing</a></span>

                                                            <span className="product-l__name">

                                                                <a href="product-detail.html">New Fashion B Nice Elegant</a></span>

                                                            <span className="product-l__price">$125.00</span></div>
                                                    </div>
                                                </li>
                                                <li className="column-product__item">
                                                    <div className="product-l">
                                                        <div className="product-l__img-wrap">

                                                            <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">

                                                                <img className="aspect__img" src="images/product/women/product9.jpg" alt="" /></a></div>
                                                        <div className="product-l__info-wrap">

                                                            <span className="product-l__category">

                                                                <a href="shop-side-version-2.html">Women Clothing</a></span>

                                                            <span className="product-l__name">

                                                                <a href="product-detail.html">New Dress A Nice Elegant</a></span>

                                                            <span className="product-l__price">$125.00</span></div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 u-s-m-b-30">
                                        <div className="column-product">

                                            <span className="column-product__title u-c-secondary u-s-m-b-25">WEEKLY PRODUCTS</span>
                                            <ul className="column-product__list">
                                                <li className="column-product__item">
                                                    <div className="product-l">
                                                        <div className="product-l__img-wrap">

                                                            <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">

                                                                <img className="aspect__img" src="images/product/women/product10.jpg" alt="" /></a></div>
                                                        <div className="product-l__info-wrap">

                                                            <span className="product-l__category">

                                                                <a href="shop-side-version-2.html">Women Clothing</a></span>

                                                            <span className="product-l__name">

                                                                <a href="product-detail.html">New Dress B Nice Elegant</a></span>

                                                            <span className="product-l__price">$125.00

                                                                <span className="product-l__discount">$160</span></span></div>
                                                    </div>
                                                </li>
                                                <li className="column-product__item">
                                                    <div className="product-l">
                                                        <div className="product-l__img-wrap">

                                                            <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">

                                                                <img className="aspect__img" src="images/product/women/product11.jpg" alt="" /></a></div>
                                                        <div className="product-l__info-wrap">

                                                            <span className="product-l__category">

                                                                <a href="shop-side-version-2.html">Women Clothing</a></span>

                                                            <span className="product-l__name">

                                                                <a href="product-detail.html">New Dress C Nice Elegant</a></span>

                                                            <span className="product-l__price">$125.00

                                                                <span className="product-l__discount">$160</span></span></div>
                                                    </div>
                                                </li>
                                                <li className="column-product__item">
                                                    <div className="product-l">
                                                        <div className="product-l__img-wrap">

                                                            <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">

                                                                <img className="aspect__img" src="images/product/women/product12.jpg" alt="" /></a></div>
                                                        <div className="product-l__info-wrap">

                                                            <span className="product-l__category">

                                                                <a href="shop-side-version-2.html">Women Clothing</a></span>

                                                            <span className="product-l__name">

                                                                <a href="product-detail.html">New Dress D Nice Elegant</a></span>

                                                            <span className="product-l__price">$125.00

                                                                <span className="product-l__discount">$160</span></span></div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 u-s-m-b-30">
                                        <div className="column-product">

                                            <span className="column-product__title u-c-secondary u-s-m-b-25">FLASH PRODUCTS</span>
                                            <ul className="column-product__list">
                                                <li className="column-product__item">
                                                    <div className="product-l">
                                                        <div className="product-l__img-wrap">

                                                            <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">

                                                                <img className="aspect__img" src="images/product/women/product13.jpg" alt="" /></a></div>
                                                        <div className="product-l__info-wrap">
                                                            <div className="product-l__rating gl-rating-style"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div>

                                                            <span className="product-l__category">

                                                                <a href="shop-side-version-2.html">Women Clothing</a></span>

                                                            <span className="product-l__name">

                                                                <a href="product-detail.html">New Dress E Nice Elegant</a></span>

                                                            <span className="product-l__price">$125.00</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="column-product__item">
                                                    <div className="product-l">
                                                        <div className="product-l__img-wrap">

                                                            <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">

                                                                <img className="aspect__img" src="images/product/women/product1.jpg" alt="" /></a></div>
                                                        <div className="product-l__info-wrap">
                                                            <div className="product-l__rating gl-rating-style"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div>

                                                            <span className="product-l__category">

                                                                <a href="shop-side-version-2.html">Women Clothing</a></span>

                                                            <span className="product-l__name">

                                                                <a href="product-detail.html">Women intimate Bra</a></span>

                                                            <span className="product-l__price">$125.00</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="column-product__item">
                                                    <div className="product-l">
                                                        <div className="product-l__img-wrap">

                                                            <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">

                                                                <img className="aspect__img" src="images/product/women/product2.jpg" alt="" /></a></div>
                                                        <div className="product-l__info-wrap">
                                                            <div className="product-l__rating gl-rating-style"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></div>

                                                            <span className="product-l__category">

                                                                <a href="shop-side-version-2.html">Women Clothing</a></span>

                                                            <span className="product-l__name">

                                                                <a href="product-detail.html">Women Wedding Event Dress</a></span>

                                                            <span className="product-l__price">$125.00</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*====== End - Section Content ======*/}
                    </div>
                    {/*====== End - Section 6 ======*/}


                    {/*====== Section 7 ======*/}
                    <div className="u-s-p-b-60">

                        {/*====== Section Content ======*/}
                        <div className="section__content">
                            <div className="container">

                                {/*====== Brand Slider ======*/}
                                <div className="slider-fouc">
                                    <div className="owl-carousel" id="brand-slider" data-item="5">
                                        <div className="brand-slide">

                                            <a href="shop-side-version-2.html">

                                                <img src="images/brand/b1.png" alt="" /></a></div>
                                        <div className="brand-slide">

                                            <a href="shop-side-version-2.html">

                                                <img src="images/brand/b2.png" alt="" /></a></div>
                                        <div className="brand-slide">

                                            <a href="shop-side-version-2.html">

                                                <img src="images/brand/b3.png" alt="" /></a></div>
                                        <div className="brand-slide">

                                            <a href="shop-side-version-2.html">

                                                <img src="images/brand/b4.png" alt="" /></a></div>
                                        <div className="brand-slide">

                                            <a href="shop-side-version-2.html">

                                                <img src="images/brand/b5.png" alt="" /></a></div>
                                        <div className="brand-slide">

                                            <a href="shop-side-version-2.html">

                                                <img src="images/brand/b6.png" alt="" /></a></div>
                                    </div>
                                </div>
                                {/*====== End - Brand Slider ======*/}
                            </div>
                        </div>
                        {/*====== End - Section Content ======*/}
                    </div>
                    {/*====== End - Section 7 ======*/}
                </div>
            </div>
        </div>
    )
}

export default Home
