import './Posts.scss';
import PostsSearch from './PostsSearch';

const Posts = (props) => {
  return (
    <div className='posts'>
      <PostsSearch  />
      <h1>Posts</h1>
    </div>
  );
};

export default Posts;
