import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {
  IoHeartOutline,
  IoChatbubbleOutline,
  IoPaperPlaneOutline,
} from 'react-icons/io5';
import Axios from 'axios';
import Cookies from 'js-cookie';

import avatar from '../../assets/avatar.jpg';
import sound from '../../assets/like.mp3';
import './Post.scss';
import Verified from '../UI/Verified';

const Post = (props) => {
  const heartRef = useRef();
  const heartLeftRef = useRef();
  const heartRightRef = useRef();

  const [liked, setLiked] = useState(false);
  const [postProfile, setPostProfile] = useState();
  console.log(postProfile);

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
  }, []);

  // audio
  const audio = new Audio(sound);

  // animation

  const animateHeart = () => {
    setTimeout(function () {
      audio.play();
    }, 500);

    const tl = gsap.timeline({
      defaults: { duration: 0.5, clearProps: 'all' },
    });

    // first look
    tl.to(heartRef.current, {
      scale: 1.1,
    });
    tl.to(heartLeftRef.current, {
      y: '-40px',
      x: '-80px',
      rotate: '-30deg',
      scale: 1.4,
      clearProps: 'all',
    });
    tl.to(
      heartRightRef.current,
      {
        y: '-80px',
        x: '80px',
        rotate: '45deg',
        scale: 1.4,
        clearProps: 'all',
      },
      '<0%'
    );

    // second look
    tl.to(
      heartLeftRef.current,
      {
        opacity: 0,
        clearProps: 'all',
      },
      '<50%'
    );
    tl.to(
      heartRightRef.current,
      {
        opacity: 0,
        clearProps: 'all',
      },
      '<0%'
    );
  };

  useEffect(() => {
    if (!liked) return;
    animateHeart();
  }, [liked]);

  return (
    postProfile && (
      <div className='post'>
        <div className='post-profile'>
          <img
            className='post-profile__img'
            src={
              postProfile.avatar.url === null ? avatar : postProfile.avatar.url
            }
            alt='User profile'
            style={{ height: '24px' }}
          />
          <p className='post-profile__name'>
            {postProfile.username || postProfile.first_name + ' ' + postProfile.last_name}
          </p>
          <Verified />
        </div>
        <img className='post__img' src={props.url} alt='' />
        <div className='post__description'>
          <p className='post__content'>{props.content}</p>
          <div className='post__icons'>
            <IoPaperPlaneOutline className='share' />
            <IoChatbubbleOutline className='comment' />
            <svg
              onClick={() => {
                setLiked((liked) => !liked);
              }}
              className='like'
              width='108'
              height='100'
              viewBox='0 0 108 100'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              style={{ overflow: 'visible' }}
            >
              <path
                className='heart'
                ref={heartRef}
                d='M54 100C52.3326 99.9979 50.7044 99.4925 49.3272 98.5495C28.9251 84.6562 20.0908 75.1302 15.2181 69.1745C4.83407 56.4792 -0.137302 43.4453 0.00288266 29.3307C0.166432 13.1563 13.1024 0 28.8394 0C40.2827 0 48.2083 6.46615 52.824 11.8516C52.9702 12.0204 53.1509 12.1559 53.3538 12.2487C53.5566 12.3415 53.777 12.3895 54 12.3895C54.223 12.3895 54.4434 12.3415 54.6462 12.2487C54.8491 12.1559 55.0298 12.0204 55.176 11.8516C59.7917 6.46094 67.7174 0 79.1606 0C94.8976 0 107.834 13.1562 107.997 29.3333C108.137 43.4505 103.161 56.4844 92.7819 69.1771C87.9092 75.1328 79.0749 84.6589 58.6728 98.5521C57.2953 99.4941 55.6672 99.9987 54 100V100Z'
                fill='#EF4444'
              />
              <path
                className='heart-right'
                ref={heartRightRef}
                d='M88 52C87.4442 51.9993 86.9015 51.8325 86.4424 51.5213C79.6417 46.9366 76.6969 43.793 75.0727 41.8276C71.6114 37.6381 69.9542 33.337 70.001 28.6791C70.0555 23.3416 74.3675 19 79.6131 19C83.4276 19 86.0694 21.1338 87.608 22.911C87.6567 22.9667 87.717 23.0114 87.7846 23.0421C87.8522 23.0727 87.9257 23.0885 88 23.0885C88.0743 23.0885 88.1478 23.0727 88.2154 23.0421C88.283 23.0114 88.3433 22.9667 88.392 22.911C89.9306 21.1321 92.5725 19 96.3869 19C101.633 19 105.945 23.3416 105.999 28.68C106.046 33.3387 104.387 37.6398 100.927 41.8284C99.3031 43.7938 96.3583 46.9374 89.5576 51.5222C89.0984 51.8331 88.5557 51.9996 88 52V52Z'
                fill='#EF4444'
              />
              <path
                className='heart-left'
                ref={heartLeftRef}
                d='M20 52C19.4442 51.9993 18.9015 51.8325 18.4424 51.5213C11.6417 46.9366 8.69695 43.793 7.07271 41.8276C3.61136 37.6381 1.95423 33.337 2.00096 28.6791C2.05548 23.3416 6.36746 19 11.6131 19C15.4276 19 18.0694 21.1338 19.608 22.911C19.6567 22.9667 19.717 23.0114 19.7846 23.0421C19.8522 23.0727 19.9257 23.0885 20 23.0885C20.0743 23.0885 20.1478 23.0727 20.2154 23.0421C20.283 23.0114 20.3433 22.9667 20.392 22.911C21.9306 21.1321 24.5725 19 28.3869 19C33.6325 19 37.9445 23.3416 37.999 28.68C38.0458 33.3387 36.3869 37.6398 32.9273 41.8284C31.3031 43.7938 28.3583 46.9374 21.5576 51.5222C21.0984 51.8331 20.5557 51.9996 20 52V52Z'
                fill='#EF4444'
              />
            </svg>
          </div>
        </div>
      </div>
    )
  );
};

export default Post;
