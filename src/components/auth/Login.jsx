import Axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../UI/Button';
import logo from '../../assets/logo.svg';

import './Login.scss';

const Login = (props) => {
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
          email: 'maqsudtolipov9@gmail.com',
          password: 'password',
          'ber-token': true,
        },
        withCredentials: true,
      }
    )
      .then((res) => {
        console.log(res);
        Cookies.set('jwt', res.headers.authorization.slice(7));
      })
      .then(() => {
        console.log('redirect');
        navigate('/');
      })
      .catch((err) => {});
  };

  return (
    <div className='login' onSubmit={loginHandler}>
      <form className='login-form' action=''>
        <img className='login-img' src={logo} alt='Instagram logo' />
        <div>
          <input type='email' placeholder='email' />
        </div>
        <div>
          <input type='password' placeholder='password' />
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
