import CloseButton from 'react-bootstrap/CloseButton';

const Todo = ({ text, isCompleted, removeTodo, toggleTodoCompleted }) => {
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

export default Todo;
