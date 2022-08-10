import './UserStatus.scss';

const UserStatus = () => {
  return (
    <div className='user-status'>
      <div>
        <div className='user-status__number'>845</div>
        <div className='user-status__text'>Posts</div>
      </div>
      <div>
        <div className='user-status__number'>12.4M</div>
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
