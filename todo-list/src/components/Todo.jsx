import CloseButton from 'react-bootstrap/CloseButton';
import PropTypes from 'prop-types';
import { useState } from 'react';
const Todo = ({ todo, removeTodo, toggleTodoCompleted }) => {
  const [isCompletedState, setIsCompletedState] = useState(todo.isCompleted);
  const handleRemoveClick = () => {
    removeTodo(todo.id);
  };
  const handleCheckboxClick = (e) => {
    const parantDiv = e.target.parentElement.parentElement;
    parantDiv.classList.toggle('completed');
    setIsCompletedState(!isCompletedState);
    toggleTodoCompleted(todo.id);
  };
  const todoItemStyle = {
    textDecoration: isCompletedState ? 'line-through' : 'none',
    color: isCompletedState ? 'gray' : 'inherit',
  };
  return (
    <div
      className="d-flex justify-content-between todo-item"
      style={todoItemStyle}
    >
      <div>
        <input
          type="checkbox"
          defaultChecked={isCompletedState}
          onClick={handleCheckboxClick}
        />
      </div>
      <p>{todo.text}</p>
      <div>
        <CloseButton onClick={handleRemoveClick} />
      </div>
    </div>
  );
};
Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  removeTodo: PropTypes.func.isRequired,
  toggleTodoCompleted: PropTypes.func.isRequired,
};
export default Todo;
