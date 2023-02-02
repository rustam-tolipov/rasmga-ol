import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import usersApi from '../../api/users';
import './User.scss';

const UserProfile = React.lazy(() => import('./UserProfile'));
const UserNav = React.lazy(() => import('./UserNav'));
const UserPosts = React.lazy(() => import('./UserPosts'));
const UserStatus = React.lazy(() => import('./UserStatus'));
const Search = React.lazy(() => import('../UI/Search'));

const User = () => {
  const { id } = useParams();

  const [userData, setUserData] = useState();

  useEffect(() => {
    async function fetchUser() {
      const response = await usersApi.findByUsername(id);
      if (response.status === 200) {
        setUserData(response.data);
      } else {
        console.log(response.status);
      }
    }

    fetchUser();
  }, [id]);

  if (!userData) return;

  return (
    <div className='user'>
      <Search />
      <div className='user__header'>
        <UserProfile
          id={userData.id}
          username={userData.username}
          email={userData.email}
          img={userData.avatar}
          bio={userData.bio}
        />
        <UserStatus
          postsCount={userData.posts_count}
          followersCount={userData.followers_count}
          followeesCount={userData.followees_count}
          userId={userData.id}
          username={userData.username}
          userAvatar={userData.avatar}
        />
      </div>
      <UserNav />
      <UserPosts id={userData.id} />
    </div>
  );
};

export default User;
