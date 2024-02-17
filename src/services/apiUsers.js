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
