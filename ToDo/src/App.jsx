// App.jsx      <img src={backgroundImage} id='background-img-light'/>
import React, { useState } from 'react';
import './App.css';
import './light.css';
import './dark.css';
import { CreateToDo } from './components/CreateToDo';
import { List } from './components/List';
import CrossButton from './components/CrossButton';
import CheckButton from './components/CheckButton';
import backgroundImage from '../../images/bg-desktop-light.jpg';
import sun from '../../images/icon-sun.svg'
import moon from '../../images/icon-moon.svg'

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
        <div className='app-container'>
            <div className='head'>
                <h1>T O D O</h1> 
                <button className='dark-light'></button>
            </div>
          
          <CreateToDo addTodo={addTodo} className="create" />
          <List todos={todos} handleToggle={handleToggle} />
        </div>
    );
}

export default App;
