import { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';

import postsApi from '../../api/posts';
import { getPosts } from '../../redux/actions/posts';

import Button from '../UI/Button';

import './CreatePost.scss';
import image from '../../assets/upload.svg';
import spinner from '../../assets/spinner.svg';

const CreatePost = (props) => {
  const textareaRef = useRef(null);

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
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
  };

  // class if from PostOverlay component
  const backdrop = (
    <div
      className="backdrop"
      onClick={() => {
        setOpen(false);
      }}
    ></div>
  );

  const postOverlay = (
    <div className="create-overlay">
      {loading ? (
        <div className="spinner">
          <img src={spinner} alt="" />
        </div>
      ) : (
        <img className="create-overlay__icon" src={image} alt="" />
      )}

      <p className="create-overlay__text">Drag photos here</p>
      <input type="file" name="file" onChange={uploadHandler} />
      <textarea
        ref={textareaRef}
        name="content"
        placeholder="Whats on your mind?"
        minLength="15"
        maxLength="500"
      ></textarea>
      <Button onClick={postHandler}>Post your image</Button>
    </div>
  );

  return (
    <>
      <button
        className="create-overlay__btn"
        onClick={() => {
          setOpen(true);
        }}
      >
        Post
      </button>
      {open && createPortal(backdrop, document.querySelector('#post-portal'))}
      {open &&
        createPortal(postOverlay, document.querySelector('#post-portal'))}
    </>
  );
};

export default CreatePost;
