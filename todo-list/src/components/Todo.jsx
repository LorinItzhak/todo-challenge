import CloseButton from 'react-bootstrap/CloseButton';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const Todo = ({ text, isCompleted, removeTodo, toggleTodoCompleted }) => {
  useEffect(() => {
    if (isCompleted) {
      const parantDiv = document.querySelector('.todo-item');
      parantDiv.classList.add('completed');
    }
  }, [isCompleted]);
  const handleRemoveClick = () => {
    removeTodo(text);
  };
  const handleCheckboxClick = (e) => {
    const parantDiv = e.target.parentElement.parentElement;
    parantDiv.classList.toggle('completed');
    toggleTodoCompleted(text);
  };
  return (
    <div className="d-flex justify-content-between todo-item">
      <div>
        <input
          type="checkbox"
          defaultChecked={isCompleted}
          onClick={handleCheckboxClick}
        />
      </div>
      <p>{text}</p>
      <div>
        <CloseButton onClick={handleRemoveClick} />
      </div>
    </div>
  );
};

Todo.prototype = {
  text: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  removeTodo: PropTypes.func.isRequired,
  toggleTodoCompleted: PropTypes.func.isRequired,
};

export default Todo;
