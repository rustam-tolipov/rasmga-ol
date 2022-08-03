import { IoSearch } from 'react-icons/io5';

import './PostsSearch.scss';

const PostsSearch = (props) => {
  return (
    <div className='posts-search'>
      <IoSearch className='posts-search__icon' />
      <input type='text' />
    </div>
  );
};

export default PostsSearch;
