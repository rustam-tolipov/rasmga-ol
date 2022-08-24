import { useState } from 'react';
import { createPortal } from 'react-dom';
import './CreatePost.scss';

const CreatePost = (props) => {
  const [open, setOpen] = useState(false);

  // class if from PostOverlay component
  const backdrop = (
    <div
      className='backdrop'
      onClick={() => {
        setOpen(false);
      }}
    >
    </div>
  );

  const postOverlay = <div className='create-overlay'>aa</div>;

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
      {open && createPortal(backdrop, document.querySelector('#post-portal'))}
      {open && createPortal(postOverlay, document.querySelector('#post-portal'))}
    </>
  );
};

export default CreatePost;
