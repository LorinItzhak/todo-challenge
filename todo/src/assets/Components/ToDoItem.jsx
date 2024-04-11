const ToDoItem = ({task, onDeleteTask, onMoveTaskUp, onMoveTaskDown}) => {
    return (
        <li>
            <input type="checkbox" />
            <span className="text"> {task}</span>
            <button
                className="delete-button"
                onClick={onDeleteTask}
            >Delete
            </button>

            <button
                className="move-button"
                onClick={onMoveTaskUp}
            >Up

            </button>

            <button
                className="move-button"
                onClick={onMoveTaskDown}
            >Down

            </button>
        </li>
    )

}

export default ToDoItem