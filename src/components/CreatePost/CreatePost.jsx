import { useState, useRef, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { gsap } from 'gsap';

import postsApi from '../../api/posts';
import { getPosts } from '../../redux/actions/posts';

import Button from '../UI/Button';

import './CreatePost.scss';
import image from '../../assets/upload.svg';

import { Spinner } from '../UI/Loading';

const CreatePost = () => {
  const textareaRef = useRef(null);

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(image);
  const [loading, setLoading] = useState(false);

  const uploadHandler = (e) => {
    setFile(e.target.files[0]);
  };

  const postHandler = () => {
    setLoading(true);

    let formData = new FormData();

    formData.append('image', file);
    formData.append('content', textareaRef.current.value);

    postsApi
      .createPost(formData) // this is the same as above
      .then((res) => {
        setOpen(false);
      })
      .finally(() => {
        setLoading(false);
        dispatch(getPosts());
      });

    setFile(null);
    textareaRef.current.value = '';
  };

  const overlay = (
    <div
      className='create-overlay__backdrop'
      onClick={() => {
        setOpen(false);
      }}
    ></div>
  );

  const postOverlay = (
    <div className='create-overlay'>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className='create-overlay__preview'>
            {file instanceof File ? (
              <img
                src={URL.createObjectURL(file)}
                alt=''
                className='create-overlay__preview-img'
              />
            ) : (
              <img src={file} alt='' className='create-overlay-img' />
            )}
          </div>

          <div className='file-input'>
            <input
              type='file'
              name='file-input'
              id='file-input'
              className='file-input__input'
              onChange={uploadHandler}
            />
            <label className='file-input__label' htmlFor='file-input'>
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='upload'
                className='svg-inline--fa fa-upload fa-w-16'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                <path
                  fill='currentColor'
                  d='M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z'
                ></path>
              </svg>
              <span>Upload file</span>
            </label>
          </div>

          <textarea
            ref={textareaRef}
            name='content'
            placeholder='Whats on your mind?'
            minLength='138'
            maxLength='150'
          ></textarea>

          <Button onClick={postHandler} className='create-post__btn'>
            Post your image
          </Button>
        </>
      )}
    </div>
  );

  const tl = gsap.timeline();

  useLayoutEffect(() => {
    if (open) {
      tl.fromTo(
        '.create-overlay__backdrop',
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      )
        .fromTo(
          '.create-overlay',
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.3 }
        )
        .fromTo(
          '.create-overlay__preview',
          { opacity: 0, y: -50 },
          { opacity: 1, y: 0, duration: 0.3 }
        )
        .fromTo(
          '.file-input',
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.3 }
        );
    }

    return () => {
      tl.kill();
    };
  }, [open, tl]);

  return (
    <>
      <button
        className='create-overlay__btn'
        onClick={() => {
          setOpen(true);
        }}
      >
        Post
      </button>
      {open && createPortal(overlay, document.querySelector('#post-portal'))}
      {open &&
        createPortal(postOverlay, document.querySelector('#post-portal'))}
    </>
  );
};

export default CreatePost;
