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
import { useCart } from 'react-use-cart';

function Home() {
    const { addItem } = useCart();
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

    const [productsBestSelling, setProductsBestSelling] = useState([]);
    const [initialProductCountBestSelling, setInitialProductCountBestSelling] = useState(12);
    const [productsPerBestSellingPage, setProductsPerBestSellingPage] = useState(8);
    const visibleProductsBestSelling = productsBestSelling.slice(0, initialProductCountBestSelling);

    const [productsRecent, setProductsRecent] = useState([]);
    const [initialProductCountRecent, setInitialProductCountRecent] = useState(12);
    const [productsPerRecentPage, setProductsPerRecentPage] = useState(8);
    const visibleProductsRecent = productsRecent.slice(0, initialProductCountRecent);

    
    const [slides, setSlides] = useState([]);
    const [tags, setTags] = useState({});
    useEffect(() => {
        getProduct();
        fetchCategories();
        getProductBestSelling();
        getProductRecent();
    }, []);
    const ProductList = () => {
        // ...
    };

    const getProductRecent = async () => {
        let res = await fetchallProduct();
        setProductsRecent(res)
        //console.log("Check product all res: ", res)
    }

    const getProductBestSelling = async () => {
        let res = await fetchallProduct();
        setProductsBestSelling(res)
        //console.log("Check product all res: ", res)
    }

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
            // const token = localStorage.getItem('jwt');
            // const config = {
            //     headers: {
            //         'Authorization': `Bearer ${token}`
            //     }
            // };
            // const response = await axios.get(url, config);
            const response = await axios.get(url);
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

    const handleLoadMoreBestSelling = () => {
        setInitialProductCountBestSelling(initialProductCountBestSelling + productsPerBestSellingPage);
    };

    const handleLoadMoreRecent = () => {
        setInitialProductCountRecent(initialProductCountRecent + productsPerRecentPage);
    };
    //console.log("Check product by category: ", products)
    // console.log(listProduct);
    // const {user} = React.useContext(UserContext);
    // console.log("Check useContext: ", user)



    useEffect(() => {
        fetch('http://localhost:8080/api/v1/blogs/latest-three-blogs')
            .then(response => response.json())
            .then(data => setSlides(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    
    
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        } else {
            return text;
        }
    };


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

                                                <img className="aspect__img" src="https://res.cloudinary.com/dbzzkebfm/image/upload/v1710946007/1_fyqakb.jpg" alt="" /></div>
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

                                                <img className="aspect__img" src="https://res.cloudinary.com/dbzzkebfm/image/upload/v1710946005/3_sthkb5.jpg" alt="" /></div>
                                            <div className="promotion-o__content">

                                                <a className="promotion-o__link btn--e-white-brand" href="/product-tag">Efurniture Material</a></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 u-s-m-b-30">
                                        <div className="promotion-o">
                                            <div className="aspect aspect--bg-grey aspect--square">

                                                <img className="aspect__img" src="https://res.cloudinary.com/dbzzkebfm/image/upload/v1710946005/2_prig0p.jpg" alt="" /></div>
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

                                            <a className="collection" href="/shop">
                                                <div className="aspect aspect--bg-grey aspect--square">

                                                    <img className="aspect__img collection__img" src="https://res.cloudinary.com/dbzzkebfm/image/upload/v1710946200/pexels-donald-tong-133919_ctjnpu.jpg" alt="" /></div>
                                            </a>
                                        </div>
                                        <div className="col-lg-7 col-md-7 u-s-m-b-30">

                                            <a className="collection" href="/shop">
                                                <div className="aspect aspect--bg-grey aspect--1286-890">

                                                    <img className="aspect__img collection__img" src="https://res.cloudinary.com/dbzzkebfm/image/upload/v1710946199/pexels-pixabay-37347_kdczd2.jpg" alt="" /></div>
                                            </a>
                                        </div>
                                        <div className="col-lg-4 col-md-5 u-s-m-b-30">

                                            <a className="collection" href="/shop">
                                                <div className="aspect aspect--bg-grey aspect--square">

                                                    <img className="aspect__img collection__img" src="https://res.cloudinary.com/dbzzkebfm/image/upload/v1710946199/pexels-sammsara-luxury-modern-home-1099816_1_n6hpep.jpg" alt="" /></div>
                                            </a>
                                        </div>
                                        {/* <div className="col-lg-4 col-md-7 u-s-m-b-30">

                            <a className="collection" href="shop-side-version-2.html">
                                <div className="aspect aspect--bg-grey aspect--1286-890">

                                    <img className="aspect__img collection__img" src="images/collection/coll-3.jpg" alt="" /></div>
                            </a>
                        </div> */}
                                        <div className="col-lg-4 col-md-5 u-s-m-b-30">

                                            <a className="collection" href="/shop">
                                                <div className="aspect aspect--bg-grey aspect--square">

                                                    <img className="aspect__img collection__img" src="https://res.cloudinary.com/dbzzkebfm/image/upload/v1710946198/pexels-pixabay-275484_1_fy8em2.jpg" alt="" /></div>
                                            </a>
                                        </div>
                                        <div className="col-lg-4 col-md-5 u-s-m-b-30">

                                            <a className="collection" href="/shop">
                                                <div className="aspect aspect--bg-grey aspect--square">

                                                    <img className="aspect__img collection__img" src="https://res.cloudinary.com/dbzzkebfm/image/upload/v1710932160/pexels-fauxels-3184191_xra46i.jpg" alt="" /></div>
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
                                    {visibleProductsRecent && visibleProductsRecent.length > 0 && visibleProductsRecent.map((productItem, index) => (
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

                                                                <a data-modal="modal" data-modal-id="#add-to-cart" onClick={() => addItem(productItem)}><i className="fas fa-plus-circle"></i></a></li>
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
                                <button className="btn btn--e-brand btn--load-more" type="button" onClick={handleLoadMoreRecent}>Load More</button>

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

                                                                                <a data-modal="modal" data-modal-id="#add-to-cart" onClick={() => addItem(product)}><i className="fas fa-plus-circle"></i></a></li>
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
                                    {visibleProductsBestSelling && visibleProductsBestSelling.length > 0 && visibleProductsBestSelling.map((productItem, index) => (
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
                                            <button className="btn btn--e-brand btn--load-more" type="button" onClick={handleLoadMoreBestSelling}>Load More</button>
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
                                        {slides.map((blog, index) => (
                                            <div className="col-lg-4 col-md-6 u-s-m-b-30">
                                                <div className="bp-mini bp-mini--img u-h-100">
                                                    <div className="bp-mini__thumbnail">
                                                        {/*====== Image Code ======*/}
                                                        <Link to={`/blog-detail/${blog.id}`} className="aspect aspect--bg-grey aspect--1366-768 u-d-block">
                                                            <img className="aspect__img" src={blog.thumbnail} alt="" />

                                                        </Link>
                                                        {/*====== End - Image Code ======*/}
                                                    </div>
                                                    <div className="bp-mini__content">
                                                        <div className="bp-mini__stat">
                                                            <span className="bp-mini__stat-wrap">
                                                                <span className="bp-mini__publish-date">
                                                                    <a>
                                                                        <span>{blog.createdAt}</span></a></span></span>
                                                            <span className="bp-mini__stat-wrap">
                                                                <span className="bp-mini__preposition"></span>
                                                                <span className="bp-mini__author">
                                                                    <a href="#">{blog.userFullName}</a></span></span>
                                                        </div>
                                                        <div className="bp-mini__category">
                                                            {blog.categoryNames.map((category, index) => (
                                                                <React.Fragment key={index}>
                                                                    <a>{category}</a>
                                                                    {index < blog.categoryNames.length - 1 && ' '}
                                                                </React.Fragment>
                                                            ))}
                                                        </div>
                                                        <Link to={`/blog-detail/${blog.id}`} className="bp__h1">
                                                        <span className="bp-mini__h1">
                                                            <a href="blog-detail.html">{blog.title}</a></span></Link>
                                                        <p className="bp-mini__p">{truncateText(blog.content.replace(/<[^>]*>/g, ''), 100)}</p>
                                                        <div className="blog-t-w">
                                                            {blog.tagsBlogName.map((tag, index) => (
                                                                <a key={index} className="gl-tag btn--e-transparent-hover-brand-b-2">{tag}</a>
                                                            ))}

                                                        </div>
                                                        <span className="bp__read-more">

                                                            <Link to={`/blog-detail/${blog.id}`} className="bp__read-more">
                                                                <a href="blog-detail">READ MORE</a>
                                                            </Link>

                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
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
