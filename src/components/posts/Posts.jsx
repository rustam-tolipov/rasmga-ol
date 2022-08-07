import { useState, useEffect } from 'react';
import Post from './Post';

import './Posts.scss';
import PostsSearch from './PostsSearch';

const Posts = (props) => {
  const [posts, setPosts] = useState([]);

  //fetch https://rustam-social-media-app.herokuapp.com/api/v1/posts
  useEffect(() => {
    fetch('https://rustam-social-media-app.herokuapp.com/api/v1/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  console.log(posts);

  return (
    <div className='posts'>
      <PostsSearch />
      <h1>Posts</h1>
      {posts &&
        posts.map((post, i) => {
          return <Post key={posts.id} url={post.image.url} />;
        })}
    </div>
  );
};

export default Posts;
