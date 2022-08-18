import { createPortal } from 'react-dom';
import { IoClose } from 'react-icons/io5';

import avatar from '../../assets/avatar.jpg';
import './PostOverlay.scss';

const PostOverlay = (props) => {
  const backdrop = (
    <div className='backdrop' onClick={props.closeOverlay}></div>
  );

  // componnet
  console.log(props.avatar);

  const component = (
    <div className='post-overlay'>
      <div className='overlay-image'>
        <img src={props.url} alt='' />
      </div>
      <div className='overlay-comments'>
        <div className='overlay-header'>
          <div>
            <img
              className='overlay-header__img'
              src={props.avatar === null ? avatar : props.avatar}
              alt=''
            />
          </div>
          <div>
            <span className='overlay-header__username'>{props.username}</span>
          </div>
        </div>
      </div>
      <IoClose
        className='post-overlay__close-btn'
        onClick={props.closeOverlay}
      />
    </div>
  );

  return (
    <>
      {createPortal(backdrop, document.querySelector('#post-portal'))}
      {createPortal(component, document.querySelector('#post-portal'))}
    </>
  );
};

export default PostOverlay;
