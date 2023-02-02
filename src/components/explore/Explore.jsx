import Search from '../UI/Search';
import ExplorePosts from './ExplorePosts';

import './Explore.scss'

const Explore = () => {
  return (
    <div className='explore'>
      <Search />
      <ExplorePosts />
    </div>
  );
};

export default Explore;
