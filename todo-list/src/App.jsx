import { useState } from 'react';
import AddTodoForm from './components/AddTodoForm';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './components/Todo';
import { Container, Row, Button, ButtonGroup } from 'react-bootstrap';

const App = () => {
  const [todos, setTodos] = useState([
    { text: 'Hi , I am your first todo', isCompleted: false },
  ]);

  const [todosToShow, setTodosToShow] = useState([...todos]);

  const addTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    setTodosToShow(newTodos);
  };

  const removeTodo = (text) => {
    const newTodos = todos.filter((todo) => todo.text !== text);
    setTodos(newTodos);
    setTodosToShow(newTodos);
  };

  const toggleTodoCompleted = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].isCompleted = !newTodos[todoIndex].isCompleted;
    setTodos(newTodos);
    setTodosToShow(newTodos);
  };

  const showTodosByStatus = (status) => {
    if (status === 'All') {
      setTodosToShow(todos);
    } else if (status === 'Active') {
      const activeTodos = todos.filter((todo) => !todo.isCompleted);
      setTodosToShow(activeTodos);
    } else if (status === 'Completed') {
      const completedTodos = todos.filter((todo) => todo.isCompleted);
      setTodosToShow(completedTodos);
    }
  };
  return (
    <>
      <h1>Todo</h1>
      <Container>
        <AddTodoForm addTodo={addTodo} />
      </Container>
      <Container id="todo-list">
        {todosToShow.map((todo, index) => (
          <Row key={index}>
            <Todo
              key={index}
              text={todo.text}
              isCompleted={todo.isCompleted}
              removeTodo={removeTodo}
              toggleTodoCompleted={toggleTodoCompleted}
            />
          </Row>
        ))}
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary" onClick={() => showTodosByStatus('All')}>
            All
          </Button>
          <Button
            variant="secondary"
            onClick={() => showTodosByStatus('Active')}
          >
            Active
          </Button>
          <Button
            variant="secondary"
            onClick={() => showTodosByStatus('Completed')}
          >
            completed
          </Button>
        </ButtonGroup>
      </Container>
    </>
  );
};

export default App;
