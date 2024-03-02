import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextEditor from '../components/Editor/TextEditor';

function Feedback({ productId, onFeedbackData }) {
    const [reviews, setReviews] = useState([]);
    const [productDetail, setProductDetail] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [totalElements, setTotalElements] = useState(0);
    const [loading, setLoading] = useState(true);
    const [averageRating, setAverageRating] = useState(null);
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState('');

    const handleRatingChange = (value) => {
        setRating(value);
    };

    const handleReviewTextChange = (newData) => {
        setReviewText(newData);
      };
      

    const handlePageChange = async (newPage) => {
        if (newPage >= 0 && newPage < totalPages && newPage !== currentPage) {
            try {
                // Update the current page state
                setCurrentPage(newPage);
            } catch (error) {
                console.error('Error fetching feedback:', error);
                setLoading(false);
            }
        }
    };


    const fetchProductDetail = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/products/${productId}`);
            setProductDetail(response.data);
        } catch (error) {
            console.error('Error fetching product detail:', error);
        }
    };

    const fetchFeedbackData = async (page) => {
        try {
            const response1 = await axios.get(`http://localhost:8080/api/v1/feedbacks/product/${productId}?size=10&page=${page}`);
            const response2 = await axios.get(`http://localhost:8080/api/v1/feedbacks/average-rating/${productId}?size=10&page=${page}`);

            setReviews(response1.data.content);
            setAverageRating(response2.data);
            setTotalPages(response1.data.totalPages);
            setTotalElements(response1.data.totalElements);
            setLoading(false);

            if (onFeedbackData && typeof onFeedbackData === 'function') {
                onFeedbackData({ totalElements, averageRating });
            }

            console.log("Check feedback1: ", response1.data);
            console.log("Check feedback2: ", response2.data);
        } catch (error) {
            console.error('Error fetching feedback:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProductDetail();
    }, [productId]);

    useEffect(() => {
        fetchFeedbackData(currentPage);
    }, [productId, currentPage, onFeedbackData]);

    useEffect(() => {
        const fetchData = async () => {
            await fetchFeedbackData(currentPage);
        };

        fetchData();

        return () => {
            // Cleanup function
        };
    }, [currentPage]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`http://localhost:8080/api/v1/feedbacks/create`, {
                rating,
                status: 'status',
                comment: reviewText,
                productId: productId,
                userId: 1,
            });

            // Update the reviews state immediately with the new review
            setReviews((prevReviews) => [response.data, ...prevReviews]);

            console.log('Review submitted successfully:', response.data);
        } catch (error) {
            console.error('Error submitting review:', error);
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

    const parseHtml = (htmlString) => {
        const doc = new DOMParser().parseFromString(htmlString, 'text/html');
        return doc.body.textContent || '';
    };

    return (
        <div>
            <div className="tab-pane" id="pd-rev">
                <div className="pd-tab__rev">
                    <div className="u-s-m-b-30">
                        {reviews.length > 0 && averageRating !== null && !isNaN(averageRating) && (
                            <div className="pd-tab__rev-score">
                                <div className="u-s-m-b-8">
                                    <h2>
                                        {totalElements} Reviews - {averageRating.toFixed(1)} (Overall)
                                    </h2>
                                </div>
                                <div className="gl-rating-style-2 u-s-m-b-8">{generateStarRating(averageRating)}</div>
                                <div className="u-s-m-b-8">
                                    <h4>We want to hear from you!</h4>
                                </div>
                                <span className="gl-text">Tell us what you think about this item</span>
                            </div>
                        )}
                    </div>
                    <div className="u-s-m-b-30">
                        <form className="pd-tab__rev-f1">
                            <div className="rev-f1__group">
                                <div className="u-s-m-b-15">
                                    <div>
                                        {productDetail && <h2>{totalElements} Review(s) for {productDetail.name}</h2>}
                                    </div>
                                </div>
                                <div className="u-s-m-b-15">
                                    <label htmlFor="sort-review"></label>
                                    <select className="select-box select-box--primary-style" id="sort-review">
                                        <option selected="">Sort by: Best Rating</option>
                                        <option>Sort by: Worst Rating</option>
                                    </select>
                                </div>
                            </div>
                            {loading ? (
                                <p>Loading reviews...</p>
                            ) : (
                                <>
                                    {reviews.map((review, index) => (
                                        <div key={index} className="review-o u-s-m-b-15">
                                            <div className="review-o__info u-s-m-b-8">
                                                <span className="review-o__name">{review.userFullName}</span>
                                                <span className="review-o__date">{review.createdAt}</span>
                                            </div>
                                            <div key={index} className="review-o__item">
                                                <div className="review-o__rating gl-rating-style u-s-m-b-8">
                                                    {generateStarRating(review.rating)}
                                                    <span>({review.rating})</span>
                                                </div>
                                            </div>
                                            {/* <p className="review-o__text">{parseHtml(review.comment)}</p> */}
                                            <p className="review-o__text" dangerouslySetInnerHTML={{ __html: review.comment }}></p>
                                        </div>
                                    ))}

                                    {totalPages > 1 && (
                                        <div className="u-s-p-y-60">
                                            <ul className="shop-p__pagination">
                                                <li>
                                                    <a className="fas fa-angle-left" type="button" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 0}>
                                                    </a>
                                                </li>
                                                <span>{`Page ${currentPage + 1} of ${totalPages}`}</span>
                                                <li>
                                                    <a className="fas fa-angle-right" type="button" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages - 1}>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </>
                            )}
                        </form>
                    </div>
                    <div className="u-s-m-b-30">
                        <form className="pd-tab__rev-f2" onSubmit={handleSubmit}>
                            <h2 className="u-s-m-b-15">Add a Review</h2>
                            <span className="gl-text u-s-m-b-15">Your email address will not be published. Required fields are marked *</span>
                            <div className="u-s-m-b-30">
                                <div className="rev-f2__table-wrap gl-scroll">
                                    <table className="rev-f2__table">
                                        <thead>
                                            <tr>
                                                {[...Array(5)].map((_, i) => (
                                                    <th key={i}>
                                                        <div className="gl-rating-style-2">
                                                            {[...Array(i + 1)].map((_, j) => (
                                                                <i key={j} className="fas fa-star"></i>
                                                            ))}
                                                            <span>({i + 1})</span>
                                                        </div>
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                {[...Array(5)].map((_, i) => (
                                                    <td key={i}>
                                                        <div className="radio-box">
                                                            <input
                                                                type="radio"
                                                                id={`star-${i + 1}`}
                                                                name="rating"
                                                                onChange={() => handleRatingChange(i + 1)}
                                                            />
                                                            <div className="radio-box__state radio-box__state--primary">
                                                                <label className="radio-box__label" htmlFor={`star-${i + 1}`}></label>
                                                            </div>
                                                        </div>
                                                    </td>
                                                ))}
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="rev-f2__group">
                                        <div className="u-s-m-b-15">
                                            <label className="gl-label" htmlFor="reviewer-text">
                                                YOUR REVIEW *
                                            </label>

                                            <TextEditor data={reviewText} onChange={handleReviewTextChange} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button className="btn btn--e-brand-shadow" type="submit">
                                    SUBMIT
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feedback;
