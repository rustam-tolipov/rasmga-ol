import { Link } from 'react-router-dom';

import { createPortal } from 'react-dom';

import { Delete } from '../UI/DeleteBtn';
import './Result.scss';

const Result = (props) => {
  const backdrop = (
    <div className='backdrop' onClick={props.closeOverlay}></div>
  );

  const options = (
    <ul className='options-overlay'>
      {/* <li className='options-overlay__item'>
        <a
          href='https://www.rustam.one/'
          target='_blank'
          className='options-overlay__item--link'
          rel='noreferrer'
        >
          🧑🏻‍💻. Check my portfolio
        </a>
      </li>

      <li className='options-overlay__item'>
        <a
          href='https://github.com/Rustamxon7/rasmga-ol'
          target='_blank'
          className='options-overlay__item--link'
          rel='noreferrer'
        >
          📄. See the source code
        </a>
      </li>

      <li className='options-overlay__item'>
        <a
          href='https://social-media-api.fly.dev/'
          target='_blank'
          className='options-overlay__item--link'
          rel='noreferrer'
        >
          ⚙️. Back-end
        </a>
      </li> */}
      {/* {props.user_id && (
        <li className='options-overlay__item'>
          <Delete postId={props.id} userId={props.user_id} />
        </li>
      )} */}
      <li className='result__item'>
        {props.followers.map((result) => (
          <Link
            to={`/users/${result.username}`}
            className='result__item--link'
            key={result.id}
          >
            <div className='result__item--img'>
              <img src={result.avatar} alt='profile' />
            </div>
            <div className='result__item--info'>
              <h3 className='result__item--name'>
                {result.first_name + ' ' + result.last_name}
              </h3>
              <p className='result__item--username'>
                @{result.username}
              </p>
            </div>
          </Link>
        ))}
      </li>
    </ul>
  );

  return (
    <>
      {props.closeOverlay &&
        createPortal(backdrop, document.querySelector('#post-portal'))}
      {props.closeOverlay &&
        createPortal(options, document.querySelector('#post-portal'))}
    </>
  );
};

export default Result;
