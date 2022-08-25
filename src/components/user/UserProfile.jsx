import { useState, useEffect } from 'react';
import { IoChatbox } from 'react-icons/io5';

import Verified from '../UI/Verified';
import Button from '../UI/Button';

import avatar from '../../assets/avatar.jpg';
import './UserProfile.scss';

const UserProfile = (props) => {
  return (
    <div className='user-profile'>
      <div className='user-profile__info'>
        <img className='user-profile__img' src={props.img || avatar} alt='' />
        <div>
          <p className='user-profile__name'>
            {props.username}
            <Verified /> <Button>Follow</Button>{' '}
            <Button className='user-profile__button'>
              Message <IoChatbox />
            </Button>
          </p>
          <p className='user-profile__description'>
            {props.bio ||
              'I’m a mysterious individual who has yet to fill out my bio 🥶'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
