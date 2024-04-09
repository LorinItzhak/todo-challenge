import React, { useState } from 'react';

export const CreateToDo = ({ addTodo }) => {
    const [todoText, setTodoText] = useState('');

    const handleChange = (e) => {
        setTodoText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todoText.trim() !== '') {
            addTodo(todoText);
            setTodoText('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={todoText} 
                placeholder="Create a new todo..." 
                onChange={handleChange} 
                className='create'
            />
        </form>
    );
}