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

const Post = (props) => {
  const [open, setOpen] = useState(false);
  const [liked, setLiked] = useState(false);

  const currentUser = useSelector((state) => state.auth.currentUser);

  const postProfile = props.user;

  // check if user has liked the post
  useEffect(() => {
    const liked = props.likes.find((like) => like.user_id === currentUser.id);
    console.log(liked, currentUser.id);
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

  return (
    postProfile && (
      <div className="post">
        <div className="post-profile">
          <img
            className="post-profile__img"
            src={props.user.avatar}
            alt="User profile"
          />
          <Link
            to={`/users/${props.user.username}`}
            className="post-profile__name"
          >
            {props.user.first_name + ' ' + props.user.last_name}
          </Link>
          <Verified />

          <DeleteBtn postId={props.id} userId={postProfile.id} />
        </div>
        <div
          className="post__img-container"
          onClick={() => {
            setOpen(true);
          }}
        >
          <img className="post__img" src={props.url} alt="" />
        </div>
        <div className="post__description">
          <p className="post__content">{props.content}</p>
          <div className="post__icons">
            <IoPaperPlaneOutline className="share" />
            <IoChatbubbleOutline className="comment" />
            {liked ? (
              <IoHeart className="heart" onClick={unlikePost} />
            ) : (
              <IoHeartOutline onClick={likePost} />
            )}
          </div>
        </div>

        {open && (
          <PostOverlay
            content={props.content}
            url={props.url}
            closeOverlay={closeOverlay}
            avatar={props.user.avatar}
            username={props.user.username}
            user_id={props.user.id}
            comments={props.comments}
            id={props.id}
          />
        )}
      </div>
    )
  );
};

export default Post;
