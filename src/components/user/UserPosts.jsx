import { useState, useEffect } from 'react';

import './UserPosts.scss';

const UserPosts = (props) => {

  return (
    <div className='user-posts'>
      {props.data.map((post, index) => (
        <img key={index} src={post.image.url} alt='' />
      ))}
    </div>
  );
};

export default UserPosts;
