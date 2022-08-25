import { Link, useNavigate } from 'react-router-dom';
import { useRef, useEffect } from 'react';

import Axios from 'axios';
import Cookies from 'js-cookie';

import Button from '../UI/Button';

import logo from '../../assets/logo.svg';
import './Login.scss';

const SignUp = () => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();
  useEffect(() => {
    const isLogged = Cookies.get('jwt');
    if (isLogged) navigate('/');
  });

  const signUpHandler = (e) => {
    e.preventDefault();

    Axios.post(
      'https://rustam-social-media-rails-app.herokuapp.com/api/v1/auth/signup',
      {
        user: {
          first_name: firstNameRef.current.value,
          last_name: lastNameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
        },
      }
    )
      .then((res) => {
        Cookies.set('jwt', res.headers.authorization.slice(7));
        localStorage.setItem('me', JSON.stringify(res.data));
      })
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        console.log('Could not sign up', err);
      });
  };

  return (
    <div className='login' onSubmit={signUpHandler}>
      <form className='login-form' action=''>
        <img className='login-img' src={logo} alt='Instagram logo' />
        <div>
          <input ref={firstNameRef} type='text' placeholder='First Name' />
        </div>
        <div>
          <input ref={lastNameRef} type='text' placeholder='Last Name' />
        </div>
        <div>
          <input ref={emailRef} type='email' placeholder='Email' />
        </div>
        <div>
          <input ref={passwordRef} type='password' placeholder='Password' />
        </div>

        <Button>Sign Up</Button>
        <Link className='login-link' to='/login'>
          If you already memberm, please login here
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
