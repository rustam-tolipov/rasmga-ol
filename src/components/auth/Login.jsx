import Axios from 'axios';

import Button from '../UI/Button';

import logo from '../../assets/logo.svg';

const Login = () => {
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
      }
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {});
  };

  return (
    <div className='login' onSubmit={loginHandler}>
      <form className='login-form' action=''>
        <img src={logo} alt='Instagram logo' />
        <div>
          <input type='email' placeholder='email' />
        </div>
        <div>
          <input type='password' placeholder='password' />
        </div>
        <Button>Login</Button>
      </form>
    </div>
  );
};

export default Login;
