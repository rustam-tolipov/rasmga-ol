import { useState, useRef, useEffect } from 'react';
import Axios from 'axios';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';

import usersApi from '../../api/users';

import Button from '../UI/Button';

import avatar from '../../assets/avatar.jpg';
import spinner from '../../assets/spinner.svg';
import './Settings.scss';

const Settings = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);

  const [data, setData] = useState(currentUser);
  const [file, setFile] = useState(null);
  const [resData, setResData] = useState();
  const [loading, setLoading] = useState(false);

  const imgRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const usernameRef = useRef();
  const bioRef = useRef();
  const emailRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    if (imgRef.current.files[0])
      formData.append('avatar', imgRef.current.files[0]);
    if (firstNameRef.current.value)
      formData.append('first_name', firstNameRef.current.value);
    if (lastNameRef.current.value)
      formData.append('last_name', lastNameRef.current.value);
    if (usernameRef.current.value)
      formData.append('username', usernameRef.current.value);
    if (bioRef.current.value) formData.append('bio', bioRef.current.value);
    if (emailRef.current.value)
      formData.append('email', emailRef.current.value);

    usersApi
      .updateUser(data.id, formData)
      .then((res) => {
        setResData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className='settings'>
      <form onSubmit={submitHandler}>
        <div className='settings__img'>
          <div className='setting__img--cont'>
            <img src={data.avatar} alt='' />
          </div>
        </div>
        <div className='settings__input-box'>
          <input ref={imgRef} type='file' />
        </div>

        <p className='settings__name'>Name</p>
        <div className='settings__input-box'>
          <input
            ref={firstNameRef}
            type='text'
            placeholder='First Name'
            value={data.first_name}
            onChange={(e) => setData({ ...data, first_name: e.target.value })}
          />
          <input
            ref={lastNameRef}
            type='text'
            placeholder='Last Name'
            value={data.last_name}
            onChange={(e) => setData({ ...data, last_name: e.target.value })}
          />
          <p>
            Help people discover your account by using the name you're known by:
            either your full name, nickname, or business name.
          </p>
        </div>

        <p className='settings__name'>Username</p>
        <div className='settings__input-box'>
          <input
            ref={usernameRef}
            type='text'
            placeholder='Username'
            value={data.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
          <p>
            In most cases, you'll be able to change your username back to
            maqsudtolipov9 for another 14 days.
          </p>
        </div>

        <p className='settings__name'>Bio</p>
        <div className='settings__input-box'>
          <textarea
            ref={bioRef}
            rows='4'
            cols='50'
            placeholder='Hello 👋🏼, I am'
            value={data.bio}
            onChange={(e) => setData({ ...data, bio: e.target.value })}
          />
          <p>
            Prive your account by adding a short bio about yourself. This is a
            good place to share a little bit about yourself and what you do.
          </p>
        </div>

        <p className='settings__name'>Email</p>
        <div className='settings__input-box'>
          <input
            ref={emailRef}
            type='email'
            placeholder='Email'
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <p>This won't be displayed publicly.</p>
        </div>

        <Button className='settings__btn'>
          {loading ? (
            <>
              <img src={spinner} alt='' />
              <span>Updating</span>
            </>
          ) : (
            <span> Save Changes</span>
          )}
        </Button>
      </form>
    </div>
  );
};

export default Settings;
