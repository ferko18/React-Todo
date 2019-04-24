import React from 'react'
import './Todo.css'
const TodoForm = function ()
{
    return (
        <div className='TodoForm'>
           
           <input placeholder="add a todo list" name='todo'></input>
            <button>Add Todo</button>   
            <button>Clear Completed </button> 

        </div>
    );

}

export default TodoForm;