import { useState, useEffect } from 'react';
import Axios from 'axios';
import Cookies from 'js-cookie';

import postApi from '../../api/posts';

import ExplorePost from './ExplorePost';

import './ExplorePosts.scss';

const ExplorePosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await postApi.getPosts();
      if (response.status === 200) {
        setPosts(response.data);
      } else {
        console.log(response.status);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className="explore-posts">
      {posts.map((post, index) => {
        return <ExplorePost src={post.image.medium.url} key={index} id={post.id} user_id={post.user_id} />;
      })}
    </div>
  );
};

export default ExplorePosts;
