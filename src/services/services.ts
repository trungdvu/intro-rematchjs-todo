import axios from "axios";
import { AuthResponse, Todo, User } from "../helpers/types";
import { authHeader } from "./auth-header";

const API_BASE = "https://api-nodejs-todolist.herokuapp.com/";

export async function signUp({
  email,
  password,
}: User): Promise<AuthResponse | string> {
  return axios
    .post(`${API_BASE}user/register`, {
      email,
      password,
      name: email,
    })
    .then((res) => {
      if (res.data.token) {
        localStorage.setItem("auth", JSON.stringify(res.data));
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
    .post(`${API_BASE}user/login`, { email, password })
    .then((res) => {
      if (res.data.token) {
        localStorage.setItem("auth", JSON.stringify(res.data));
      }
      return res.data;
    })
    .catch((error) => error.response.data);
}

export function signOut() {
  localStorage.removeItem("auth");
}

export async function addTodo(todo: string) {
  const data = {
    description: todo,
  };
  const config = {
    headers: {
      ...authHeader(),
    },
  };

  return axios
    .post(`${API_BASE}task`, data, config)
    .then((res) => res.data.data)
    .catch((error) => console.log(error));
}

export async function getTodos() {
  const config = {
    headers: {
      ...authHeader(),
    },
  };

  return axios
    .get(`${API_BASE}task`, config)
    .then((res) => res.data.data)
    .catch((error) => console.log(error));
}

export async function deleteTodo(_id: string) {
  const config = {
    headers: {
      ...authHeader(),
    },
  };

  return axios
    .delete(`${API_BASE}task/${_id}`, config)
    .then((res) => res.data.success)
    .catch((error) => console.log(error));
}

export async function updateTodo(todo: Todo) {
  const config = {
    headers: {
      ...authHeader(),
    },
  };
  const data = {
    completed: !todo.completed,
  };

  return axios
    .put(`${API_BASE}task/${todo._id}`, data, config)
    .then((res) => res.data.data)
    .catch((error) => console.log(error));
}
