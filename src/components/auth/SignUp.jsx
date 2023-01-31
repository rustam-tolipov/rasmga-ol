import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authApi from '../../api/auth';
import { authSuccess } from '../../redux/actions/auth';

import Button from '../UI/Button';

import Loading from '../UI/Loading';
import Errors from '../UI/Errors';

import logo from '../../assets/logo.svg';
import './Login.scss';

const SignUp = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(' ');

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const userNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();

  async function onSignUp(data) {
    setIsLoading(true);

    data = {
      user: {
        first_name: firstNameRef.current.value,
        last_name: lastNameRef.current.value,
        username: userNameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      },
    };

    const response = await authApi.signup(data);

    if (response.status === 200) {
      navigate('/');
      dispatch(authSuccess(response));
    } else {
      response.data.error && setErrors(response.data.error);
    }

    setIsLoading(false);
  }

  return (
    <div className='login' onSubmit={onSignUp}>
      {isLoading ? (
        <Loading loading={isLoading} />
      ) : (
        <>
          <form className='login-form' action=''>
            <img className='login-img' src={logo} alt='Instagram logo' />
            <div>
              <input ref={firstNameRef} type='text' placeholder='First Name' />
            </div>
            <div>
              <input ref={lastNameRef} type='text' placeholder='Last Name' />
            </div>
            <div>
              <input ref={userNameRef} type='text' placeholder='Username' />
            </div>
            <div>
              <input ref={emailRef} type='email' placeholder='Email' />
            </div>
            <div>
              <input ref={passwordRef} type='password' placeholder='Password' />
            </div>

            <Button disabled={isLoading}>Sign Up</Button>
          </form>
          <Link className='login-link' to='/login'>
            If you already memberm, please login here
            <Errors errors={errors} />
          </Link>
        </>
      )}
    </div>
  );
};

export default SignUp;
