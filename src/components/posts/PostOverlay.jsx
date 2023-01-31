import { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { createPortal } from 'react-dom';
import { IoClose } from 'react-icons/io5';
import postsApi from '../../api/posts';
import commentsApi from '../../api/comments';

import PostOverlayComment from './PostOverlayComment';
import Button from '../UI/Button';
import { DeleteBtn } from '../UI/DeleteBtn';
import Follow from '../user/Follow';

import { IoHappyOutline } from 'react-icons/io5';
import avatar from '../../assets/avatar.jpg';
import './PostOverlay.scss';

const PostOverlay = (props) => {
  const inputRef = useRef();
  const [postData, setPostData] = useState();
  const [comments, setComments] = useState([]);
  const [rerender, setRerender] = useState(false);

  const backdrop = (
    <div className='backdrop' onClick={props.closeOverlay}></div>
  );

  // get this post data
  useEffect(() => {
    async function getPostData() {
      const response = await postsApi.getPost(props.id);
      setPostData(response.data);
    }
    getPostData();

    // get comments
    async function getComments() {
      const response = await commentsApi.getComments(props.id);

      setComments(response.data);
    }
    getComments();
  }, [props.id, rerender]);

  // First, post the comment then get the comments
  const postCommentHandler = async () => {
    try {
      const response = await commentsApi.createComment(
        props.id,
        inputRef.current.value
      );
      if (response.status === 201) {
        setRerender((state) => !state);
      }
    } catch (error) {
      console.log(error);
    }

    inputRef.current.value = '';
  };

  const component = postData && (
    <div className='post-overlay'>
      <div className='overlay-image'>
        {postData.image.url.includes('mp4') ? (
          <video
            controls
            width='100%'
            height='100%'
            loop
            muted
            playsInline
            src={postData.image.url}
          />
        ) : (
          <img src={postData.image.url} alt='' />
        )}
      </div>
      <div className='overlay-right'>
        <div className='overlay-header'>
          <div>
            <span
              className='overlay-header__img'
              style={{
                backgroundImage: `url(${
                  postData.user.avatar === null ? avatar : postData.user.avatar
                })`,
              }}
            />
          </div>
          <Link to={`/users/${postData.user.username}`}>
            <div>
              <span className='overlay-header__username'>
                {postData.user.username.substr(0, 8) + '...'}
              </span>
            </div>
          </Link>
          <Follow id={postData.user.id} />
          <DeleteBtn postId={postData.id} userId={postData.user.id} />
        </div>

        <div className='overlay-content'>{postData.content}</div>

        {/* overlay comments */}
        <div className='overlay-comments'>
          <div className='overlay-input'>
            <IoHappyOutline className='overlay-input__icon' />
            <input type='text' id='post-comment' ref={inputRef} />
            <Button
              onClick={postCommentHandler}
              onKeyPress={postCommentHandler}
            >
              Post
            </Button>
          </div>
          {comments &&
            comments
              .map((comment, id) => {
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

        <div className='overlay-input'>
          <IoHappyOutline className='overlay-input__icon' />
          <input type='text' id='post-comment' ref={inputRef} />
          <Button onClick={postCommentHandler} onKeyPress={postCommentHandler}>
            Post
          </Button>
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
