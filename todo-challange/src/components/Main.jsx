import { ACTIVE, COMPLETED, tasks } from "../mock";
import { useState, useEffect } from "react";
import Task from "./Task";
import AddTask from "./Addtask";
const Main = () => {
  const [tasksList, setTasksList] = useState([]);
  useEffect(() => setTasksList(tasks), []);
  const addTask = description => setTasksList(oldList => oldList.concat([
    {id: oldList.length+1, description,active: true}
  ]));
  const removeTask = id => setTasksList(oldList => oldList.filter(list=>list.id!=id))
  const toggleActive = id => setTasksList(oldList => 
    {
      const alteredList = [...oldList];
      alteredList[id-1].active = !alteredList[id-1].active; 
      return alteredList;
    }
  );
  return (
    <div>
      <h1>TODO</h1>
      <div>
        <AddTask addTaskHandler={addTask} />
      </div>
      <div>
        {tasksList.map(({id, description, active}) => (
          <Task key={id} id={id}
          removeTask={removeTask} description={description} active={active}
          toggleComplete={toggleActive} />
        ))}
      </div>
    </div>
  );
};
export default Main;
