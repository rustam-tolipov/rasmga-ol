import { useState, useEffect } from 'react';
import Post from './Post';

import './Posts.scss';
import Search from '../UI/Search';

const Posts = (props) => {
  const [posts, setPosts] = useState([]);

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
      <Search />
      <h1>Posts</h1>
      <div className='posts-list'>
        {posts &&
          posts.map((post, i) => {
            return (
              <Post
                key={posts.id}
                url={post.image.url}
                content={post.content}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Posts;
