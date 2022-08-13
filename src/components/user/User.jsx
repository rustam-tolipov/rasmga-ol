import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import Cookies from 'js-cookie';

import UserProfile from './UserProfile';
import UserNav from './UserNav';
import UserPosts from './UserPosts';

import './User.scss';
import UserStatus from './UserStatus';
import Search from '../UI/Search';

const fakeData = {
  email: 'maqsudtolipov9@gmail.com',
  first_name: 'Maqsud',
  last_name: 'Tolipov',
  username: 'maqsudtolipov9',
  description:
    'Hi there. This is the first person in the list of people who have joined the group.',
  avatar: {
    url: 'https://i.ibb.co/rQS844Y/Blue-Minimalist-Circle-Profile-Image-1.png',
  },
};

const User = () => {
  const { id } = useParams();
  const userId = id.replace(/\D/g, '');

  const [userData, setUserData] = useState();

  useEffect(() => {

    Axios.get(
      `https://rustam-social-media-rails-app.herokuapp.com/api/v1/users/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get('jwt')}`,
        },
      }
    ).then((res) => {
      setUserData(res.data);
    });
  }, [id]);

  if (!userData) return;
  return (
    <div className='user'>
      <Search />
      <div className='user__header'>
        <UserProfile
          username={id}
          email={userData.email}
          img={userData.avatar.url}
          description={userData.description}
        />
        <UserStatus />
      </div>
      <UserNav />
      <UserPosts data={userData.posts} />
    </div>
  );
};

export default User;
