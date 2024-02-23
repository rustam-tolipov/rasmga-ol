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

export async function getSuggestions() {
  const response = await axios.get(`${BASE_URL}/suggestions`);
  return response.data;
}

export async function editProfile(profile) {
  const response = await axios.put(`${BASE_URL}/auth/edit`, profile);
  return response.data;
}
