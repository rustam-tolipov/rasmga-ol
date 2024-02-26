const BASE_URL = "http://localhost:3000/api/v1";

import axios from "axios";

export async function getHighlights() {
  const response = await axios.get(`${BASE_URL}/highlights`);
  return response.data;
}

export async function getMe() {
  const response = await axios.get(`${BASE_URL}/auth/me`);
  return response.data;
}

export async function getUser(username) {
  const response = await axios.get(`${BASE_URL}/users/show/${username}`);
  return response.data;
}

export async function getSuggestions() {
  const response = await axios.get(`${BASE_URL}/suggestions`);
  return response.data;
}

export async function editProfile(profile) {
  const formData = new FormData();
  formData.append("avatar", profile.avatar);
  formData.append("username", profile.username);
  formData.append("bio", profile.bio);
  formData.append("first_name", profile.first_name);
  formData.append("last_name", profile.last_name);
  formData.append("id", profile.id);

  const response = await axios.put(`${BASE_URL}/auth/edit`, formData);
  return response.data;
}

export async function getFollowers(id) {
  const response = await axios.get(`${BASE_URL}/users/${id}/followers`);
  return response.data;
}

export async function getFollowings(id) {
  const response = await axios.get(`${BASE_URL}/users/${id}/followings`);
  return response.data;
}

export async function followUser(id) {
  const response = await axios.post(`${BASE_URL}/users/${id}/follow`);
  return response.data;
}

export async function unfollowUser(id) {
  const response = await axios.delete(`${BASE_URL}/users/${id}/unfollow`);
  return response.data;
}
