// List.jsx
import React from 'react';
import './List.css'; 

export const List = ({ todos, handleToggle }) => {
    return (
        <ul className="todo-list"> 
            {todos.map((todo, index) => (
                <li key={index}>
                    <input 
                        type="checkbox" 
                        checked={todo.completed} 
                        onChange={() => handleToggle(index)}
                    />
                    <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.text}
                    </span>
                </li>
            ))}
        </ul>
    );
}
