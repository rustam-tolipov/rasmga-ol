import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { IoClose } from 'react-icons/io5';
import Axios from 'axios';
import Cookies from 'js-cookie';

import PostOverlayComment from './PostOverlayComment';
import Button from '../UI/Button';

import { IoHappyOutline } from 'react-icons/io5';
import avatar from '../../assets/avatar.jpg';
import './PostOverlay.scss';

const PostOverlay = (props) => {
  const inputRef = useRef();
  const [render, setRender] = useState('');

  const backdrop = (
    <div className='backdrop' onClick={props.closeOverlay}></div>
  );

  const postCommentHandler = () => {
    Axios.post(
      'https://rustam-social-media-rails-app.herokuapp.com/api/v1/posts/2/comments',
      {
        content: inputRef.current.value,
      },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get('jwt')}`,
        },
      }
    ).then((res) => {
      console.log(res);
    });
  };

  const component = (
    <div className='post-overlay'>
      <div className='overlay-image'>
        <img src={props.url} alt='' />
      </div>
      <div className='overlay-right'>
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

        {/* overlay comments */}
        <div className='overlay-comments'>
          {props.comments &&
            props.comments
              .map((comment, id) => {
                console.log(comment);

                return (
                  <PostOverlayComment
                    userId={comment.user_id}
                    content={comment.content}
                    key={id}
                  />
                );
              })
              .reverse()}
        </div>

        {/* overlay input */}
        <div className='overlay-input'>
          <IoHappyOutline className='overlay-input__icon' />
          <input type='text' id='post-comment' ref={inputRef} />
          <Button onClick={postCommentHandler}>Post</Button>
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
