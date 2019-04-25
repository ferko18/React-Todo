import React from "react";
import "./Todo.css";

const Todo = function(props) {
  var completed = props.newList.completed ? "completed" : "";
  return (
    <div className={`Todo-${completed}`} key={props.id} onClick={event => {
        props.toggleTodo(props.newList.id);
      }}>
      <p> {props.newList.task}</p>
    </div>
  );
};

export default Todo;
