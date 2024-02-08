import React from 'react';

import Post from './Components/Post';

function PostList({ posts, toggleLike, deletePost }) {
  return (
    <div className="post-list">{/* Map Through the list of posts and render eac post*/}
    {posts.map(post => (
      <Post
      key={post.id}
      post={post}
      toggleLike={toggleLike}
      deletePost={deletePost}
      />
    ))}
    </div>
  );
}
export default PostList;
