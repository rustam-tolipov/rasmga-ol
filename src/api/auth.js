import axios, { baseAxios } from '../axios';

const authApi = {
  async signup(data) {
    try {
      return await baseAxios.post('/auth/signup', data);
    } catch (e) {
      return e.response;
    }
  },

  async login(data) {
    try {
      return await baseAxios.post('/auth/login', data);
    } catch (e) {
      return e.response;
    }
  },

  async getUserData() {
    try {
      return await axios.get('/auth/me');
    } catch (e) {
      return e.response;
    }
  },

  async logout() {
    try {
      return await axios.delete('/auth/logout');
    } catch (e) {
      return e.response;
    }
  },

  async emailConfirmation(token) {
    try {
      return await baseAxios.get(
        `/auth/confirmation?confirmation_token=${token}`
      );
    } catch (e) {
      return e.response;
    }
  },
};

export default authApi;
