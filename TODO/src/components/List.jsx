import React from "react";
import { useState } from "react";
import { Items } from "./Items";

export function List ({todos, toggleComplete, deleteTodo}){

  return(
    <div className="todo-list">
      {
        todos.map((todo)=>(
        <Items 
        key={todo.id}
        todo={todo}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
         />
         ))}

    </div>
  );

}

export default List;

