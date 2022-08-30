import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {
  IoHeartOutline,
  IoHeart,
  IoChatbubbleOutline,
  IoPaperPlaneOutline,
} from 'react-icons/io5';
import Axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

import Verified from '../UI/Verified';
import PostOverlay from './PostOverlay';

import avatar from '../../assets/avatar.jpg';
import './Post.scss';
import Button from '../UI/Button';

const Post = (props) => {
  const [open, setOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [postProfile, setPostProfile] = useState();

  // get user data
  useEffect(() => {
    Axios.get(
      `https://rustam-social-media-rails-app.herokuapp.com/api/v1/users/${props.user}`,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get('jwt')}`,
        },
      }
    ).then((res) => {
      setPostProfile(res.data);

    });
  }, [props.user]);

  // check if user has liked the post
  useEffect(() => {
    const me = JSON.parse(localStorage.getItem('me')).id;
    const liked = props.likes.find((like) => like.user_id === me);
    if (liked) setLiked(true);
  }, []);

  // like post
  const likePost = async () => {
    await Axios.post(
      `https://rustam-social-media-rails-app.herokuapp.com/api/v1/posts/${props.id}/like`,
      { session: false },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get('jwt')}`,
        },
        body: {
          data: null,
        },
      }
    );
    setLiked(true);
  };

  // unlike post
  const unlikePost = async () => {
    await Axios.delete(
      `https://rustam-social-media-rails-app.herokuapp.com/api/v1/posts/${props.id}/like`,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get('jwt')}`,
        },
      }
    );
    setLiked(false);
  };

  // close overlay
  const closeOverlay = () => {
    setOpen(false);
  };

  return (
    postProfile && (
      <div className='post'>
        <div className='post-profile'>
          <img
            className='post-profile__img'
            src={postProfile.avatar === null ? avatar : postProfile.avatar}
            alt='User profile'
          />
          <Link
            to={`/users/${postProfile.username}`}
            className='post-profile__name'
          >
            {postProfile.username ||
              postProfile.first_name + ' ' + postProfile.last_name}
          </Link>
          <Verified />
        </div>
        <div
          className='post__img-container'
          onClick={() => {
            setOpen(true);
          }}
        >
          <img className='post__img' src={props.url} alt='' />
        </div>
        <div className='post__description'>
          <p className='post__content'>{props.content}</p>
          <div className='post__icons'>
            <IoPaperPlaneOutline className='share' />
            <IoChatbubbleOutline className='comment' />
            {liked ? (
              <IoHeart className='heart' onClick={unlikePost} />
            ) : (
              <IoHeartOutline onClick={likePost} />
            )}
          </div>
        </div>

        {/* post portal test */}
        {open && (
          <PostOverlay
            content={props.content}
            url={props.url}
            closeOverlay={closeOverlay}
            avatar={postProfile.avatar}
            username={postProfile.username || postProfile.first_name}
            comments={props.comments}
            id={props.id}
          />
        )}
      </div>
    )
  );
};

export default Post;
