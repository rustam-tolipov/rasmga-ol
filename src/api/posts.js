import axios from '../axios';

const postsApi = {
  async getPosts() {
    try {
      return await axios.get('/posts');
    } catch (e) {
      return e.response;
    }
  },
  async getPost(id) {
    try {
      return await axios.get(`/posts/${id}`);
    } catch (e) {
      return e.response;
    }
  },
  async createPost(data) {
    try {
      return await axios.post('/posts', data);
    } catch (e) {
      return e.response;
    }
  },
  async updatePost(id, data) {
    try {
      return await axios.put(`/posts/${id}`, data);
    } catch (e) {
      return e.response;
    }
  },
  async deletePost(id) {
    try {
      return await axios.delete(`posts/${id}`);
    } catch (e) {
      return e.response;
    }
  },
};

export default postsApi;
