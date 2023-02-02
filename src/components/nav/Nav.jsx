import React from 'react';
import logoFile from '../../assets/logo.svg';
import CreatePost from '../CreatePost/CreatePost';

import './Nav.scss';

const NavFooter = React.lazy(() => import('./NavFooter'));
const NavLinks = React.lazy(() => import('./NavLinks'));
const NavProfile = React.lazy(() => import('./NavProfile'));

const Nav = (props) => {
  return (
    <nav className="nav">
      <div className="logo">
        <img className="logo" src={logoFile} alt="Keep logo" />
      </div>
      <NavProfile />
      <NavLinks />
      <CreatePost />
      <NavFooter />
    </nav>
  );
};

export default Nav;
