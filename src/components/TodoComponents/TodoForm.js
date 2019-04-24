import React from "react";
import "./Todo.css";

const TodoForm = function(props) {
  return (
    <div className="TodoForm">
      <input placeholder="add a task" name="task" type="text" onChange={props.newTask} value ={props.task}/>
      <button onClick={props.addTodo}>Add Todo</button>
      <button onClick={props.clearInput}>Clear Completed </button>
    </div>
  );
};

export default TodoForm;
