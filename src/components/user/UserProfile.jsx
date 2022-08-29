import { useState, useEffect } from 'react';
import { IoChatbox } from 'react-icons/io5';

import Verified from '../UI/Verified';
import Button from '../UI/Button';

import avatar from '../../assets/avatar.jpg';
import './UserProfile.scss';
import { followUser, unfollowUser } from '../../helpers';

const UserProfile = (props) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const userData = JSON.parse(localStorage.getItem('me'));

  useEffect(() => {
    const followed = userData.followees.forEach((followee) => {
      console.log(followee.id, props.id);
      if (followee.id === props.id) {
        setIsFollowing(true);
      }
    });
    console.log(followed);
  }, [props.id]);

  return (
    <div className='user-profile'>
      <div className='user-profile__info'>
        <img className='user-profile__img' src={props.img || avatar} alt='' />
        <div>
          <p className='user-profile__name'>
            {props.username}
            <Verified />{' '}
            {isFollowing ? (
              <Button
                onClick={() => {
                  setIsFollowing(false);
                  unfollowUser(props.id, false);
                }}
              >
                Unfollow
              </Button>
            ) : (
              <Button
                onClick={() => {
                  followUser(props.id);
                  setIsFollowing(true);
                }}
              >
                Follow
              </Button>
            )}
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
