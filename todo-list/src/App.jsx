import { useState } from 'react';
import AddTodoForm from './components/AddTodoForm';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './components/Todo';
import { Container, Row } from 'react-bootstrap';

function App() {
  const [todos, setTodos] = useState([
    { text: 'Hi , I am your first todo', isCompleted: false },
  ]);
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
    console.log(todos);
  };
  const removeTodo = (text) => {
    setTodos(todos.filter((todo) => todo.text !== text));
  };
  return (
    <>
      <h1>Todo</h1>
      <Container>
        <AddTodoForm addTodo={addTodo} />
      </Container>
      <Container id="todo-list">
        {todos.map((todo, index) => (
          <Row key={index}>
            <Todo
              key={index}
              text={todo.text}
              isCompleted={todo.isCompleted}
              removeTodo={removeTodo}
            />
          </Row>
        ))}
      </Container>
    </>
  );
}

export default App;
