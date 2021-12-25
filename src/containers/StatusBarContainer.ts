import { connect } from "react-redux";
import StatusBar from "../components/StatusBar";
import { Dispatch, RootState, store } from "../store";

const mapState = (state: RootState) => ({
  todos: state.todos,
  leftTodos: store.select.todos.remainedTodos(store.getState()),
});

const mapDispatch = (dispatch: Dispatch) => ({
  clearCompleted: dispatch.todos.clearCompleted,
});

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = ReturnType<typeof mapDispatch>;

export type Display = "all" | "active" | "completed";
export type StatusBarProps = StateProps &
  DispatchProps & {
    display: Display;
    setDisplay: React.Dispatch<React.SetStateAction<Display>>;
  };

export const StatusBarContainer = connect(mapState, mapDispatch)(StatusBar);
