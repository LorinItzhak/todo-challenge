import { useState } from "react";
import './List.css';
import { NewTask } from "../NewTask/NewTask";
import { Setting } from "../Setting/Setting";

export const List = () =>{
    const [task, setTask] = useState([
        {checkBoxStatus: true, text:'Clean the house', id: '1'},
        {checkBoxStatus: false, text:'Shave the bear face', id: '2'}
    ]);

    const [idCounter, setIdCounter] = useState(task.length); 

    const addTask = (newTask) => {
        const updatedTask = [...task, { ...newTask, id: idCounter.toString() }];
        setTask(updatedTask);
        setIdCounter(prevId => prevId + 1); 
    };

    const deleteTask = () => {
        setIdCounter(prevId => prevId - 1);
        const updatedTask = task.filter(item => !item.checkBoxStatus);
        setTask(updatedTask);
    };

    const handleCheckboxChange = (id) => {
        const updatedTask = task.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    checkBoxStatus: item.checkBoxStatus === true ? false : true
                };
            }
            return item;
        });
        setTask(updatedTask);
    };

    console.log('the counter in the list is',idCounter);
    return (
        <>
        <NewTask onAddTask={addTask} />
        <div className="toDoList">
            {task.map((oneTask) => (
                <div className="list-preview" key={oneTask.id}>
                    <input
                        type="checkbox"
                        checked={oneTask.checkBoxStatus === true}
                        onChange={() => handleCheckboxChange(oneTask.id)}
                    />
                    <p>{oneTask.text}</p>
                    <hr/>
                </div>
            ))}
        </div>
        <Setting idCounter={idCounter} onDeleteTask={deleteTask} task={task} />
        </>
    );
};