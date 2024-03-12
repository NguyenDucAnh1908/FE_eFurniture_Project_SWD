import React, { Component, useState } from 'react';
import Slider from "react-slick";
import axios from 'axios';
import { useEffect } from 'react';
import { fetchallUser } from '../services/UserService';
import {
    fetchAllProductByCategory, fetchallProduct,
    fetchallProductByTop5BestSelling, fetchallProductByTop5Rating
} from '../services/productApi/ProductApi';
import { fetchallCategory } from '../services/CategoryApi/CategoryApi';
import './ProductList.css';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import BrandSlider from '../components/BrandSlider/BrandSlider';
import HomeSlider from '../components/HomeSlider/HomeSlider';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function Home() {
    const [listProduct, setListProduct] = useState([]);
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [categoriesMost, setCategoriesMost] = useState([]);
    const [topFire, setTopFire] = useState([]);
    const [topFireRating, setTopFireRating] = useState([]);
    const [initialProductCount, setInitialProductCount] = useState(12);
    const [productsPerPage, setProductsPerPage] = useState(8);
    const visibleProducts = products.slice(0, initialProductCount);
    useEffect(() => {
        getProduct();
        fetchCategories();
        //fetchProducts();
        fetchTop5ProducstBestSelling();
        fetchTop5ProducstRating();
    }, []);
    const ProductList = () => {
        // ...
    };

    const getProduct = async () => {
        let res = await fetchallProduct();
        setListProduct(res)
        //console.log("Check product all res: ", res)
    }

    useEffect(() => {
        fetchProducts(selectedCategory);
    }, [selectedCategory]);

    const fetchCategories = async () => {
        try {
            const response = await fetchallCategory();
            if (response && response) {
                setCategories(response);
            }
            //console.log("Check la category: ", response)
        } catch (error) {
            console.error("Lỗi khi lấy danh sách danh mục:", error);
        }
    };

    const fetchTop5ProducstBestSelling = async () => {
        try {
            const res = await fetchallProductByTop5BestSelling();
            if (res && res) {
                setTopFire(res);
            }
            //console.log("Check top 4", res);
        } catch (error) {
            console.error("Lỗi khi lấy danh sách danh mục:", error);
        }
    };

    const fetchTop5ProducstRating = async () => {
        try {
            const res = await fetchallProductByTop5Rating();
            if (res && res) {
                setTopFireRating(res);
            }
            //console.log("Check top ", res);
        } catch (error) {
            console.error("Lỗi khi lấy danh sách danh mục:", error);
        }
    };



    // const fetchProducts = async (categoryId = null) => {
    //     let url = await fetchAllProductByCategory();
    //     if (categoryId) {
    //         url += `?category_id=${categoryId}`;
    //     }

    //     try {
    //         const response = await axios.get(url);
    //         if (response && response.data) {
    //             setProducts(response.data);
    //         }
    //     } catch (error) {
    //         console.error("Lỗi khi lấy danh sách sản phẩm:", error);
    //     }
    // }

    const fetchProducts = async (categoryId = null) => {
        let url = 'http://localhost:8080/api/v1/products/category';
        if (categoryId) {
            url += `?category_id=${categoryId}`;
        }

        try {
            const token = localStorage.getItem('jwt');
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };

            const response = await axios.get(url, config);
            console.log("Check response get all products", response.data);
            if (response && response.data) {
                setProducts(response.data);
            }
        } catch (error) {
            console.error("Lỗi khi lấy danh sách sản phẩm:", error);
        }
    };


    const handleCategoryClick = (categoryId) => {
        setSelectedCategory(categoryId);
    };

    useEffect(() => {
        // Gọi API để lấy danh sách các danh mục phổ biến nhất
        axios.get('http://localhost:8080/api/v1/categories/most-purchased')
            .then(response => {
                // Cập nhật state với dữ liệu trả về từ API
                setCategoriesMost(response.data);
            })
            .catch(error => {
                // Xử lý lỗi nếu có
                console.error('Error fetching categories:', error);
            });
    }, []);
    const handleLoadMore = () => {
        setInitialProductCount(initialProductCount + productsPerPage);
    };
    //console.log("Check product by category: ", products)
    // console.log(listProduct);
    // const {user} = React.useContext(UserContext);
    // console.log("Check useContext: ", user)
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
                    <HomeSlider />
                    {/*====== Section 1 ======*/}
                    <div className="u-s-p-y-60">

                        {/*====== Section Content ======*/}
                        <div className="section__content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-6 u-s-m-b-30">
                                        <div className="promotion-o">
                                            <div className="aspect aspect--bg-grey aspect--square">

                                                <img className="aspect__img" src="https://firebasestorage.googleapis.com/v0/b/efurniturestorage.appspot.com/o/images_eFurniture%2Fpexels-vecislavas-popa-1643383.jpg?alt=media&token=18f4aeb6-8151-49fa-a9d6-c62fd821985d" alt="" /></div>
                                            <div className="promotion-o__content">

                                                <a className="promotion-o__link btn--e-white-brand" href="/product-category">Efurniture category</a></div>
                                        </div>
                                    </div>
                                    {/* {categoriesMost.map(categories => (
                                        <div key={categories.id} className="col-lg-4 col-md-4 col-sm-6 u-s-m-b-30">
                                            <div className="promotion-o">
                                                <div className="aspect aspect--bg-grey aspect--square">
                                                    <img className="aspect__img" src={categories.imageUrl} alt={categories.name} />
                                                </div>
                                                <div className="promotion-o__content">
                                                    <a className="promotion-o__link btn--e-white-brand" href={`/category/${categories.id}`}>{categories.name}</a>
                                                </div>
                                            </div>
                                        </div>
                                    ))} */}
                                    <div className="col-lg-4 col-md-4 col-sm-6 u-s-m-b-30">
                                        <div className="promotion-o">
                                            <div className="aspect aspect--bg-grey aspect--square">

                                                <img className="aspect__img" src="https://firebasestorage.googleapis.com/v0/b/efurniturestorage.appspot.com/o/images_eFurniture%2Fpexels-jonathan-borba-5570225.jpg?alt=media&token=524e401e-0de7-4706-a1d1-10a9e250e715" alt="" /></div>
                                            <div className="promotion-o__content">

                                                <a className="promotion-o__link btn--e-white-brand" href="/product-tag">Efurniture Material</a></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 u-s-m-b-30">
                                        <div className="promotion-o">
                                            <div className="aspect aspect--bg-grey aspect--square">

                                                <img className="aspect__img" src="https://firebasestorage.googleapis.com/v0/b/efurniturestorage.appspot.com/o/images_eFurniture%2Fpexels-max-vakhtbovycn-6587896.jpg?alt=media&token=b6810c50-1ec8-4268-b2b8-1aec9369d0d4" alt="" /></div>
                                            <div className="promotion-o__content">

                                                <a className="promotion-o__link btn--e-white-brand" href="/product-brand">Efurniture Brand</a></div>
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
                                        <div className="col-lg-5 col-md-5 u-s-m-b-30">

                                            <a className="collection" href="shop-side-version-2.html">
                                                <div className="aspect aspect--bg-grey aspect--square">

                                                    <img className="aspect__img collection__img" src="images/collection/coll-1.jpg" alt="" /></div>
                                            </a>
                                        </div>
                                        <div className="col-lg-7 col-md-7 u-s-m-b-30">

                                            <a className="collection" href="shop-side-version-2.html">
                                                <div className="aspect aspect--bg-grey aspect--1286-890">

                                                    <img className="aspect__img collection__img" src="images/collection/coll-2.jpg" alt="" /></div>
                                            </a>
                                        </div>
                                        <div className="col-lg-4 col-md-5 u-s-m-b-30">

                                            <a className="collection" href="shop-side-version-2.html">
                                                <div className="aspect aspect--bg-grey aspect--square">

                                                    <img className="aspect__img collection__img" src="images/collection/coll-4.jpg" alt="" /></div>
                                            </a>
                                        </div>
                                        {/* <div className="col-lg-4 col-md-7 u-s-m-b-30">

                            <a className="collection" href="shop-side-version-2.html">
                                <div className="aspect aspect--bg-grey aspect--1286-890">

                                    <img className="aspect__img collection__img" src="images/collection/coll-3.jpg" alt="" /></div>
                            </a>
                        </div> */}
                                        <div className="col-lg-4 col-md-5 u-s-m-b-30">

                                            <a className="collection" href="shop-side-version-2.html">
                                                <div className="aspect aspect--bg-grey aspect--square">

                                                    <img className="aspect__img collection__img" src="images/collection/coll-4.jpg" alt="" /></div>
                                            </a>
                                        </div>
                                        <div className="col-lg-4 col-md-5 u-s-m-b-30">

                                            <a className="collection" href="shop-side-version-2.html">
                                                <div className="aspect aspect--bg-grey aspect--square">

                                                    <img className="aspect__img collection__img" src="images/collection/coll-4.jpg" alt="" /></div>
                                            </a>
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
                                    {visibleProducts && visibleProducts.length > 0 && visibleProducts.map((productItem, index) => (
                                        <div className="col-lg-3 col-md-4 col-sm-6 u-s-m-b-30" key={`products-${productItem}`}>
                                            <div className="product-r u-h-100">
                                                <div className="product-r__container">

                                                    <Link className="aspect aspect--bg-grey aspect--square u-d-block" to={`/product-detail/${productItem.id}`}>

                                                        <img className="aspect__img" src={productItem.thumbnail} alt="" />
                                                    </Link>
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

                                                        <a href="shop-side-version-2.html">{productItem.category_id.name}</a></span>
                                                    <div className="product-r__n-p-wrap">

                                                        <span className="product-r__name">

                                                            <Link to={`/product-detail/${productItem.id}`}>{productItem.name}</Link></span>

                                                        <span className="product-r__price">{productItem.price}</span></div>

                                                    <span className="product-r__description">{productItem.description}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="section__text-wrap">
                                <button className="btn btn--e-brand btn--load-more" type="button" onClick={handleLoadMore}>Load More</button>

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
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="filter-category-container">
                                            <div className="filter__category-wrapper">
                                                <button className={`btn filter__btn filter__btn--style-2 ${selectedCategory === null ? 'js-checked' : ''}`} type="button" onClick={() => handleCategoryClick(null)}>ALL</button>
                                            </div>
                                            {categories && categories.length > 0 && categories.map((category) => (
                                                <div className="filter__category-wrapper" key={category.id}>
                                                    <button className={`btn filter__btn filter__btn--style-2 ${selectedCategory === category.id ? 'js-checked' : ''}`} type="button" onClick={() => handleCategoryClick(category.id)}>
                                                        {category.name}
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="filter__grid-wrapper u-s-m-t-30">
                                            <TransitionGroup className="row">

                                                {visibleProducts && visibleProducts.length > 0 && visibleProducts.map((product, index) => (
                                                    <CSSTransition key={index} timeout={500} classNames="item">
                                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30 filter__item" key={index}>
                                                            <div className="product-bs">
                                                                <div className="product-bs__container">
                                                                    <Link className="aspect aspect--bg-grey aspect--square u-d-block" to={`/product-detail/${product.id}`}>
                                                                        <img className="aspect__img" src={product.thumbnail} alt="" />
                                                                    </Link>
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
                                                                    {/* Rest of your product details */}
                                                                    <span className="product-bs__category">

                                                                        <Link to={`/product-detail/${product.id}`}>{product.category_id.name}</Link></span>

                                                                    <span className="product-bs__name">

                                                                        <Link to={`/product-detail/${product.id}`}>{product.name}</Link></span>
                                                                    <div className="product-bs__rating gl-rating-style"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i>

                                                                        {/* <span className="product-bs__review">(23)</span> */}
                                                                    </div>

                                                                    <span className="product-bs__price">${product.price}

                                                                        <span className="product-bs__discount">${product.price_sale}</span></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </CSSTransition>
                                                ))}

                                            </TransitionGroup>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="section__text-wrap">
                                            <button className="btn btn--e-brand btn--load-more" type="button" onClick={handleLoadMore}>Load More</button>
                                        </div>
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
                                    {visibleProducts && visibleProducts.length > 0 && visibleProducts.map((productItem, index) => (
                                        <div className="col-lg-3 col-md-4 col-sm-6 u-s-m-b-30">
                                            <div className="product-short u-h-100">
                                                <div className="product-short__container">
                                                    <div className="product-short__img-wrap">

                                                        <Link className="aspect aspect--bg-grey-fb aspect--square u-d-block" to={`/product-detail/${productItem.id}`}>

                                                            <img className="aspect__img product-short__img" src={productItem.thumbnail} alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="product-short__info">

                                                        <span className="product-short__price">$126.77</span>

                                                        <span className="product-short__name">

                                                            <Link to={`/product-detail/${productItem.id}`}>New Dress A Nice Elegant</Link></span>

                                                        <span className="product-short__category">

                                                            <Link to={`/product-detail/${productItem.id}`}>Women Clothing</Link></span></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="col-lg-12">
                                        <div className="section__text-wrap">
                                            <button className="btn btn--e-brand btn--load-more" type="button" onClick={handleLoadMore}>Load More</button>
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
                        {/* <div className="section__content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-6 u-s-m-b-30">
                                        <div className="column-product">

                                            <span className="column-product__title u-c-secondary u-s-m-b-25">SPECIAL PRODUCTS</span>
                                            <ul className="column-product__list">
                                                {topFire && topFire.length > 0 &&
                                                    topFire.map((topFireItem, index) => {
                                                        return (
                                                            <li className="column-product__item">
                                                                <div className="product-l">
                                                                    <div className="product-l__img-wrap">

                                                                        <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">

                                                                            <img className="aspect__img" src={topFireItem.thumbnail} alt="" /></a></div>
                                                                    <div className="product-l__info-wrap">

                                                                        <span className="product-l__category">

                                                                            <a href="shop-side-version-2.html">Men Clothing</a></span>

                                                                        <span className="product-l__name">

                                                                            <a href="product-detail.html">New Fashion A Nice Elegant</a></span>

                                                                        <span className="product-l__price">$125.00</span></div>
                                                                </div>
                                                            </li>
                                                        )
                                                    })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/*====== Section 10 ======*/}
                        <div className="u-s-p-b-60">
                            {/*====== Section Intro ======*/}
                            <div className="section__intro u-s-m-b-46">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="section__text-wrap">
                                                <h1 className="section__heading u-c-secondary u-s-m-b-12">LATEST FROM BLOG</h1>
                                                <span className="section__span u-c-silver">START YOU DAY WITH FRESH AND LATEST NEWS</span>
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
                                        <div className="col-lg-4 col-md-6 u-s-m-b-30">
                                            <div className="bp-mini bp-mini--img u-h-100">
                                                <div className="bp-mini__thumbnail">
                                                    {/*====== Image Code ======*/}
                                                    <a className="aspect aspect--bg-grey aspect--1366-768 u-d-block" href="blog-detail.html">
                                                        <img className="aspect__img" src="images/blog/post-2.jpg" alt /></a>
                                                    {/*====== End - Image Code ======*/}
                                                </div>
                                                <div className="bp-mini__content">
                                                    <div className="bp-mini__stat">
                                                        <span className="bp-mini__stat-wrap">
                                                            <span className="bp-mini__publish-date">
                                                                <a>
                                                                    <span>25 February 2018</span></a></span></span>
                                                        <span className="bp-mini__stat-wrap">
                                                            <span className="bp-mini__preposition">By</span>
                                                            <span className="bp-mini__author">
                                                                <a href="#">Dayle</a></span></span>
                                                        <span className="bp-mini__stat">
                                                            <span className="bp-mini__comment">
                                                                <a href="blog-detail.html"><i className="far fa-comments u-s-m-r-4" />
                                                                    <span>8</span></a></span></span></div>
                                                    <div className="bp-mini__category">
                                                        <a>Learning</a>
                                                        <a>News</a>
                                                        <a>Health</a></div>
                                                    <span className="bp-mini__h1">
                                                        <a href="blog-detail.html">Life is an extraordinary Adventure</a></span>
                                                    <p className="bp-mini__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                    <div className="blog-t-w">
                                                        <a className="gl-tag btn--e-transparent-hover-brand-b-2">Travel</a>
                                                        <a className="gl-tag btn--e-transparent-hover-brand-b-2">Culture</a>
                                                        <a className="gl-tag btn--e-transparent-hover-brand-b-2">Place</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*====== End - Section Content ======*/}
                        </div>
                        {/*====== End - Section 10 ======*/}

                        {/*====== End - Section Content ======*/}
                    </div>
                    {/*====== End - Section 6 ======*/}


                    {/*====== Section 7 ======*/}
                    <BrandSlider />
                    {/*====== End - Section 7 ======*/}
                </div>
            </div>
        </div>
    )
}

export default Home
