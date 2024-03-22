import React, { useState, useEffect } from 'react'
import ReactImageMagnify from 'react-image-magnify';
import Slider from 'react-slick';
import './ProductDetailImage.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import RecommendedProductsSlider from '../components/RecommendedProductsSlider/RecommendedProductsSlider';
import Feedback from './Feedback';
import { useCart } from 'react-use-cart';
import { FeedbackProvider } from '../Feedback/FeedbackContext';


const ProductDetail = () => {
    const [images, setImages] = useState([]);
    const [largeImage, setLargeImage] = useState('');
    const [productDetail, setProductDetail] = useState(null);
    const [feedbackData, setFeedbackData] = useState({ totalElements: 0, averageRating: 0 });
    const { addItem } = useCart();

    const [reviews, setReviews] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [totalElements, setTotalElements] = useState(0);
    const [loading, setLoading] = useState(true);
    const [averageRating, setAverageRating] = useState(null);
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const { id } = useParams();


    useEffect(() => {
        fetchProductImages();
        fetchProductDetail();
        fetchFeedbackData();
    }, [id]);


    const fetchFeedbackData = async (page) => {
        try {
            setLoading(true); // Set loading to true before making the API call
            const response1 = await axios.get(`http://localhost:8080/api/v1/feedbacks/product/${id}`);
            const response2 = await axios.get(`http://localhost:8080/api/v1/feedbacks/average-rating/${id}`);

            setReviews(response1.data.content);
            setAverageRating(response2.data);
            setTotalPages(response1.data.totalPages);
            setTotalElements(response1.data.totalElements);
            setLoading(false); // Set loading to false after the API call is complete
            console.log("Check feedback1: ", response1.data);
            console.log("Check feedback2: ", response2.data);
        } catch (error) {
            console.error('Error fetching feedback:', error);
            setLoading(false); // Set loading to false in case of an error
        }
    };

    const handleReviewSubmission = () => {
        fetchFeedbackData();
    };

    const fetchProductImages = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/product_image/product/${id}`);
            setImages(response.data);
            setLargeImage(response.data[0].imageUrl);
            //console.log("Check images: ", response)
        } catch (error) {
            console.error('Error fetching product images:', error);
        }
    };

    const fetchProductDetail = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/products/${id}`);
            setProductDetail(response.data);
            console.log("Check product detail: ", response.data);
        } catch (error) {
            console.error('Error fetching product detail:', error);
        }
    };

    const generateStarRating = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<i key={i} className="fas fa-star"></i>);
        }

        if (halfStar) {
            stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
        }

        for (let i = 0; i < emptyStars; i++) {
            stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
        }

        return stars;
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <div className="slick-arrow slick-next"><i className="fas fa-chevron-right"></i></div>,
        prevArrow: <div className="slick-arrow slick-prev"><i className="fas fa-chevron-left"></i></div>,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    };

    const handleImageClick = (imageSrc) => {
        setLargeImage(imageSrc);
    };
    return (
        <div>
            {/* {/*--====== App Content ====== */}
            <div className="app-content">

                {/*--====== Section 1 ======*/}
                <div className="u-s-p-t-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">

                                {/*--====== Product Breadcrumb ======*/}
                                <div className="pd-breadcrumb u-s-m-b-30">
                                    <ul className="pd-breadcrumb__list">
                                        <li className="has-separator">

                                            <a href="index.hml">Home</a></li>
                                        <li className="has-separator">

                                            <a href="shop-side-version-2.html">Electronics</a></li>
                                        <li className="has-separator">

                                            <a href="shop-side-version-2.html">DSLR Cameras</a></li>
                                        <li className="is-marked">

                                            <a href="shop-side-version-2.html">Nikon Cameras</a></li>
                                    </ul>
                                </div>
                                {/*--====== End - Product Breadcrumb ======*/}


                                {/*--====== Product Detail Zoom ======*/}
                                <div className="pd u-s-m-b-30">
                                    <div className="u-s-m-t-15">
                                        <ReactImageMagnify {...{
                                            smallImage: {
                                                alt: '',
                                                isFluidWidth: true,
                                                src: largeImage
                                            },
                                            largeImage: {
                                                src: largeImage,
                                                width: 1200,
                                                height: 1800
                                            },
                                            lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' }
                                        }} />
                                    </div>
                                    <br />
                                    <div className="pd-wrap">
                                        <Slider {...settings}>
                                            {images.map((image, index) => (
                                                <div key={index} className="pd-o-img-wrap" onClick={() => handleImageClick(image.imageUrl)}>
                                                    <img className="u-img-fluid" src={image.imageUrl} alt="" />
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                </div>
                                {/*--====== End - Product Detail Zoom ======*/}
                            </div>
                            <div className="col-lg-7">

                                {/*--====== Product Right Side Details ======*/}
                                {productDetail && (
                                    <div className="pd-detail">
                                        <div>

                                            <span className="pd-detail__name">{productDetail.name}</span></div>
                                        <div>
                                            <div className="pd-detail__inline">

                                                <span className="pd-detail__price">${productDetail.priceSale}</span>

                                                <span className="pd-detail__discount">({productDetail.discount}% OFF)</span><del className="pd-detail__del">${productDetail.price}</del></div>
                                        </div>
                                        <div className="u-s-m-b-15">
                                            <div className="pd-detail__rating gl-rating-style">
                                                <i>{generateStarRating(averageRating)}</i>
                                                <span className="pd-detail__review u-s-m-l-4">

                                                    <a data-click-scroll="#view-review">{totalElements} Reviews</a></span></div>
                                        </div>
                                        <div className="u-s-m-b-15">
                                            <div className="pd-detail__inline">

                                                <span className="pd-detail__stock">{productDetail.quantity} in stock</span>

                                                <span className="pd-detail__left">{productDetail.quantitySold} products have been sold</span></div>
                                        </div>
                                        <div className="u-s-m-b-15">

                                            <span className="pd-detail__preview-desc">{productDetail.description}</span></div>
                                        <div className="u-s-m-b-15">
                                            <div className="pd-detail__inline">

                                                <span className="pd-detail__click-wrap"><i className="far fa-heart u-s-m-r-6"></i>

                                                    <a href="signin.html">Add to Wishlist</a>

                                                    <span className="pd-detail__click-count">(222)</span></span></div>
                                        </div>
                                        <div className="u-s-m-b-15">
                                            <div className="pd-detail__inline">

                                                <span className="pd-detail__click-wrap"><i className="far fa-envelope u-s-m-r-6"></i>

                                                    <a href="signin.html">Email me When the price drops</a>

                                                    <span className="pd-detail__click-count">(20)</span></span></div>
                                        </div>
                                        <div className="u-s-m-b-15">
                                            <ul className="pd-social-list">
                                                <li>

                                                    <a className="s-fb--color-hover" href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                <li>

                                                    <a className="s-tw--color-hover" href="#"><i className="fab fa-twitter"></i></a></li>
                                                <li>

                                                    <a className="s-insta--color-hover" href="#"><i className="fab fa-instagram"></i></a></li>
                                                <li>

                                                    <a className="s-wa--color-hover" href="#"><i className="fab fa-whatsapp"></i></a></li>
                                                <li>

                                                    <a className="s-gplus--color-hover" href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="u-s-m-b-15">
                                            <form className="pd-detail__form">
                                                <div className="pd-detail-inline-2">
                                                    <div className="u-s-m-b-15">

                                                        {/*--====== Input Counter ======*/}
                                                        <div className="input-counter">

                                                            <span className="input-counter__minus fas fa-minus"></span>

                                                            <input className="input-counter__text input-counter--text-primary-style" type="text" value="1" data-min="1" data-max="1000" />

                                                            <span className="input-counter__plus fas fa-plus"></span></div>
                                                        {/*--====== End - Input Counter ======*/}
                                                    </div>
                                                    <div className="u-s-m-b-15">

                                                        <button className="btn btn--e-brand-b-2" type="submit" onClick={() => addItem(productDetail)}>Add to Cart</button></div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="u-s-m-b-15">

                                            <span className="pd-detail__label u-s-m-b-8">Product Policy:</span>
                                            <ul className="pd-detail__policy-list">
                                                <li><i className="fas fa-check-circle u-s-m-r-8"></i>

                                                    <span>Buyer Protection.</span></li>
                                                <li><i className="fas fa-check-circle u-s-m-r-8"></i>

                                                    <span>Full Refund if you don't receive your order.</span></li>
                                                <li><i className="fas fa-check-circle u-s-m-r-8"></i>

                                                    <span>Returns accepted if product not as described.</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                )}
                                {/*--====== End - Product Right Side Details ======*/}
                            </div>
                        </div>
                    </div>
                </div>

                {/*--====== Product Detail Tab ======*/}
                <div className="u-s-p-y-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="pd-tab">
                                    <div className="u-s-m-b-30">
                                        <ul className="nav pd-tab__list">
                                            <li className="nav-item">

                                                <a className="nav-link active" data-toggle="tab" href="#pd-desc">DESCRIPTION</a></li>
                                            <li className="nav-item">

                                                <a className="nav-link" data-toggle="tab" href="#pd-tag">TAGS</a></li>
                                            <li className="nav-item">

                                                <a className="nav-link" id="view-review" data-toggle="tab" href="#pd-rev">REVIEWS ( {totalElements})
                                                </a></li>
                                        </ul>
                                    </div>
                                    <div className="tab-content">

                                        {/*--====== Tab 1 ======*/}
                                        <div className="tab-pane fade show active" id="pd-desc">
                                            <div className="pd-tab__desc">
                                                <div className="u-s-m-b-15">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                                </div>
                                                <div className="u-s-m-b-30"><iframe title='video' src="https://www.youtube.com/embed/XdBszfxtjj0?si=TG90gIPseNozjCbG" allowFullScreen></iframe></div>
                                                <div className="u-s-m-b-30">
                                                    <ul>
                                                        <li><i className="fas fa-check u-s-m-r-8"></i>

                                                            <span>Buyer Protection.</span></li>
                                                        <li><i className="fas fa-check u-s-m-r-8"></i>

                                                            <span>Full Refund if you don't receive your order.</span></li>
                                                        <li><i className="fas fa-check u-s-m-r-8"></i>

                                                            <span>Returns accepted if product not as described.</span></li>
                                                    </ul>
                                                </div>
                                                <div className="u-s-m-b-15">
                                                    <h4>PRODUCT INFORMATION</h4>
                                                </div>
                                                <div className="u-s-m-b-15">
                                                    <div className="pd-table gl-scroll">
                                                        <table>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Main Material</td>
                                                                    <td>Cotton</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Color</td>
                                                                    <td>Green, Blue, Red</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Sleeves</td>
                                                                    <td>Long Sleeve</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Top Fit</td>
                                                                    <td>Regular</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Print</td>
                                                                    <td>Not Printed</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Neck</td>
                                                                    <td>Round Neck</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Pieces Count</td>
                                                                    <td>1 Piece</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Occasion</td>
                                                                    <td>Casual</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Shipping Weight (kg)</td>
                                                                    <td>0.5</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*--====== End - Tab 1 ======*/}


                                        {/*--====== Tab 2 ======*/}
                                        <div className="tab-pane" id="pd-tag">
                                            <div className="pd-tab__tag">
                                                <h2 className="u-s-m-b-15">ADD YOUR TAGS</h2>
                                                <div className="u-s-m-b-15">
                                                    <form>

                                                        <input className="input-text input-text--primary-style" type="text" />

                                                        <button className="btn btn--e-brand-b-2" type="submit">ADD TAGS</button></form>
                                                </div>

                                                <span className="gl-text">Use spaces to separate tags. Use single quotes (') for phrases.</span>
                                            </div>
                                        </div>
                                        {/*--====== End - Tab 2 ======*/}


                                        {/*--====== Tab 3 ======*/}
                                        <div className="tab-pane" id="pd-rev">
                                            <FeedbackProvider>
                                                <Feedback productId={id} onReviewSubmission={handleReviewSubmission} />
                                            </FeedbackProvider>
                                        </div>

                                        {/*--====== End - Tab 3 ======*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*--====== End - Product Detail Tab ======*/}
                <div className="u-s-p-b-90">

                    {/*--====== Section Intro ======*/}
                    <div className="section__intro u-s-m-b-46">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section__text-wrap">
                                        <h1 className="section__heading u-c-secondary u-s-m-b-12">RECOMMENDED PRODUCT</h1>

                                        <span className="section__span u-c-grey">PRODUCTS THAT CUSTOMER VIEWED</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*--====== End - Section Intro ======*/}


                    {/*--====== Section Content ======*/}
                    {/* <div className="section__content">
                        <div className="container">
                            <div className="slider-fouc">
                                <div className="owl-carousel product-slider" data-item="4">
                                    <div className="u-s-m-b-30">
                                        <div className="product-o product-o--hover-on">
                                            <div className="product-o__wrap">

                                                <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">

                                                    <img className="aspect__img" src="images/product/electronic/product1.jpg" alt="" /></a>
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

                                                <a href="shop-side-version-2.html">Electronics</a></span>

                                            <span className="product-o__name">

                                                <a href="product-detail.html">Beats Bomb Wireless Headphone</a></span>
                                            <div className="product-o__rating gl-rating-style"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>

                                                <span className="product-o__review">(20)</span></div>

                                            <span className="product-o__price">$125.00

                                                <span className="product-o__discount">$160.00</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <RecommendedProductsSlider />
                    {/*--====== End - Section Content ======*/}
                </div>
                {/*--====== End - Section 1 ======*/}
            </div>
            {/*--====== End - App Content ======*/}
        </div>
    )
}

export default ProductDetail
