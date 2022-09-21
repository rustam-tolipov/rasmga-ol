import { useRef, useState, useEffect } from 'react';
import { IoSearch } from 'react-icons/io5';

import searchApi from '../../api/search';

import './Search.scss';

const Search = (props) => {
  const inputRef = useRef();
  const [searchResults, setSearchResults] = useState([]);

  const searchHandler = async () => {
    const response = await searchApi.search(inputRef.current.value);
    setSearchResults(response.data);
  };

  console.log(searchResults);

  return (
    <div className="search">
      <IoSearch className="search__icon" />
      <input
        type="text"
        placeholder="Search"
        ref={inputRef}
        onChange={searchHandler}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            searchHandler();
          }
        }}
      />
    </div>
  );
};

export default Search;
