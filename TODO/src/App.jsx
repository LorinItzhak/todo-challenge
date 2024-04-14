import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { List } from './components/List'
import { Items } from './components/Items'
import { FilterButtons } from './components/FilterButtons'
import { TodoFrom } from './components/TodoForm'
import './App.css'


function App () {
   
   const [todos, setTodos] = useState([]);

   const addTodo= (text)=> {
    const newTodos = [...todos, { id: Date.now(), text, completed: false }];

  
    setTodos(newTodos);

   };

   const toggleComplete=(id)=>{
    const updateTodos = todos.map((todo)=>
    todo.id === id ? {...todo,completed : !todo.completed}: todo
    );

    setTodos(updateTodos);
   };


    const deleteTodo= (id)=> {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos)

    };

   return(
    <div className="App">
      <h1>TODO</h1>
      <TodoFrom className="todo-form" addTodo={addTodo}/>
      <List todos={todos}
      toggleComplete={toggleComplete}
      deleteTodo={deleteTodo}
      />
    </div>

   );

}

export default App






