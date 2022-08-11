import { useState, useEffect } from 'react';

import './ExplorePosts.scss';

const ExplorePosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        'https://api.unsplash.com/search/photos/?client_id=v9W4IHuxN78WsxO2WTNGUydKt9rmpWBiTWElN5OZ3aY&page=1&query=car&per_page=100'
      );
      const posts = await response.json();
      setPosts(posts.results);
    };
    fetchPosts();
  }, []);

  console.log(posts);
  return (
    <div className='explore-posts'>
      {posts.map((post, index) => {
        return <img src={post.urls.regular} alt='' />;
      })}
    </div>
  );
};

export default ExplorePosts;
