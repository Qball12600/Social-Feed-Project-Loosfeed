import React, {useState} from 'react';
import Header from './components/Header';
import PostList from './components/PotList';
import CreatPostForm from './components/CreatePostForm';

function Post ({ post, toggleLike}) {
    return (
        <div>
            <p>{post.name}</p>
            <p>{post.Body}</p>
            <button onClick={() => toggleLike(post.id)}>{post.liked ? 'Disliked' : 'Like'} </button>
            <p>{post.date.toLocalString()}</p>
        </div>
    );
}
export default Post;
