import { Link } from 'react-router-dom';
import {
  IoHome,
  IoCompassOutline,
  IoBookmarkOutline,
  IoChatbubblesOutline,
  IoFlashOutline,
} from 'react-icons/io5';

import './NavLinks.scss';

const NavLinks = (props) => {
  return (
    <div className='nav-links'>
      <ul className='nav-links__list'>
        <li className='nav-links__item nav-links__item--active'>
          <Link to='/' className='nav-links__link' href='#'>
            <IoHome className='nav-links__icon' />
            <span className='nav-links__link-text'>Feed</span>
          </Link>
        </li>
        <li className='nav-links__item'>
          <Link to={'explore'} className='nav-links__link' href='#'>
            <IoCompassOutline className='nav-links__icon' />
            <span className='nav-links__link-text'>Explore</span>
          </Link>
        </li>
        <li className='nav-links__item'>
          <a className='nav-links__link' href='#'>
            <IoBookmarkOutline className='nav-links__icon' />
            <span className='nav-links__link-text'>Saved</span>
          </a>
        </li>
        <hr />
        <li className='nav-links__item'>
          <a className='nav-links__link' href='#'>
            <IoChatbubblesOutline className='nav-links__icon' />
            <span className='nav-links__link-text'>Direct</span>
          </a>
        </li>
        <li className='nav-links__item'>
          <a className='nav-links__link' href='#'>
            <IoFlashOutline className='nav-links__icon' />
            <span className='nav-links__link-text'>Activity</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
