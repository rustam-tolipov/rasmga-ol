import { useParams } from 'react-router-dom';

import './Profile.scss'

const Profile = () => {
  const { id } = useParams();

  return <h1 className='profile'>Halo amigo {id}</h1>;
};

export default Profile;
