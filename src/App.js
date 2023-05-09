import React from 'react';
import PostsList from './features/PostsList';
import './App.css';
import PostForm from './features/PostForm';
import SinglePost from './features/SinglePost';

function App() {

const currentPath=window.location.pathname
const postId=currentPath.split('/')[2]

if(currentPath===`/posts/${postId}`){
return <SinglePost postId={postId}/>
}

  return (
    <div className="App">
      <PostForm/>
      <PostsList/>
      
    </div>
  );
}

export default App;
