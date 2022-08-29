import { useState } from 'react';

import PostOverlay from '../posts/PostOverlay';

import './ExplorePost.scss';

const ExplorePost = (props) => {
  const [open, setOpen] = useState(false);
  console.log(props.id);

  const closeOverlay = () => {
    setOpen(false);
  };

  return (
    <div className='explore-post'>
      <img src={props.src} alt='' onClick={() => setOpen(true)} />

      {open && <PostOverlay id={props.id} closeOverlay={closeOverlay} />}
    </div>
  );
};

export default ExplorePost;
