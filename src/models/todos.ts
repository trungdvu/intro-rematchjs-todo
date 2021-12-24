import { createModel } from "@rematch/core";
import { RootModel } from ".";

export const todos = createModel<RootModel>()({
  state: [],
  effects: (dispatch) => ({
    async addTodo(payload: string, state) {
      console.log();
    },
  }),
});
