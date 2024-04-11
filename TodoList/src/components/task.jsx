import { CheckBox } from "./checkBox"
export const Task = ({newTask, onDelete, toggleComplete}) => {
    console.log(newTask);
    return <>
    <div className="task">
        <div className="right">
            <CheckBox className={newTask.completed ? "checkDone" : "check"} type="checkbox" onClick={toggleComplete} />
            <p id="Tcontent" className={newTask.completed ? "tComplete":"t"} >{newTask.text}</p>
        </div>
        <img className="delete" src="images/delete-icon.png" alt="" onClick={onDelete}></img>
    </div>
    </>
}