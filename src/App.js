import React, {useState} from 'react';
import Header from './Components/Header';
import PostList from './Components/PostList';
import CreatePostForm from './Components/CreatePostForm';
import './App.css';

function App() {//list of posts
  const [posts,setPosts] = useState([
    { id:1, name: "Joe Biden", body: "Beer brewed here haha, it is used to make the brew beer haha", liked:false, date: new Date() },
  ]);
  //function to add new posts
  const addPost = (newPost) => {setPosts([...posts, { ...newPost, id: posts.length + 1, liked: false, date: new Date()}]);
};
//function to toggle like/dislike post
const toggleLike = (postId) => {
  setPosts(posts.map(post => (post.id === postId ? { ...post, liked: !post.liked } : post)));
};
//function to delete posts
const deletePost = (postId) => {
  setPosts(posts.filter(post => post.id !== postId));
};

  return (
    <div className="app-container">
      <Header/>
      <CreatePostForm addPost={addPost} />
      <PostList posts={posts} toggleLike={toggleLike} deletePost={deletePost} />
    </div>
  );
}
export default App;


