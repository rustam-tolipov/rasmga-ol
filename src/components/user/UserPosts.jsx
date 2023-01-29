import { useState, useEffect } from 'react';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import MyLoader from '../UI/ImageLoader';

import usersApi from '../../api/users';

import PostOverlay from '../posts/PostOverlay';
import './UserPosts.scss';

const UserPosts = (props) => {
  const { id } = props;

  const [loading, setLoading] = useState(true);
  const [userPosts, setUserPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  useEffect(() => {
    async function getUserPosts() {
      const response = await usersApi.getUserPosts(id);
      if (response.status === 200) {
        setUserPosts(response.data);
        setLoading(false);
      } else {
        console.log(response.status);
      }
    }

    getUserPosts();
  }, [id]);

  return (
    <>
      {loading ? (
        <div className='user-posts'>Loading...</div>
      ) : (
        <div className='user-posts'>
          {userPosts.map((post, i) => {
            return (
              <div
                key={i}
                className='user-posts__post'
                onClick={() => {
                  setCurrentPost(post.id);
                  setOpen(true);
                }}
              >
                {post.image.url.includes('mp4') ? (
                  <video
                    // controls
                    width='100%'
                    height='100%'
                    loop
                    muted
                    playsInline
                    src={post.image.url}
                  />
                ) : (
                  <img src={post.image.url} alt='' />
                )}
              </div>
            );
          })}
        </div>
      )}

      {open && (
        <PostOverlay closeOverlay={() => setOpen(false)} id={currentPost} />
      )}
    </>
  );
};

export default UserPosts;
