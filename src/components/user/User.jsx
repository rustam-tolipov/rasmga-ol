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
  console.log(id, userId);

  const [userData, setUserData] = useState();

  useEffect(() => {
    // let data = JSON.stringify({
    //   username: 'art3mis',
    // });
    Axios.post(
      `https://rustam-social-media-rails-app.herokuapp.com/api/v1/search`,
      {
        username: id,
      },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get('jwt')}`,
        },
      }
    ).then((res) => {
      setUserData(res.data[0]);
    });
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
          postsCount={userData.posts.length}
          followersCount={userData.followers.length}
        />
      </div>
      <UserNav />
      <UserPosts data={userData.posts} />
    </div>
  );
};

export default User;
