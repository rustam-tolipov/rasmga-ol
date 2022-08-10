import { Link } from 'react-router-dom';

import { IoChevronDownOutline } from 'react-icons/io5';
import avatarFile from '../../assets/avatar.jpg';
import Verified from '../UI/Verified';

import './NavProfile.scss';

const NavProfile = (props) => {
  return (
    <div className='nav-profile'>
      <div className='nav-profile__avatar'>
        <img
          className='nav-profile__avatar-img'
          src={avatarFile}
          alt='User avatar'
        />
      </div>
      <div className='nav-profile__name-box'>
        <Link to='/users/maqsud'>
          <span className='nav-profile__id'>
            maqsudtolipov9 <Verified />
          </span>
        </Link>
        <span className='nav-profile__name'>Maqsud Tolipov</span>
      </div>
      <div className='nav-profile__icon'>
        <IoChevronDownOutline />
      </div>
    </div>
  );
};

export default NavProfile;
