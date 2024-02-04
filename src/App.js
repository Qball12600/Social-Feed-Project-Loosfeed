import React, {useState} from 'react';
import Header from './Header';
import PostList from './PostList';
import CreatePostForm from './CreatePostForm';

function App() {
  const [posts.setPosts] = useState([
    { id:1, name: 'Joe Biden', body: 'My warning to Trump anoihrhuruhsib you bub!' liked:false, date: new Date() },
  ]);
  const addPost = (newPost) => {setPosts([...posts, { ...newPosts, id:posts.length + 1, liked: false, date: new Date()}]);
};
const toggleLike = (postId) => {
  setPosts(posts.map(post => (post.id === postId ? { ...post, liked: !post.liked } : post)));
};

  return (
    <div className="App">
      <Header/>
      <CreatePostForm addPost={addPost} />
      <PostList posts={posts} toggleLike={toggleLike} />
    </div>
  );
}
export default App;

export default App;
