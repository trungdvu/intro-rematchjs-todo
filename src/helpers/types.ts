export interface User {
  _id?: string;
  email: string;
  password: string;
  name?: string;
  age?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface Todo {
  _id: string;
  description: string;
  completed: boolean;
  owner?: string;
  createdAt?: string;
  updatedAt?: string;
}

export type AuthResponse = {
  token: string;
  user: User;
};
