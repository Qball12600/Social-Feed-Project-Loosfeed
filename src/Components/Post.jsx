import React from 'react';
import '../App.css';

function Post ({ post, toggleLike,deletePost }) {
    const {id, name, body, liked, date} = post;

    const handleLikeClick = ()=> {
        toggleLike(id);
    };

    return (
        <div className="Post">
            <p>{post.name}</p>
            <p>{post.body}</p>
            <button onClick={handleLikeClick}>{liked ? 'unlike' : 'Like'}</button>
            <p>{date.toString()}</p>
        </div>
    );
}
export default Post;
