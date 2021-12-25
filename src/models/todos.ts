import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { Todo } from "../helpers/types";
import {
  addTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../services/services";

export const todos = createModel<RootModel>()({
  name: "todos",
  state: [] as Array<Todo>,
  selectors: (slice) => ({
    remainedTodos() {
      return slice((todos) =>
        todos.reduce((acc, t) => {
          if (!t.completed) acc += 1;
          return acc;
        }, 0)
      );
    },
    activeTodos() {
      return slice((todos) => todos.filter((t) => !t.completed));
    },
    completedTodos() {
      return slice((todos) => todos.filter((t) => t.completed));
    },
  }),
  reducers: {
    addTodo: (state, payload: Todo) => [payload, ...state],
    setTodos: (_, payload: Array<Todo>) => payload,
    deleteTodo: (state, payload: string) =>
      state.filter((todo) => todo._id !== payload),
    toggleTodo: (state, payload: string) =>
      state.map((todo) =>
        todo._id === payload ? { ...todo, completed: !todo.completed } : todo
      ),
  },
  effects: (dispatch) => ({
    async addTodoAsync(payload: string) {
      const todo = await addTodo(payload);
      this.addTodo(todo);
    },
    async setTodosAsync() {
      const todos = await getTodos();
      this.setTodos(todos);
    },
    async deleteTodoAsync(payload: string) {
      const success = await deleteTodo(payload);
      if (success) {
        this.deleteTodo(payload);
      }
    },
    async toggleTodoAsync(payload: Todo) {
      this.toggleTodo(payload._id);
      const todo = await updateTodo(payload);
      if (!todo) {
        this.toggleTodo(payload._id);
      }
    },
    clearCompleted(payload: Array<Todo>) {
      payload.forEach(async (todo) => {
        if (todo.completed) {
          const success = await deleteTodo(todo._id);
          success && this.deleteTodo(todo._id);
        }
      });
    },
  }),
});
