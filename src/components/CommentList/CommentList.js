import React from 'react';

const CommentList = ({comments}) => {
const content = comments.map(comment => <div>{comment.name} - {comment.comment}</div>);
    return (
        <div>
            {content}
        </div>
    );
}

export default CommentList;