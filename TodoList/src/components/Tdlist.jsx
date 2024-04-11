import { TdForm } from "./TdForm";
import { useState } from "react" 
import { Task } from "./task";

export const TdList = () =>{
    const [tasks,setTasks]=useState([])
    const addTask = task => {
        setTasks([...tasks,task])
        console.log(tasks)
    }
    
    const completeTask = indexC =>{
        setTasks(prevTasks => prevTasks.map((newTask,index)=>
    index===indexC ? {...newTask, completed: !newTask.completed} : newTask))
    }

    const deleteTask = (indexD) =>{
        setTasks(prevTasks => prevTasks.filter((_,index)=>index !== indexD));

    }

    const deleteAll = () =>{
        setTasks([]);
    }

    const showActive = () =>{
        setTasks(prevTasks => prevTasks.filter((newTask,)=>newTask.completed===false))
     }

     const showComplete = () =>{
        setTasks(prevTasks => prevTasks.filter((newTask,)=>newTask.completed===true))
     }
     
    return <>
    <div className="list">
        <TdForm addTask={addTask} />
        {tasks.map((task, index) => {
           return <Task newTask={task} key={index} onDelete={() => deleteTask(index)} toggleComplete={() => completeTask(index)} />
        })}
    </div>
    <div>
        <button className="btn" onClick={deleteAll}>Delete all</button>
        <button className="btn" onClick={showActive}>Active</button>
        <button className="btn" onClick={showComplete}>Completed</button>

    </div>
    </>
}