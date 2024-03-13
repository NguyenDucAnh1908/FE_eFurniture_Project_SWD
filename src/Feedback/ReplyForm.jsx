import React, { useState } from 'react';

const ReplyForm = ({ onSubmit }) => {
    const [replyText, setReplyText] = useState('');

    const handleReplyTextChange = (event) => {
        setReplyText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 
        onSubmit(replyText);
        setReplyText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="replyText">Your Reply:</label>
            <textarea
                id="replyText"
                value={replyText}
                onChange={handleReplyTextChange}
            ></textarea>
            <button type="submit">Submit Reply</button>
        </form>
    );
};


export default ReplyForm;
