import { IoSearch } from 'react-icons/io5';

import './Search.scss';

const Search = (props) => {
  return (
    <div className='search'>
      <IoSearch className='search__icon' />
      <input type='text' />
    </div>
  );
};

export default Search;
