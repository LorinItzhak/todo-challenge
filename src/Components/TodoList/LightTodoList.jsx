import { v4 as uuidv4 } from 'uuid';
import { useState } from "react"
import { LightTodo } from "../Todo/LightTodo"
import './LightTodoList.css'
import { DndProvider } from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

export const LightTodoList = () => {

    const [todos, setTodos] = useState(() => {
        const storedTodos = localStorage.getItem('todos');
        return storedTodos ? JSON.parse(storedTodos) : [];
    });

    const handleKeyDown = (e, todos, setTodos) => {
        if(e.key === 'Enter' && e.target.value.trim() !== '') {
            const newTodo = {
                id: uuidv4(),
                text: e.target.value.trim(),
                completed: false,
            };
            setTodos([...todos, newTodo]);
            localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
            e.target.value = '';
        }
    }
    
    const handleCheckToggle = (id) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    }

    let numOfItemsLeft = 0; 
    todos.forEach(todo => {
        if (todo && !todo.completed){
            numOfItemsLeft++;
        }
    });

    const handleClearCompleted = () => {
        setTodos(todos.filter(todo => !todo.completed));
        localStorage.setItem('todos', JSON.stringify(todos.filter(todo => !todo.completed)));
    }

    const handleFilter = (option) => {
        const storedTodos = localStorage.getItem('todos');
        let displayTodos = JSON.parse(storedTodos);
        switch(option) {
            case 'active':
                setTodos(displayTodos.filter(todo => !todo.completed));
                break;
            case 'completed':
                setTodos(displayTodos.filter(todo => todo.completed));
                break;
            default:
            setTodos(storedTodos ? JSON.parse(storedTodos) : []);
            break;
        }
    }

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    }

    const moveTodo = (dragIndex, hoverIndex) => {
        const updatedTodos = [...todos];
        const draggedTodo = updatedTodos[dragIndex];
    
        updatedTodos.splice(dragIndex, 1);
        updatedTodos.splice(hoverIndex, 0, draggedTodo);
    
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
    };

    return <>
        <div className="singleTodoLight createToDo">
            <div className="checkCircleLight"></div>
            <input className="createToDoInputLight" placeholder={"Create a new todo..."} onKeyDown={(e) => handleKeyDown(e, todos, setTodos)} />
        </div>
        <DndProvider backend={HTML5Backend}>
            <div className="todoListLight">
                {todos.map((todo, index) => (<LightTodo key={todo.id} todo={todo} handleCheckToggle={handleCheckToggle} deleteTodo={deleteTodo} index={index} moveTodo={moveTodo} />))}
            </div>
        </DndProvider>
        <div className="menuLight">
            <span className="numOfItemsLeft">{numOfItemsLeft} items left</span>
            <div className="filterOptions">
                <button onClick={() => handleFilter('all')}>All</button>
                &nbsp;
                <button onClick={() => handleFilter('active')}>Active</button>
                &nbsp;
                <button onClick={() => handleFilter('completed')}>Completed</button>
            </div>
            <button onClick={() => handleClearCompleted()}>Clear Completed</button>
        </div>
    </>
}