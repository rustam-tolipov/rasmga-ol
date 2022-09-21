import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Post from './Post';

import postsApi from '../../api/posts';

import './Posts.scss';
import Search from '../UI/Search';

const Posts = (props) => {
  const [posts, setPosts] = useState([]);

  const newPostAdded = useSelector((state) => state.posts.posts);

  useEffect(() => {
    async function fetchPosts() {
      const response = await postsApi.getPosts();
      if (response.status === 200) {
        setPosts(response.data);
      } else {
        console.log(response.status);
      }
    }
    fetchPosts();
  }, [newPostAdded]);

  return (
    <div className="posts">
      <Search />
      <h1>Posts</h1>
      <div className="posts-list">
        {posts &&
          posts.map((post, i) => {
            return (
              <Post
                key={post.id}
                url={post.image.url}
                content={post.content}
                user={post.user}
                likes={post.likes}
                id={post.id}
                comments={post.comments}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Posts;
