import { useSelector } from 'react-redux';
import { IoChatbox } from 'react-icons/io5';

import Verified from '../UI/Verified';
import Button from '../UI/Button';
import Follow from './Follow';

import './UserProfile.scss';

const UserProfile = (props) => {
  const currentUser = useSelector((state) => state.auth.currentUser);

  return (
    <div className='user-profile'>
      <div className='user-profile__info'>
        {
          <span
            className='user-profile__img'
            style={{ backgroundImage: `url(${props.img})` }}
          ></span>
        }
        <div>
          <p className='user-profile__name'>
            {props.username}
            <Verified />
            {currentUser.id !== props.id && <Follow id={props.id} />}
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
