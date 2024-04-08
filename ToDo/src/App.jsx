// App.jsx
import React, { useState } from 'react';
import './App.css';
import { CreateToDo } from './components/CreateToDo';
import { List } from './components/List';
import CrossButton from './components/CrossButton';
import CheckButton from './components/CheckButton';

const App = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todoText) => {
        setTodos([...todos, { text: todoText, completed: false }]);
    };

    const handleToggle = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    return (
        <>
          <h1>T O D O</h1>
          <CrossButton/>
          <CheckButton/>
          <CreateToDo addTodo={addTodo} />
          <List todos={todos} handleToggle={handleToggle} />
        </>
    );
}

export default App;
