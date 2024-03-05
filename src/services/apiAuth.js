import axios, { baseAxios } from "../features/authentication/axios";
import { BASE_URL } from "../utils/constants";
import Cookies from "js-cookie";

export async function signup(username, email, password, passwordConfirm) {
  const response = await baseAxios.post(`${BASE_URL}/auth/signup`, {
    user: {
      username,
      email,
      password,
      passwordConfirm,
    },
  });

  const authCredentials = {
    token: response.headers.authorization,
    data: response.data,
  };

  localStorage.setItem("auth-token", JSON.stringify(authCredentials));
  Cookies.set("token", authCredentials.token);

  return response.data;
}

export async function login(username, email, password) {
  const response = await baseAxios.post(`${BASE_URL}/auth/login`, {
    user: {
      username,
      email,
      password,
    },
  });

  const authCredentials = {
    token: response.headers.authorization,
    data: response.data,
  };

  localStorage.setItem("auth-token", JSON.stringify(authCredentials));
  Cookies.set("token", authCredentials.token);

  return response.data;
}

export async function logout() {
  const response = await axios.delete(`${BASE_URL}/auth/logout`);

  if (response.status !== 200) {
    throw new Error("Failed to logout");
  }
}

export async function getCurrentUser() {
  const response = await axios.get(`${BASE_URL}/auth/me`);

  if (response.status === 200) {
    return response.data;
  }

  if (response.status === 401) {
    localStorage.removeItem("auth-token");
    Cookies.remove("token");
  }

  return null;
}
