import { useState, useEffect } from 'react';
import Axios from 'axios';
import Cookies from 'js-cookie';

import avatar from '../../assets/avatar.jpg';

const PostOverlayComment = (props) => {
  const [profile, setProfile] = useState();

  useEffect(() => {
    Axios.get(
      `https://rustam-social-media-rails-app.herokuapp.com/api/v1/users/${props.userId}`,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get('jwt')}`,
        },
      }
    ).then((res) => {
      setProfile(res.data);
      console.log(res.data);
    });
  }, [props.userId]);

  return (
    profile && (
      <div className='comment'>
        <div className='comment__img'>
          <img
            src={profile.avatar.url === null ? avatar : profile.avatar.url}
            alt=''
          />
        </div>

        <div className='comment__content'>
          <span className='comment__username'>
            {profile.username || profile.first_name + ' ' + profile.last_name}
          </span>{' '}
          {props.content}
        </div>
      </div>
    )
  );
};

export default PostOverlayComment;
