import classNames from "classnames";
import * as React from "react";
import { Display, StatusBarProps } from "../containers/StatusBarContainer";

const StatusBar: React.FC<StatusBarProps> = (props) => {
  const handleClearCompleted = () => {
    props.clearCompleted(props.todos);
  };

  // CSS
  const displayButtonClasses = (type: Display) =>
    classNames(
      "px-2 py-1 border transition-all duration-150 rounded-md hover:bg-black hover:bg-opacity-5 active:bg-opacity-10",
      {
        "border-transparent": props.display !== type,
        "border-blue-secondary": props.display === type,
      }
    );

  const leftTodosFormat = () => {
    if (props.leftTodos > 1) {
      return `${props.leftTodos} todos left`;
    }
    return `${props.leftTodos} todo left`;
  };

  return (
    <div className="flex flex-col items-center text-white">
      <div className="flex items-center justify-between w-full px-6 py-2 border-b bg-blue-primary border-blue-secondary">
        <p className="min-w-[100px] text-left">{leftTodosFormat()}</p>
        <ul
          className={classNames("flex items-center gap-1", {
            hidden: props.todos.length === 0,
          })}
        >
          <button
            onClick={() => props.setDisplay("all")}
            className={displayButtonClasses("all")}
          >
            All
          </button>
          <button
            onClick={() => props.setDisplay("active")}
            className={displayButtonClasses("active")}
          >
            Active
          </button>
          <button
            onClick={() => props.setDisplay("completed")}
            className={displayButtonClasses("completed")}
          >
            Completed
          </button>
        </ul>
        <button
          onClick={handleClearCompleted}
          className={classNames("hover:underline", {
            hidden: props.todos.length === 0,
          })}
        >
          Clear completed
        </button>
      </div>
      <div className="w-[calc(100%-6px)] h-1 bg-blue-primary border-b border-blue-secondary"></div>
      <div className="w-[calc(100%-10px)] h-1 bg-blue-primary border-b border-blue-secondary"></div>
      <div className="w-[calc(100%-14px)] h-1 bg-blue-primary border-b border-blue-secondary"></div>
    </div>
  );
};

export default StatusBar;
