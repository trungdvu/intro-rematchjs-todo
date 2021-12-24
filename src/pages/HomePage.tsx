import * as React from "react";
import Nav from "../components/Nav";
import Todo from "../components/Todo";

const HomePage: React.FC = () => {
  return (
    <div className="flex items-center flex-col min-h-screen">
      <Nav />
      <h1 className="mt-[2%] text-7xl font-thin">
        My <span className="text-[#27abe2]">todos</span>
      </h1>
      <section className="text-left p-6 mt-5 w-[34rem] text-lg shadow-lg bg-[#f6f8fa] border border-[#d8dee4] rounded-md">
        <div className="w-full flex items-center gap-2">
          <input
            type="text"
            placeholder="What needs to be done?"
            className="input-primary w-full outline-none"
          />
          <button className="btn-secondary">Add</button>
        </div>
      </section>

      <Todo />
    </div>
  );
};

export default HomePage;
