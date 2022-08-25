import { useState } from 'react';

import avatar from '../../assets/avatar.jpg';
import './Settings.scss';

const Settings = () => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem('me')));

  return (
    <div className='settings'>
      <form>
        <div className='settings__img'>
          <img
            src={data.avatar.url === null ? avatar : data.avatar.url}
            alt=''
          />
        </div>
        <div className='settings__input-box'>
          <input type='file' />
        </div>

        <p className='settings__name'>Name</p>
        <div className='settings__input-box'>
          <input type='text' />
          <p>
            Help people discover your account by using the name you're known by:
            either your full name, nickname, or business name.
          </p>
        </div>

        <p className='settings__name'>Username</p>
        <div className='settings__input-box'>
          <input type='text' />
          <p>
            In most cases, you'll be able to change your username back to
            maqsudtolipov9 for another 14 days.
          </p>
        </div>

        <p className='settings__name'>Bio</p>
        <div className='settings__input-box'>
          <textarea rows='4' cols='50' />
          <p>
            Prive your account by adding a short bio about yourself. This is a
            good place to share a little bit about yourself and what you do.
          </p>
        </div>

        <p className='settings__name'>Email</p>
        <div className='settings__input-box'>
          <input type='text' />
          <p>This won't be displayed publicly.</p>
        </div>
      </form>
    </div>
  );
};

export default Settings;
