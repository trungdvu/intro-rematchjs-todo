import { Models } from "@rematch/core";
import { auth } from "./auth";
import { todos } from "./todos";

export interface RootModel extends Models<RootModel> {
  auth: typeof auth;
}

export const models: RootModel = {
  auth,
  todos,
};
