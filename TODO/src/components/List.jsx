import React from "react";
import { useState } from "react";
import { Items } from "./Items";

export function List({ todos, toggleComplete, deleteTodo ,onShowComplited,onShowAll,onShowActive,todoLeft}) {
  return (
    <div className="todo-list">
      <div className="list-container">
      {todos.map((todo) => (
        <Items
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
      
        />
      ))}
      </div>
      <div className="button-container">
      <button className="todo-left"> {todoLeft} Items left</button>
      
      <button className="button-All" onClick={onShowAll}>
         All
         </button>
         <button className="button-Active" onClick={onShowActive}>
          Active
         </button>
         <button className="button-completed" onClick={onShowComplited}>
        complited
      </button>
         <button className="button-clear" onClick={() => deleteTodo(deleteTodo)}>
          ClearComplete
         </button>
         
         </div>
    </div>
  );
}

export default List;
