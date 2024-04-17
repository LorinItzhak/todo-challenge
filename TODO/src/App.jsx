import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { List } from "./components/List";
import { Items } from "./components/Items";
import { TodoFrom } from "./components/TodoForm";
import "./App.css";

function App() {

  const [todos, setTodos] = useState([]);
  const [showOnlyCompleted, setShowOnlyCompleted] = useState(false);
  const [showOnlyActive, setShowOnlyActive]=useState(false);

  const todoToShow =
    showOnlyCompleted === true
      ? todos.filter((todo) => todo.completed === true)
      : showOnlyActive === true 
      ? todos.filter((todo) => todo.completed === false)
      : todos;
     

  const onShowOnlyCompletedTodos = () => {
    setShowOnlyCompleted(true);
    setShowOnlyActive(false);
  };



  const onShowActivetodos =()=>{
    setShowOnlyCompleted(false);
    setShowOnlyActive(true);
  };

  const onShowAll =()=>{
    setShowOnlyCompleted(false);
    setShowOnlyActive(false);

  };

  

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch(
        "https://danielmargolin.github.io/TodoJSON/todosLorin.json"
      ); // 5 sec
      const todosFromServer = await res.json(); // 1 mil
      setTodos(todosFromServer);
    };
    fetchTodos(); // fetch data from server
  }, []);

  const addTodo = (text) => {
    const newTodos = [...todos, { id: Date.now(), text, completed: false }];

    setTodos(newTodos);
  };


  const toggleComplete = (id) => {
    const updateTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(updateTodos);
  };



 const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.completed === false);
    setTodos(updatedTodos);
  };

 const todoLeft = todos.filter(todo => !todo.completed).length;


 
  return (
    <>
      <div className="App">
        <h1>TODO</h1>
        <TodoFrom className="todo-form" addTodo={addTodo} />
        <List
          todos={todoToShow}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          onShowComplited={onShowOnlyCompletedTodos}
          onShowAll={onShowAll}
          onShowActive={onShowActivetodos}
          todoLeft={todoLeft}
         
        />
        
        
      </div>

      
    </>
  );
}

export default App;


  

 