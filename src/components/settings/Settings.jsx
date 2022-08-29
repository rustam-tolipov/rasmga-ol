import { useState, useRef, useEffect } from 'react';
import Axios from 'axios';
import Cookies from 'js-cookie';

import Button from '../UI/Button';

import avatar from '../../assets/avatar.jpg';
import './Settings.scss';

const Settings = () => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem('me')));
  const [file, setFile] = useState(null);
  const [resData, setResData] = useState();

  const imgRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const usernameRef = useRef();
  const bioRef = useRef();
  const emailRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

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

    console.log([...formData]);

    Axios.put(
      `https://rustam-social-media-rails-app.herokuapp.com/api/v1/auth/users/${data.id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get('jwt')}`,
        },
      }
    )
      .then((res) => {
        console.log(res);
        setResData(res.data);

        // get user data and update localStorage
        Axios.get(
          `https://rustam-social-media-rails-app.herokuapp.com/api/v1/auth/users/${data.id}`,
          {
            headers: {
              Authorization: `Bearer ${Cookies.get('jwt')}`,
            },
          }
        ).then((res) => {
          localStorage.setItem('me', JSON.stringify(res.data));
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='settings'>
      <form onSubmit={submitHandler}>
        <div className='settings__img'>
          <img
            src={data.avatar === null ? avatar : data.avatar}
            alt=''
          />
        </div>
        <div className='settings__input-box'>
          <input ref={imgRef} type='file' />
        </div>

        <p className='settings__name'>Name</p>
        <div className='settings__input-box'>
          <input ref={firstNameRef} type='text' placeholder='First Name' />
          <input ref={lastNameRef} type='text' placeholder='Last Name' />
          <p>
            Help people discover your account by using the name you're known by:
            either your full name, nickname, or business name.
          </p>
        </div>

        <p className='settings__name'>Username</p>
        <div className='settings__input-box'>
          <input ref={usernameRef} type='text' placeholder='Username' />
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
          />
          <p>
            Prive your account by adding a short bio about yourself. This is a
            good place to share a little bit about yourself and what you do.
          </p>
        </div>

        <p className='settings__name'>Email</p>
        <div className='settings__input-box'>
          <input ref={emailRef} type='email' placeholder='Email' />
          <p>This won't be displayed publicly.</p>
        </div>

        <Button className='settings__btn'>Save Changes</Button>
      </form>
    </div>
  );
};

export default Settings;
