import { useState, useEffect } from 'react';
import Axios from 'axios';
import Cookies from 'js-cookie';

import './ExplorePosts.scss';

const ExplorePosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Axios.get(
      'https://rustam-social-media-rails-app.herokuapp.com/api/v1/posts',
      {
        headers: {
          Authorization: `Bearer ${Cookies.get('jwt')}`,
        },
      }
    )
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log('🔴 Could not get posts', err);
      });
  }, []);

  return (
    <div className='explore-posts'>
      {posts.map((post, index) => {
        return <img src={post.image.url} alt='' key={index} />;
      })}
    </div>
  );
};

export default ExplorePosts;
