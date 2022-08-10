import { useParams } from 'react-router-dom';

import UserProfile from './UserProfile';

import './User.scss';
import UserStatus from './UserStatus';

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

  return (
    <div className='user'>
      <UserProfile
        username={fakeData.username}
        email={fakeData.email}
        img={fakeData.avatar.url}
        description={fakeData.description}
      />
      <UserStatus />
    </div>
  );
};

export default User;
