import axios from '../axios';

const commentsApi = {
  async getComments(id) {
    try {
      return await axios.get(`/posts/${id}/comments`);
    } catch (e) {
      return e.response;
    }
  },
  async createComment(postId, content) {
    try {
      return await axios.post(`/posts/${postId}/comments`, { content });
    } catch (e) {
      return e.response;
    }
  },
  async deleteComment(postId, commentId) {
    try {
      return await axios.delete(`/posts/${postId}/comments/${commentId}`);
    } catch (e) {
      return e.response;
    }
  },
  async editComment(postId, commentId, content) {
    try {
      return await axios.put(`/posts/${postId}/comments/${commentId}`, {
        content,
      });
    } catch (e) {
      return e.response;
    }
  },
};

export default commentsApi;
