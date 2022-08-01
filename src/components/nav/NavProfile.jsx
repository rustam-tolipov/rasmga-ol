import { IoChevronDownOutline } from 'react-icons/io5';
import avatarFile from '../../assets/avatar.jpg';

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
        <span className='nav-profile__id'>maqsudtolipov9</span>
        <span className='nav-profile__name'>Maqsud Tolipov</span>
      </div>
      <div className='nav-profile__icon'>
        <IoChevronDownOutline />
      </div>
    </div>
  );
};

export default NavProfile;
