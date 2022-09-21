import axios from '../axios';

const followsApi = {
  async getFollowings(id) {
    const res = await axios.get(`/users/${id}/following`);
    return res.data;
  },

  async getFollowers(id) {
    const res = await axios.get(`/users/${id}/followers`);
    return res.data;
  },

  async followUser(id) {
    try {
      return await axios.post(`/users/${id}/follow`);
    } catch (e) {
      return e.response;
    }
  },
  async unfollowUser(id) {
    try {
      return await axios.delete(`/users/${id}/unfollow`);
    } catch (e) {
      return e.response;
    }
  },
};

export default followsApi;