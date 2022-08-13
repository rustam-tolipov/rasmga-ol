import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { IoChevronDownOutline } from 'react-icons/io5';
import avatarFile from '../../assets/avatar.jpg';
import Verified from '../UI/Verified';

import './NavProfile.scss';

const NavProfile = (props) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('me')));

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
            {(user.first_name + user.last_name + user.id).toLowerCase()}{' '}
            <Verified />
          </span>
        </Link>
        <span className='nav-profile__name'>
          {user.first_name + ' ' + user.last_name}
        </span>
      </div>
      <div className='nav-profile__icon'>
        <IoChevronDownOutline />
      </div>
    </div>
  );
};

export default NavProfile;
