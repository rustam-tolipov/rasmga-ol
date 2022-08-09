import { IoChatbox } from 'react-icons/io5';

import Verified from '../UI/Verified';
import Button from '../UI/Button';

import './UserProfile.scss';

const UserProfile = (props) => {
  return (
    <div className='user-profile'>
      <div className='user-profile__info'>
        <img className='user-profile__img' src={props.img} alt='' />
        <div>
          <p className='user-profile__name'>
            {props.username}
            <Verified /> <Button>Follow</Button>{' '}
            <Button className='user-profile__button'>
              Message <IoChatbox />
            </Button>
          </p>
          <p className='user-profile__description'>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;