import { createPortal } from 'react-dom';
import './PostPortal.scss';

const PostPortal = (props) => {
  return createPortal(<div>test</div>, document.querySelector('#post-portal'));
};

export default PostPortal;
