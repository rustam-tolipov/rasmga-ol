import Axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../UI/Button';
import logo from '../../assets/logo.svg';

import './Login.scss';

const Login = (props) => {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const navigate = useNavigate();
  useEffect(() => {
    const isLogged = Cookies.get('jwt');
    if (isLogged) navigate('/');
  });

  const loginHandler = (e) => {
    e.preventDefault();

    Axios.post(
      'https://rustam-social-media-rails-app.herokuapp.com/api/v1/auth/login',
      {
        user: {
          email: emailInputRef.current.value,
          password: passwordInputRef.current.value,
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
      .catch((err) => {});
  };

  return (
    <div className='login' onSubmit={loginHandler}>
      <form className='login-form' action=''>
        <img className='login-img' src={logo} alt='Instagram logo' />
        <div>
          <input ref={emailInputRef} type='email' placeholder='email' />
        </div>
        <div>
          <input
            ref={passwordInputRef}
            type='password'
            placeholder='password'
          />
        </div>

        <Button>Login</Button>
        <Link className='login-link' to='/signup'>
          If you don't have an account, create one here
        </Link>
      </form>
    </div>
  );
};

export default Login;
