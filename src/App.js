import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'

const todo= [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
//Add a constructor 

constructor (){
super();
this.state ={
  todo,
  task: "",
  id: "",
  completed: ""
}

}

databinder = event => {
  this.setState({ [event.target.name]: event.target.value });
};

addItem = event => {
  event.preventDefault();

  this.setState(e => {
    return {
      todo: [
        ...e.todo,
        {
          completed: false,
          id: Date.now(),
          task: e.task
        }
      ],
      task: ""
    };
  });
};



  render() {
    return ( <div>

<TodoForm task={this.state.task}
          addTodo ={this.addItem}
          newTask={this.databinder}
          databinder={this.databinder}
/>

{this.state.todo.map(e => (
            <TodoList newList={e}  />
          ))}
           
    </div> );
           
         
    
  
  }
}

export default App;
