import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTodoForm from "../components/AddTodoForm";
import Layout from "../components/Layout";
import SkeletonHomePage from "../components/SkeletonHomePage";
import { TodosContainer } from "../containers/TodosContainer";
import { loadingSelector } from "../helpers/selectors";
import { Dispatch } from "../store";

const HomePage: React.FC = () => {
  const dispatch = useDispatch<Dispatch>();
  const loading = useSelector(loadingSelector);

  React.useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth) {
      dispatch.auth.setUser(JSON.parse(auth).user);
      dispatch.todos.setTodosAsync();
    }
  }, [dispatch.auth, dispatch.todos]);

  if (loading.effects.todos.setTodosAsync) {
    return (
      <Layout>
        <SkeletonHomePage />
      </Layout>
    );
  }

  return (
    <Layout>
      <h1 className="mt-[2%] text-7xl font-thin">
        My <span className="text-blue-primary">todos</span>
      </h1>

      <div className="w-[34rem]">
        <AddTodoForm />
        <TodosContainer />
      </div>
    </Layout>
  );
};

export default HomePage;
