import CloseButton from 'react-bootstrap/CloseButton';

const Todo = ({ text, isCompleted, removeTodo }) => {
  const handleRemoveClick = () => {
    removeTodo(text);
  };
  return (
    <div id="todo-item" className="d-flex justify-content-between">
      <p>{text}</p>
      <div>
        <CloseButton onClick={handleRemoveClick} />
      </div>
    </div>
  );
};

export default Todo;
