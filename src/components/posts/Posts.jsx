import { useState, useEffect } from 'react';
import Post from './Post';

import './Posts.scss';
import PostsSearch from './PostsSearch';

const Posts = (props) => {
  // fetch https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

  const [posts, setPosts] = useState([]);

  console.log(process.env);

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?page=1&length=20&query=cars&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS}`
    )
      .then((response) => response.json())
      .then((data) => setPosts(data.results));
  }, []);

  console.log(posts);

  return (
    <div className='posts'>
      <PostsSearch />
      <h1>Posts</h1>
      {posts.map((post, i) => {
        return <Post key={i} url={post.urls.regular} />;
      })}
    </div>
  );
};

export default Posts;
