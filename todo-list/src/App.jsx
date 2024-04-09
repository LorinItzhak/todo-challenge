import { useState } from 'react';
import AddTodoForm from './components/AddTodoForm';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
    console.log(todos);
  };
  return (
    <>
      <h1>Todo</h1>
      <AddTodoForm addTodo={addTodo} />
    </>
  );
}

export default App;
