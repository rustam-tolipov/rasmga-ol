import logoFile from '../../assets/logo.svg';

import './Nav.scss';

const Nav = (props) => {
  return (
    <nav className='nav'>
      <div className='logo'>
        <img className='logo' src={logoFile} alt='Keep logo' />
      </div>
    </nav>
  );
};

export default Nav;
