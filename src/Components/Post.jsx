import React from 'react';


function Post ({ post, toggleLike,deletePost }) {
    const {id, liked, date} = post;

    const handleLikeClick = ()=> {
        toggleLike(id);
    };
    
    const handleDeleteClick = ()=> {
        deletePost(post.id);
    };

    return (
        <div className="Post">
            <p>{post.name}</p>
            <p>{post.body}</p>
            <button onClick={handleLikeClick}>{liked ? 'unlike' : 'Like'}</button>
            <button onClick={handleDeleteClick}>Delete</button>
            <p>{date.toString()}</p>
        </div>
    );
}
export default Post;
