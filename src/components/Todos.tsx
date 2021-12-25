import * as React from "react";
import { useSelector } from "react-redux";
import { Display, StatusBarContainer } from "../containers/StatusBarContainer";
import { TodosProps } from "../containers/TodosContainer";
import { loadingSelector } from "../helpers/selectors";
import LoadingSpin from "./LoadingSpin";
import Todo from "./Todo";

const Todos: React.FC<TodosProps> = (props) => {
  const [display, setDisplay] = React.useState<Display>("all");
  const [realTodosToDisplay, setRealTodosToDisplay] = React.useState(
    props.todos
  );
  const loading = useSelector(loadingSelector);

  React.useEffect(() => {
    if (display === "all") {
      setRealTodosToDisplay(props.todos);
    } else if (display === "active") {
      setRealTodosToDisplay(props.activeTodos);
    } else {
      setRealTodosToDisplay(props.completedTodos);
    }
  }, [display, props.activeTodos, props.completedTodos, props.todos]);

  return (
    <>
      <ul className="flex flex-col items-center bg-blue-primary">
        {loading.effects.todos.addTodoAsync && (
          <span className="mt-6">
            <LoadingSpin />
          </span>
        )}
        {realTodosToDisplay.map((todo) => (
          <Todo key={todo._id} todo={todo} />
        ))}
      </ul>
      <StatusBarContainer display={display} setDisplay={setDisplay} />
    </>
  );
};

export default Todos;
