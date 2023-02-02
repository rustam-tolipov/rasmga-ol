import './UserStatus.scss';
import Result from './Result';
import React, { useState, useEffect } from 'react';
import followsApi from '../../api/follows';

const UserStatus = (props) => {
  const [open, setOpen] = useState(false);
  const [option, setOption] = useState('posts');
  const [followers, setFollowers] = useState([]);

  const closeOverlay = () => {
    setOpen(false);
  };

  console.log(followers);

  // useEffect(() => {}, [option, props.userId]);

  const getFollowers = async () => {
    const response = await followsApi.getFollowers(props.userId);
    if (response) {
      setFollowers(response);
    }
  };

  const getFollowings = async () => {
    const response = await followsApi.getFollowings(props.userId);
    if (response) {
      setFollowers(response);
    }
  };

  return (
    <>
      <div className='user-status'>
        <div>
          <div className='user-status__number'>{props.postsCount}</div>
          <div className='user-status__text'>Posts</div>
        </div>
        <div
          onClick={() => {
            getFollowers();
            setOpen(true);
          }}
        >
          <div className='user-status__number'>{props.followersCount}</div>
          <div className='user-status__text'>Followers</div>
        </div>
        <div
          onClick={() => {
            getFollowings();
            setOpen(true);
          }}
        >
          <div className='user-status__number'>{props.followeesCount}</div>
          <div className='user-status__text'>Following</div>
        </div>

        {open && (
          <Result
            closeOverlay={closeOverlay}
            option={option}
            followers={followers}
          />
        )}
      </div>
    </>
  );
};

export default UserStatus;
