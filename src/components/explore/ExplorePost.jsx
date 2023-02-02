import { useState } from 'react';

import PostOverlay from '../posts/PostOverlay';

import './ExplorePost.scss';

const ExplorePost = (props) => {
  const [open, setOpen] = useState(false);

  const closeOverlay = () => {
    setOpen(false);
  };

  return (
    <div className='explore-post'>
      {props.src.includes('mp4') ? (
        <video
          width='100%'
          height='100%'
          loop
          muted
          playsInline
          src={props.src}
          onClick={() => setOpen(true)}
          // className='video'
        />
      ) : (
        <img src={props.src} alt='' onClick={() => setOpen(true)} />
      )}

      {open && (
        <PostOverlay
          id={props.id}
          user_id={props.user_id}
          src={props.src}
          closeOverlay={closeOverlay}
        />
      )}
    </div>
  );
};

export default ExplorePost;
