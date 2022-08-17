import { createPortal } from 'react-dom';
import { IoClose } from 'react-icons/io5';
import './PostOverlay.scss';

const PostPortal = (props) => {
  const backdrop = (
    <div className='backdrop' onClick={props.closeOverlay}></div>
  );

  const component = (
    <div className='post-overlay'>
      <div className='post-overlay__image'>
        <img src={props.url} alt='' />
      </div>
      <div className='post-overlay__comments'>I like this 🔥</div>
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

export default PostPortal;
