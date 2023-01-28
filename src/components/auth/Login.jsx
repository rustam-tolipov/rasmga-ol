import { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import authApi from '../../api/auth';
import { authSuccess } from '../../redux/actions/auth';

import Button from '../UI/Button';
import logo from '../../assets/logo.svg';
import Errors from '../UI/Errors';

import './Login.scss';

const Login = (props) => {
  const dispatch = useDispatch();

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState('');

  async function onSubmit(data) {
    data.preventDefault();
    setIsLoading(true);

    data = {
      user: {
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value,
      },
    };

    const response = await authApi.login(data);

    if (response.status === 200) {
      dispatch(authSuccess(response));
      navigate('/');
    } else {
      response.data.error && setErrors(response.data.error);
    }

    setIsLoading(false);
  }

  return (
    <div className='login' onSubmit={onSubmit}>
      <form className='login-form' action=''>
        <img className='login-img' src={logo} alt='RasmgaOl logo' />
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
        <Errors errors={errors} />
      </form>
    </div>
  );
};

export default Login;
