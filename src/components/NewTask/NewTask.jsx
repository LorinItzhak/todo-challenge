import { useState } from "react";

export const NewTask = ({ onAddTask }) => {
    const [task, setTask] = useState({ checkBoxStatus: false, text: '' });

    const handleCheckboxChange = (event) => {
        setTask(prevState => ({ ...prevState, checkBoxStatus: event.target.checked }));
    };

    const handleTextChange = (event) => {
        setTask(prevState => ({ ...prevState, text: event.target.value }));
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleAddTask();
        }
    };

    const handleAddTask = () => {
        onAddTask(task);
        setTask({ checkBoxStatus: false, text: '' });
    };

    return (
        <div className="add_div">
            <input 
                type="checkbox" 
                checked={task.checkBoxStatus} 
                onChange={handleCheckboxChange} 
            />
            <input 
                type="text" 
                value={task.text} 
                onChange={handleTextChange} 
                onKeyPress={handleKeyPress}
            />
        </div>
    );
};
