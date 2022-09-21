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
  const [userPosts, setUserPosts] = useState();

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
  }, []);

  console.log(props);

  return (
    // <div className="user-posts">
    //   {loading ? (
    //     <div className="user-posts__post">
    //       <Skeleton count={10} />
    //     </div>
    //   ) : (
    //     userPosts.map((post, i) => {
    //       return (
    //         <div key={i} className="user-posts__post">
    //           <img src={post.image.standard.url} alt="Post" />
    //         </div>
    //       );
    //     })
    //   )}
    // </div>
    <>
      {!loading ? (
        // <Skeleton className="user-posts" count={10} height={200} width={200} />
        <MyLoader className="user-posts" />
      ) : (
        <div className="user-posts">
          {/* {userPosts.map((post, i) => {
            return (
              <div key={i} className="user-posts__post">
                <img src={post.image.standard.url} alt="Post" />
              </div>
            );
          })} */}
        </div>
      )}
    </>
  );
};

export default UserPosts;
