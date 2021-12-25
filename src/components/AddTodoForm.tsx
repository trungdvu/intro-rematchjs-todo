import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../helpers/selectors";
import { Dispatch } from "../store";

const AddTodoForm = () => {
  const [todo, setTodo] = React.useState("");
  const dispatch = useDispatch<Dispatch>();
  const auth = useSelector(authSelector);

  const handleAdd = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTodo("");
    dispatch.todos.addTodoAsync(todo);
  };

  return (
    <section className="text-left p-6 my-5 w-[34rem] text-lg shadow-lg bg-white-bg border border-white-brd">
      <form onSubmit={handleAdd} className="flex items-center w-full gap-2">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="What needs to be done?"
          className="w-full outline-none input-primary"
        />

        <input
          disabled={!auth.currentUser || !todo}
          value={"Add"}
          type="submit"
          className="btn-secondary disabled:opacity-30"
        />
      </form>
      {!auth.currentUser && (
        <p className="text-xs text-red-500">*Sign in to add todos</p>
      )}
    </section>
  );
};

export default AddTodoForm;
