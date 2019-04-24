// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import "./Todo.css";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = function(props) {
  return (
    <div className="TodoList">
      <div>
        <Todo newList={props.newList} />
      </div>
    </div>
  );
};

export default TodoList;
