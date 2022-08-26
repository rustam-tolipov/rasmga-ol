import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { IoChevronDownOutline } from 'react-icons/io5';
import avatar from '../../assets/avatar.jpg';
import Verified from '../UI/Verified';

import './NavProfile.scss';

const NavProfile = (props) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('me')));

  return (
    <div className='nav-profile'>
      <div className='nav-profile__avatar'>
        <img
          className='nav-profile__avatar-img'
          src={user.avatar.url === null ? avatar : user.avatar.url}
          alt='User avatar'
        />
      </div>
      <div className='nav-profile__name-box'>
        <NavLink to='/users/maqsud'>
          <span className='nav-profile__id'>
            {user.username}
            <Verified />
          </span>
        </NavLink>
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
