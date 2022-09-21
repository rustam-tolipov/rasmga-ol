import axios from '../axios';

const usersApi = {
  async getUser(id) {
    try {
      return await axios.get(`/users/${id}`);
    } catch (e) {
      return e.response;
    }
  },
  async getUserPosts(id) {
    try {
      return await axios.get(`/users/${id}/posts`);
    } catch (e) {
      return e.response;
    }
  },
  async updateUser(id, data) {
    try {
      return await axios.put(`/auth/users/${id}`, data);
    } catch (e) {
      return e.response;
    }
  },
  async findByUsername(username) {
    try {
      return await axios.get(`/users/show/${username}`);
    } catch (e) {
      return e.response;
    }
  },
  async suggestedUsers() {
    try {
      return await axios.get('/suggestions');
    } catch (e) {
      return e.response;
    }
  }
};

export default usersApi;
