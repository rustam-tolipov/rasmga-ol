import './UserStatus.scss';

const UserStatus = (props) => {
  return (
    <div className='user-status'>
      <div>
        <div className='user-status__number'>{props.postsCount}</div>
        <div className='user-status__text'>Posts</div>
      </div>
      <div>
        <div className='user-status__number'>{props.followersCount}</div>
        <div className='user-status__text'>Followers</div>
      </div>
      <div>
        <div className='user-status__number'>3</div>
        <div className='user-status__text'>Following</div>
      </div>
    </div>
  );
};

export default UserStatus;
