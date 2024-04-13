import './TodoList.css'
import {Todo} from '../Todo/Todo'

import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from "react-dnd-html5-backend";



export const TodoList = () => {

    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : [];
    });
    

    const handleKeyDown = (e, todos, setTodos) => {
        if(e.key === 'Enter' && e.target.value.trim() !== '') {
            const newTodo = {
                id: uuidv4(),
                text: e.target.value.trim(),
                completed: false
            };
            setTodos([...todos, newTodo]);
            localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
            e.target.value = '';
        }
    }

    
    const checkToggle = (id) => {
        const updatedTodos = todos.map(todo => 
                (todo.id === id) ? {...todo, completed: !todo.completed} : todo
            );
            setTodos(updatedTodos);
            localStorage.setItem('todos', JSON.stringify(updatedTodos));
    }


    let numOfTodosLeft = 0;
    todos.forEach(todo => {
        if(todo && !todo.completed) {
            numOfTodosLeft++;
        }
    });


    // handle clear completed
    const clearCompleted = () => {
        setTodos((todos) => todos.filter(todo => !todo.completed));
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    }

    
    const handleFilter = (option) => {
        const savedTodos = localStorage.getItem("todos");
        let todos = savedTodos ? JSON.parse(savedTodos) : [];
        switch(option) {
            case 'active':
                setTodos(todos.filter(todo => !todo.completed));
                break;
            case 'completed':
                setTodos(todos.filter(todo => todo.completed));
                break;
            default:
                setTodos(todos);
        }
    }

    const handleDelete = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    }

    const moveTodo = (dragIndex, hoverIndex) => {
        const updatedTodos = [...todos];
        const dragTodo = updatedTodos[dragIndex];

        updatedTodos.splice(dragIndex, 1);
        updatedTodos.splice(hoverIndex, 0, dragTodo);

        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    }


    return <>
        <div className='createTodo'>
            <div className='checkCircle'></div>
            <input type='text' placeholder='Create a new todo...' onKeyDown={(e) => handleKeyDown(e, todos, setTodos)}/>
        </div>
        <DndProvider backend={HTML5Backend}>
            <div className='todoList'>
                {todos.map((todo, index) => (
                    <Todo 
                        key={todo.id} 
                        todo={todo} 
                        checkToggle={checkToggle} 
                        onDelete={handleDelete} 
                        index={index} 
                        moveTodo={moveTodo}
                    />
                ))}
            </div>
        </DndProvider>
        <div className='menu'>
            <span className='numOfTodosLeft'>{numOfTodosLeft} items left</span>
            <div className='filteredOptions'>
                <span onClick={() => handleFilter('all')}>All</span> &nbsp;
                <span onClick={() => handleFilter('active')}>Active</span> &nbsp;
                <span onClick={() => handleFilter('completed')}>Completed</span>
            </div>
            <button onClick={clearCompleted}>Clear Completed</button>
        </div>

    </>
};