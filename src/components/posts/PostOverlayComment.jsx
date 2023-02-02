import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import usersApi from '../../api/users';

import avatar from '../../assets/avatar.jpg';

const PostOverlayComment = (props) => {
  const [profile, setProfile] = useState('sd');

  useEffect(() => {
    async function getProfile() {
      const response = await usersApi.getUser(props.userId);

      setProfile(response.data.user);
    }
    getProfile();
  }, [props.userId]);

  return (
    profile && (
      <div className='comment'>
        <div className='comment__img'>
          <img src={profile.avatar} alt='' />
        </div>

        <div className='comment__content'>
          <Link to={`/users/${profile.username}`} className='comment__name'>
            <span className='comment__username'>
              {profile.username || profile.first_name + ' ' + profile.last_name}
            </span>{' '}
          </Link>
          {props.content}
        </div>
      </div>
    )
  );
};

export default PostOverlayComment;
