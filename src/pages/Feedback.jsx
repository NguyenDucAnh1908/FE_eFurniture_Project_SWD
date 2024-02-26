import React, { useState, useEffect } from 'react';
import { fetchallFeedback } from '../services/feedbackService'; // Đảm bảo thay đổi đường dẫn tới file chứa service của bạn

function Feedback() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const getFeedback = async () => {
            try {
                const response = await fetchallFeedback();
                setReviews(response.data);
            } catch (error) {
                console.error('Lỗi khi lấy phản hồi:', error);
            }
        };

        getFeedback();
    }, []);

    return (
        <div>
            <div className="tab-pane" id="pd-rev">
                {/* ... Phần hiển thị thông tin tổng quan của đánh giá ... */}
            </div>
            <div className="u-s-m-b-30">
                <form className="pd-tab__rev-f1">
                    {/* ... Phần hiển thị danh sách đánh giá ... */}
                    {reviews.map((review, index) => (
                        <div key={index} className="review-o u-s-m-b-15">
                            <div className="review-o__info u-s-m-b-8">
                                <span className="review-o__name">{review.name}</span>
                                <span className="review-o__date">{review.date}</span>
                            </div>
                            <div className="review-o__rating gl-rating-style u-s-m-b-8">
                                {/* ... Phần hiển thị đánh giá sao ... */}
                            </div>
                            <p className="review-o__text">{review.text}</p>
                        </div>
                    ))}
                </form>
            </div>
            <div className="u-s-m-b-30">
                <form className="pd-tab__rev-f2">
                    {/* ... Phần hiển thị bảng chọn đánh giá và form đánh giá mới ... */}
                </form>
            </div>
        </div>
    );
}

export default Feedback;
