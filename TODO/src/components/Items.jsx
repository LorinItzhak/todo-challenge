import React from "react";
import { useState } from "react";

 export function Items({todo, toggleComplete, deleteTodo}){
return(
<div className="todo-item">
<input 
    type="checkbox"
    checked={todo.completed}
    onChange={()=> toggleComplete(todo.id)}
    />

<span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
{/* <button onClick={()=> deleteTodo(todo.id)} className="delete-button">delete</button> */}

</div>

);
    }

    export default Items;


    
     

