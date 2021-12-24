import * as React from "react";
import { useSelector } from "react-redux";
import Nav from "../components/Nav";
import Todo from "../components/Todo";
import { authSelector } from "../helpers/selectors";

const HomePage: React.FC = () => {
  const [todo, setTodo] = React.useState("");

  const auth = useSelector(authSelector);

  console.log(auth);
  const handleAdd = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTodo("");
    console.log(todo);
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <Nav />
      <h1 className="mt-[2%] text-7xl font-thin">
        My <span className="text-blue-primary">todos</span>
      </h1>
      <section className="text-left p-6 mt-5 w-[34rem] text-lg shadow-lg bg-white-bg border border-white-brd rounded-md">
        <form onSubmit={handleAdd} className="flex items-center w-full gap-2">
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            type="text"
            placeholder="What needs to be done?"
            className="w-full outline-none input-primary"
          />

          <input
            disabled={!auth.currentUser}
            value={"Add"}
            type="submit"
            className="btn-secondary disabled:opacity-50"
          />
        </form>
        {!auth.currentUser && (
          <p className="text-xs text-red-500">*Sign in to add todos</p>
        )}
      </section>
      <Todo />
    </div>
  );
};

export default HomePage;
