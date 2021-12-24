import axios from "axios";
import { AuthResponse, User } from "../helpers/types";

const API_BASE = "https://api-nodejs-todolist.herokuapp.com/user/";

export async function signUp({
  email,
  password,
}: User): Promise<AuthResponse | string> {
  return axios
    .post(`${API_BASE}register`, {
      email,
      password,
      name: email,
    })
    .then((res) => {
      if (res.data.token) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }
      return res.data;
    })
    .catch((error) => {
      return error.response.data;
    });
}

export async function signIn({
  email,
  password,
}: User): Promise<AuthResponse | string> {
  return axios
    .post(`${API_BASE}login`, { email, password })
    .then((res) => {
      if (res.data.token) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }
      return res.data;
    })
    .catch((error) => {
      return error.response.data;
    });
}

export function signOut() {
  localStorage.removeItem("user");
}
