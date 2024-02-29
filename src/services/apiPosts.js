import axios from "axios";
import { BASE_URL } from "../utils/constants";

export async function getPosts() {
  const response = await axios.get(`${BASE_URL}/posts`);
  return response.data;
}

export async function getPost(postId) {
  const response = await axios.get(`${BASE_URL}/posts/${postId}`);
  return response.data;
}

export async function getUserPosts(username) {
  const response = await axios.get(`${BASE_URL}/${username}/posts`);
  return response.data;
}

export async function createPost(post) {
  const formData = new FormData();
  formData.append("image", post.image);
  formData.append("caption", post.content);

  const response = await axios.post(`${BASE_URL}/posts`, formData);
  return response.data;
}

export async function deletePost(postId) {
  const response = await axios.delete(`${BASE_URL}/posts/${postId}`);
  return response.data;
}

export async function likePost(postId) {
  const response = await axios.post(`${BASE_URL}/posts/${postId}/like`);
  return response.data;
}

export async function unlikePost(postId) {
  const response = await axios.delete(`${BASE_URL}/posts/${postId}/like`);
  return response.data;
}

export async function postComment(data) {
  const response = await axios.post(
    `${BASE_URL}/posts/${data.post_id}/comments`,
    { content: data.content },
  );
  return response.data;
}
