import { IoGrid, IoTvOutline, IoPersonOutline } from 'react-icons/io5';

const UserNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <IoGrid /> Posts
        </li>
        <li>
          <IoTvOutline /> IGTV
        </li>
        <li>
          <IoPersonOutline /> Tagged
        </li>
      </ul>
    </nav>
  );
};

export default UserNav;
