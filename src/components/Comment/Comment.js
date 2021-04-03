import React from 'react';

const Comment = (props) => {
    const {name, email} = props.comment;
    return (
        <p>
            {name}:<b>{email}</b>
        </p>
    );
};

export default Comment;