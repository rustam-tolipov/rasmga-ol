import logoFile from '../../assets/logo.svg';

import './Nav.scss';
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
    </nav>
  );
};

export default Nav;
