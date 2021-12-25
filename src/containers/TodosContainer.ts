import { connect } from "react-redux";
import Todos from "../components/Todos";
import { RootState, store } from "../store";

const mapState = (state: RootState) => ({
  todos: state.todos,
  activeTodos: store.select.todos.activeTodos(store.getState()),
  completedTodos: store.select.todos.completedTodos(store.getState()),
});

type StateProps = ReturnType<typeof mapState>;

export type TodosProps = StateProps;

export const TodosContainer = connect(mapState)(Todos);
