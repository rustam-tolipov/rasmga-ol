import { useState, useMatch, useResolvedPath } from 'react';
import { NavLink } from 'react-router-dom';
import {
  IoHome,
  IoCompassOutline,
  IoBookmarkOutline,
  IoChatbubblesOutline,
  IoFlashOutline,
  IoCog,
} from 'react-icons/io5';

import './NavLinks.scss';

const NavLinks = (props) => {
  return (
    <div className='nav-links'>
      <ul className='nav-links__list'>
        <li className='nav-links__item '>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive
                ? 'nav-links__link nav-links__link--active'
                : 'nav-links__link'
            }
          >
            <IoHome className='nav-links__icon' />
            <span className='nav-links__link-text'>Feed</span>
          </NavLink>
        </li>
        <li className='nav-links__item'>
          <NavLink
            to='/explore'
            className={({ isActive }) =>
              isActive
                ? 'nav-links__link nav-links__link--active'
                : 'nav-links__link'
            }
          >
            <IoCompassOutline className='nav-links__icon' />
            <span className='nav-links__link-text'>Explore</span>
          </NavLink>
        </li>
        <li className='nav-links__item'>
          <a className='nav-links__link' href='#'>
            <IoBookmarkOutline className='nav-links__icon' />
            <span className='nav-links__link-text'>Saved</span>
          </a>
        </li>
        <div className='nav-links__line'></div>
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
        <NavLink
          to='/settings'
          className={({ isActive }) =>
            isActive
              ? 'nav-links__link nav-links__link--active'
              : 'nav-links__link'
          }
        >
          <IoCog className='nav-links__icon' />
          <span className='nav-links__link-text'>Settings</span>
        </NavLink>
      </ul>
    </div>
  );
};

export default NavLinks;
