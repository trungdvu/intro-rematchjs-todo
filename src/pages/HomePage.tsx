import * as React from "react";
import { useDispatch } from "react-redux";
import AddTodoForm from "../components/AddTodoForm";
import Nav from "../components/Nav";
import { TodosContainer } from "../containers/TodosContainer";
import { Dispatch } from "../store";

const HomePage: React.FC = () => {
  const dispatch = useDispatch<Dispatch>();

  React.useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth) {
      dispatch.auth.setUser(JSON.parse(auth).user);
      dispatch.todos.setTodosAsync();
    }
  }, [dispatch.auth, dispatch.todos]);

  return (
    <div className="flex flex-col items-center min-h-screen">
      <Nav />
      <h1 className="mt-[2%] text-7xl font-thin">
        My <span className="text-blue-primary">todos</span>
      </h1>
      <div className="w-[34rem]">
        <AddTodoForm />
        <TodosContainer />
      </div>
    </div>
  );
};

export default HomePage;
