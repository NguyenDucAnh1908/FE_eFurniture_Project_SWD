import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextEditor from '../components/Editor/TextEditor';
import { useFeedback } from '../Feedback/FeedbackContext';


function Feedback({ productId, onReviewSubmission }) {
    const [reviews, setReviews] = useState([]);
    const [productDetail, setProductDetail] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [totalElements, setTotalElements] = useState(0);
    const [loadingReviews, setLoadingReviews] = useState(true);
    const [averageRating, setAverageRating] = useState(null);
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const [replyingReviewId, setReplyingReviewId] = useState(null);
    const [replyText, setReplyText] = useState('');
    const { state, dispatch } = useFeedback();

    const handleRatingChange = (value) => {
        setRating(value);
    };

    const handleReplyClick = (reviewId) => {
        setReplyingReviewId(reviewId);
    };

    const handleReviewTextChange = (newData) => {
        setReviewText(newData);
    };

    const handlePageChange = async (newPage) => {
        if (newPage >= 0 && newPage < totalPages && newPage !== currentPage) {
            try {
                setCurrentPage(newPage);
            } catch (error) {
                console.error('Error fetching feedback:', error);
                setLoadingReviews(false);
            }
        }
    };

    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/products/${productId}`);
                setProductDetail(response.data);
            } catch (error) {
                console.error('Error fetching product detail:', error);
            }
        };
        fetchProductDetail();
    }, [productId]);

    const fetchFeedbackData = async (page) => {
        try {
            const response1 = await axios.get(`http://localhost:8080/api/v1/feedbacks/product/${productId}?size=10&page=${page}`);
            const response2 = await axios.get(`http://localhost:8080/api/v1/feedbacks/average-rating/${productId}?size=10&page=${page}`);

            setReviews(response1.data.content);
            setAverageRating(response2.data);
            setTotalPages(response1.data.totalPages);
            setTotalElements(response1.data.totalElements);
            setLoadingReviews(false);
            console.log("Check feedback1: ", response1.data);
            console.log("Check feedback2: ", response2.data);
        } catch (error) {
            console.error('Error fetching feedback:', error);
            setLoadingReviews(false);
        }
    };

    useEffect(() => {
        fetchFeedbackData(currentPage);
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

            dispatch({ type: 'ADD_FEEDBACKS', payload: response.data.content });

            setReviews((prevReviews) => [response.data, ...prevReviews]);
            setTotalElements((prevCount) => prevCount + 1);
            const newAverageRating = ((averageRating || 0) * totalElements + response.data.rating) / (totalElements + 1);
            setAverageRating(newAverageRating);
            setRating(0);
            setReviewText('');
            const ratingRadios = document.getElementsByName('rating');
            ratingRadios.forEach((radio) => (radio.checked = false));

            fetchFeedbackData(currentPage);
            onReviewSubmission();
            console.log('Review submitted successfully:', response.data);
        } catch (error) {
            if (error.response && error.response.status === 400) {
                console.log('Validation errors:', error.response.data);
            } else {
                console.error('Error submitting review:', error);
            }
        }
    };  

    const handleSubmitReply = async (event, feedbackId, replyText) => {
        event.preventDefault();
        try {
            if (feedbackId) {
                const response = await axios.post(`http://localhost:8080/api/v1/feedbacks/reply/${feedbackId}?replierId=2&reply=${replyText}`);
                dispatch({ type: 'ADD_REPLY', payload: { id: feedbackId, reply: response.data } });
                fetchFeedbackData(currentPage);
                onReviewSubmission();
                console.log('Reply submitted successfully:', response.data);
            } else {
                console.error('Invalid feedbackId:', feedbackId);
                console.error('error:',);
            }
        } catch (error) {
            console.error('Error submitting reply:', error);
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

    return (
        <div>
            <div className="tab-pane" id="pd-rev">
                <div className="pd-tab__rev">
                    <div className="u-s-m-b-30">
                        {loadingReviews ? (
                            <p>Loading reviews...</p>
                        ) : (
                            reviews.length > 0 && averageRating !== null && !isNaN(averageRating) && (
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
                            )
                        )}
                    </div>
                    <div className="u-s-m-b-30">
                        <div className="pd-tab__rev-f1">
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
                            {loadingReviews ? (
                                <p>Loading reviews...</p>
                            ) : (
                                <>
                                    {reviews.map((review, index) => (
                                        <div key={index} className="review-o u-s-m-b-15">
                                            <div className="review-o__info u-s-m-b-8">
                                                <span className="review-o__name">{review.userFullName}</span>
                                                <span className="review-o__date">{review.created_at}</span>
                                            </div>

                                            <div className="review-o__item">
                                                <div className="review-o__rating gl-rating-style u-s-m-b-8">
                                                    {generateStarRating(review.rating)}
                                                    <span>({review.rating})</span>
                                                </div>
                                            </div>

                                            <p className="review-o__text" dangerouslySetInnerHTML={{ __html: review.comment }}></p>

                                            {review.reply && (
                                                <div className="review-o u-s-m-b-15">
                                                    <div className="review-o__info u-s-m-b-8">
                                                        <span className="review-o__name">Replier: {review.replierName}</span>
                                                        <span className="review-o__date">{review.updated_at}</span>
                                                    </div>
                                                    <p className="reply-o__text">{review.reply}</p>
                                                </div>
                                            )}

                                            {!replyingReviewId && (
                                                <a onClick={() => handleReplyClick(review.id)}>Reply</a>
                                            )}
                                            {replyingReviewId === review.id && (
                                                <form onSubmit={(event) => handleSubmitReply(event, review.id, replyText)}>
                                                    <label htmlFor="replyText">Your Reply:</label>
                                                    <textarea
                                                        id="replyText"
                                                        value={replyText}
                                                        onChange={(e) => setReplyText(e.target.value)}
                                                    ></textarea>
                                                    <button type="submit">Submit Reply</button>
                                                </form>
                                            )}
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
                        </div>
                    </div>
                    <div className="u-s-m-b-30">
                        <form className="pd-tab__rev-f2" onSubmit={handleSubmit}>
                            <h2 className="u-s-m-b-15">Add a Review</h2>
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
