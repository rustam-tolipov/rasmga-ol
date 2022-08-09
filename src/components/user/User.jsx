import { useParams } from 'react-router-dom';

import UserProfile from './UserProfile';

import './User.scss';

const User = () => {
  const { id } = useParams();

  return (
    <div className='user'>
      Halo amigo {id}
      <UserProfile username={id} />
    </div>
  );
};

export default User;
