import { Models } from "@rematch/core";
import { auth } from "./auth";
import { todos } from "./todos";

export interface RootModel extends Models<RootModel> {
  auth: typeof auth;
  todos: typeof todos;
}

export const models: RootModel = {
  auth,
  todos,
};
