import { useState } from "react";

 export function TodoFrom({addTodo}){
    const [value, setValue] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        
        if(!value) return // לא מאשרים משימה ריקה
        addTodo(value);
        setValue('');   //מאפסים את הערך של הטקסט אינפוט לאחר שהמשימה נוספה

    };

        return(
            <form className="todo-form" onSubmit={handleSubmit}>

                <input
                type="text"
                className="todo-input"
                value={value}
                onChange={(e)=> setValue(e.target.value)}
                placeholder="Create a new todo"
                />

            <button type="submit" className="todo-button">add</button>    
  
            </form> 

            

        );

}

export default TodoFrom;
