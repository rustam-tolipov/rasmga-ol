import './UserProfile.scss'

const UserProfile = (props) => {
  return (
    <div className='user-profile'>
      <div className='user-profile__info'>
        <img className='user-profile__img' src={props.img} alt='' />
        <div>
          <p className='user-profile__name'>{props.username}</p>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
