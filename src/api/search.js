import axios from '../axios';

const searchApi = {
  async search(username) {
    try {
      return await axios.get(`/search?username=${username}`);
    } catch (e) {
      return e.response;
    }
  },
};

export default searchApi;