import React from 'react'
import "./Todo.css";

const Todo = function (props)
{
    return (
        <div className='Todo'>
           
           <p> {props.newList.task}</p>

        </div>
    );

}

export default Todo;