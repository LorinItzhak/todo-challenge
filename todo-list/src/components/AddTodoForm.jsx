import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddTodoForm = ({ addTodo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const todoText = e.target.elements[0].value;
    const todo = { text: todoText, isCompleted: false };
    addTodo(todo);
    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit} className="d-flex">
      <Form.Group className="form-group">
        <Form.Control type="text" placeholder="Add a todo" />
      </Form.Group>
    </Form>
  );
};

export default AddTodoForm;
