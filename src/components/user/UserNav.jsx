import { IoGrid, IoTvOutline, IoPersonOutline } from 'react-icons/io5';

import './UserNav.scss';

const UserNav = () => {
  return (
    <nav className='user-nav'>
      <ul className='user-nav__list'>
        <li className='user-nav__link user-nav__link--active'>
          <IoGrid /> Posts
        </li>
        <li className='user-nav__link'>
          <IoTvOutline /> IGTV
        </li>
        <li className='user-nav__link'>
          <IoPersonOutline /> Tagged
        </li>
      </ul>
    </nav>
  );
};

export default UserNav;
