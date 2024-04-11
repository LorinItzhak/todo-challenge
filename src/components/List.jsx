import { useState } from "react";
import Input from "./Input";
import Todo from "./Todo";
export const List  =  ()=>{
    const [todos,setTodos] = useState({list : []});
    return <>
   <div className="list-todos">
     <Input todos={todos} setNewTodo={setTodos}></Input>
        {todos.list.map(todo => <Todo value={todo}/>)}
      <div className="list-bottom">{todos.list.length} items left
        <div className="filter-options">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
        </div>
        <button>Clear completed</button>
        </div>
     </div>
    </>
}
export default List;