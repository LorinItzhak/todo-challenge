import React, { useState } from "react";
import ToDoItem from "./ToDoItem"
import AddItem from "./AddItem";


function ToDoList() {
    const [tasks, setTasks] = useState([]);




    function addTask(task) {

        if (task.trim() != "") {
            setTasks(t => [...t, task]);
        }

    }

    function deleteTask(index) {
        const updateTasks = tasks.filter((_, i) => i !== index);
        setTasks(updateTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className="to-do-list">
            <h1>TODO <img className="icon-mode" src="../public/images/icon-moon.svg" alt="Mode Icon" /> </h1>

            <AddItem addTask={addTask} />


            <ol>
                {tasks.map((task, index) => <ToDoItem task={task} onDeleteTask={() => deleteTask(index)}
                    onMoveTaskUp={() => moveTaskUp(index)} onMoveTaskDown={() => moveTaskDown(index)}
                ></ToDoItem>

                )}
            </ol>
        </div>);
}




export default ToDoList