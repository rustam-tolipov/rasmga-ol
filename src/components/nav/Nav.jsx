import logoFile from '../../assets/logo.svg';

import './Nav.scss';
import NavFooter from './NavFooter';
import NavLinks from './NavLinks';
import NavProfile from './NavProfile';

const Nav = (props) => {
  return (
    <nav className='nav'>
      <div className='logo'>
        <img className='logo' src={logoFile} alt='Keep logo' />
      </div>
      <NavProfile />
      <NavLinks />
      <NavFooter />
    </nav>
  );
};

export default Nav;
