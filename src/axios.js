import axios from 'axios';
import Cookies from 'js-cookie';
import { authFail } from './redux/actions/auth';
import store from './redux';
import { history } from './index';

axios.defaults.baseURL = 'http://localhost:3000/api/v1'
// axios.defaults.baseURL =
//   'https://rustam-social-media-rails-app.herokuapp.com/api/v1';

axios.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token');

    if (!token) {
      store.dispatch(authFail());
      history.push('/login');
      return;
    }

    // res.headers.authorization.slice(7)

    config.headers.Authorization = token;
    config.headers['Content-Type'] = 'application/json';

    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      history.push('/login');
    } else {
      return Promise.reject(error);
    }
  }
);

export default axios;

export const baseAxios = axios.create();
