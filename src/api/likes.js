import axios from '../axios';

const likesApi = {
  async likePost(id) {
    try {
      return await axios.post(`/posts/${id}/like`);
    } catch (e) {
      return e.response;
    }
  },
  async unlikePost(id) {
    try {
      return await axios.delete(`/posts/${id}/like`);
    } catch (e) {
      return e.response;
    }
  },
};

export default likesApi;
