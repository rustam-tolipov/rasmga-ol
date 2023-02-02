import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { createPortal } from 'react-dom';

import { Delete } from '../UI/DeleteBtn';
import './PostOptionsOverlay.scss';

const PostOptionsOverlay = (props) => {
  const backdrop = (
    <div className='backdrop' onClick={props.closeOverlay}></div>
  );

  console.log(props.user_id);

  const options = (
    <ul className='options-overlay'>
      <li className='options-overlay__item'>
        <a
          href='https://www.rustam.one/'
          target='_blank'
          className='options-overlay__item--link'
          rel='noreferrer'
        >
          🧑🏻‍💻. Check my portfolio
        </a>
      </li>

      <li className='options-overlay__item'>
        <a
          href='https://github.com/Rustamxon7/rasmga-ol'
          target='_blank'
          className='options-overlay__item--link'
          rel='noreferrer'
        >
          📄. See the source code
        </a>
      </li>

      <li className='options-overlay__item'>
        <a
          href='https://social-media-api.fly.dev/'
          target='_blank'
          className='options-overlay__item--link'
          rel='noreferrer'
        >
          ⚙️. Back-end
        </a>
      </li>

      {props.user_id && (
        <li className='options-overlay__item'>
          <Delete postId={props.id} userId={props.user_id} />
        </li>
      )}
    </ul>
  );

  return (
    <>
      {createPortal(backdrop, document.querySelector('#post-portal'))}
      {createPortal(options, document.querySelector('#post-portal'))}
    </>
  );
};

export default PostOptionsOverlay;
