import React, {useState} from 'react';


function Post ({ post, toggleLike}) {
    return (
        <div className="Post">
            <p>{post.name}</p>
            <p>{post.Body}</p>
            <button onClick={() => toggleLike(post.id)}>{post.liked ? 'Disliked' : 'Like'} </button>
            <p>Date: {post.date.toLocalString()}</p>
        </div>
    );
}
export default Post;
