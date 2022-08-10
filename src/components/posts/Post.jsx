import {
  IoHeartOutline,
  IoChatbubbleOutline,
  IoPaperPlaneOutline,
} from 'react-icons/io5';

import './Post.scss';

const Post = (props) => {
  return (
    <div className='post'>
      <img className='post__img' src={props.url} alt='' />
      <div className='post__description'>
        <p className='post__content'>{props.content}</p>
        <div className='post__icons'>
          <IoPaperPlaneOutline className='share' />
          <IoChatbubbleOutline className='comment' />
          <IoHeartOutline className='like' />
        </div>
      </div>
    </div>
  );
};

export default Post;
