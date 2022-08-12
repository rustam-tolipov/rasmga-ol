import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import logo from '../../assets/logo.svg';
import './Login.scss';

const SignUp = () => {
  const signUpHandler = () => {};

  return (
    <div className='login' onSubmit={signUpHandler}>
      <form className='login-form' action=''>
        <img className='login-img' src={logo} alt='Instagram logo' />
        <div>
          <input type='text' placeholder='First Name' />
        </div>
        <div>
          <input type='text' placeholder='Last Name' />
        </div>
        <div>
          <input type='email' placeholder='Email' />
        </div>
        <div>
          <input type='password' placeholder='Password' />
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
