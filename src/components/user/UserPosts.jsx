import { useState, useEffect } from 'react';

import './UserPosts.scss';

const UserPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        'https://api.unsplash.com/search/photos/?client_id=v9W4IHuxN78WsxO2WTNGUydKt9rmpWBiTWElN5OZ3aY&page=1&query=cats&per_page=20'
      );
      const posts = await response.json();
      setPosts(posts.results);
    };
    fetchPosts();
  }, []);

  return (
    <div className='user-posts'>
      {posts.map((post, index) => (
        <img src={post.urls.regular} alt='' />
      ))}
    </div>
  );
};

export default UserPosts;
