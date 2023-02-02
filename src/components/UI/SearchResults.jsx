import React from 'react';
import { Link } from 'react-router-dom';

import './SearchResult.scss';

const SearchResult = (props) => {
  console.log(props);

  return props.results.length > 0 ? (
    <ul className={`search-result__list`}>
      <li className='search-result__item'>
        {props.results.map((result) => (
          <Link
            to={`/users/${result.username}`}
            className='search-result__item--link'
            key={result.id}
          >
            <div className='search-result__item--img'>
              <img src={result.avatar} alt='profile' />
            </div>
            <div className='search-result__item--info'>
              <h3 className='search-result__item--name'>
                {result.first_name + ' ' + result.last_name}
              </h3>
              <p className='search-result__item--username'>
                @{result.username}
              </p>
            </div>
          </Link>
        ))}
      </li>
    </ul>
  ) : null;
};

export default SearchResult;
