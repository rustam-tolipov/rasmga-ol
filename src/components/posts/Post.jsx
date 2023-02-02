import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { gsap } from 'gsap';
import {
  IoHeartOutline,
  IoHeart,
  IoChatbubbleOutline,
  IoPaperPlaneOutline,
} from 'react-icons/io5';
import { Link } from 'react-router-dom';
import likesApi from '../../api/likes';

import Verified from '../UI/Verified';

import './Post.scss';
import Button from '../UI/Button';
import DeleteBtn from '../UI/DeleteBtn';

const PostOverlay = React.lazy(() => import('./PostOverlay'));
const PostOptionsOverlay = React.lazy(() => import('./PostOptionsOverlay'));

const Post = (props) => {
  const [open, setOpen] = useState(false);
  const [openOverlay, setOpenOverlay] = useState(false);
  const [liked, setLiked] = useState(false);

  const currentUser = useSelector((state) => state.auth.currentUser);

  const postProfile = props.user;

  // check if user has liked the post
  useEffect(() => {
    const liked = props.likes.find((like) => like.user_id === currentUser.id);
    if (liked) setLiked(true);
  }, [props.likes, currentUser.id]);

  // like post
  const likePost = async () => {
    const response = await likesApi.likePost(props.id);
    if (response.status === 201) {
      setLiked(true);
    }
  };

  // unlike post
  const unlikePost = async () => {
    const response = await likesApi.unlikePost(props.id);
    if (response.status === 200) {
      setLiked(false);
    }
  };

  // close overlay
  const closeOverlay = () => {
    setOpen(false);
  };

  const openOverlayHandler = () => {
    setOpenOverlay(true);
  };

  const closeOverlayHandler = () => {
    setOpenOverlay(false);
  };

  return (
    postProfile && (
      <div className='post'>
        <div className='post-profile'>
          <div className='post-profile__info'>
            <img
              className='post-profile__img'
              src={props.user.avatar}
              alt='User profile'
            />
            <Link
              to={`/users/${props.user.username}`}
              className='post-profile__name'
            >
              {props.user.first_name + ' ' + props.user.last_name}
            </Link>
            <Verified />
          </div>

          <ion-icon
            className='post-profile__options'
            name='ellipsis-horizontal'
            onClick={openOverlayHandler}
          ></ion-icon>
        </div>
        <div
          className='post__img-container'
          onClick={() => {
            setOpen(true);
          }}
        >
          <ion-icon
            className='post__img-container__icon'
            name='film-outline'
            style={{
              position: 'absolute',
              top: '2%',
              right: '2%',
              fontSize: '3.2rem',
              color: 'white',
              opacity: '0.5',
              display: props.url.includes('mp4') ? 'block' : 'none',
            }}
          ></ion-icon>

          {props.url.includes('mp4') ? (
            <video
              // controls
              width='100%'
              height='100%'
              loop
              muted
              playsInline
              src={props.url}
            />
          ) : (
            <img src={props.url} alt='' />
          )}
        </div>
        <div className='post__description'>
          <p className='post__content'>{props.content}</p>
          <div className='post__icons'>
            <IoPaperPlaneOutline className='share' />
            <IoChatbubbleOutline
              className='comment'
              onClick={() => {
                setOpen(true);
              }}
            />
            {liked ? (
              <>
                <IoHeart className='heart' onClick={unlikePost} />
                <p
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                  }}
                >
                  {props.likes.length}
                </p>
              </>
            ) : (
              <IoHeartOutline onClick={likePost} />
            )}
          </div>
        </div>

        {open && (
          <PostOverlay
            closeOverlay={closeOverlay}
            id={props.id}
          />
        )}

        {openOverlay && (
          <PostOptionsOverlay
            closeOverlay={closeOverlayHandler}
            username={props.user.username}
            user_id={props.user.id}
            id={props.id}
          />
        )}
      </div>
    )
  );
};

export default Post;
