import { useState, useEffect } from 'react';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import MyLoader from '../UI/ImageLoader';

import usersApi from '../../api/users';

import Loading from '../UI/Loading';
import './UserPosts.scss';

const UserPosts = (props) => {
  const { id } = props;

  const [loading, setLoading] = useState(true);
  const [userPosts, setUserPosts] = useState([]);

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
        <div className="user-posts">
          {userPosts.map((i) => {
            return (
              <div key={i} className="user-posts__post">
                <MyLoader />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="user-posts">
          {userPosts.map((post, i) => {
            return (
              <div key={i} className="user-posts__post">
                <img src={post.image.url} alt="Post" />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default UserPosts;
