import { useSelector } from 'react-redux';

import postsApi from '../../api/posts';

import Button from '../UI/Button';

export const DeleteBtn = (props) => {
  const { postId, userId } = props;

  const currentUser = useSelector((state) => state.auth.currentUser);

  // delete post
  const deletePost = async () => {
    const response = await postsApi.deletePost(postId);
    if (response.status === 200) {
      window.location.reload();
    }
  };

  // display delete button if user is the owner of the post
  const displayDeleteButton = () => {
    if (currentUser.id === userId) {
      return (
        <Button className='post__delete' onClick={deletePost}>
          Delete
        </Button>
      );
    }
  };

  return <>{displayDeleteButton()}</>;
};

export const Delete = (props) => {
  const { postId, userId } = props;

  const currentUser = useSelector((state) => state.auth.currentUser);

  // delete post
  const deletePost = async () => {
    const response = await postsApi.deletePost(postId);
    if (response.status === 200) {
      window.location.reload();
    }
  };

  // display delete button if user is the owner of the post
  const displayDeleteButton = () => {
    if (currentUser.id === userId) {
      return (
        <p className='options-overlay__item--link' onClick={deletePost}>
          🗑️. Delete post
        </p>
      );
    } else {
      return (
        <p className='options-overlay__item--link'>
          This post does not belongs to you!
        </p>
      );
    }
  };

  return <>{displayDeleteButton()}</>;
};
