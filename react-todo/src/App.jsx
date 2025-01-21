import { useState } from "react";
import ListHeader from "./components/ListHeader";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import "./components/styles.css";

const App = () => {
  const [newTask, setNewTask] = useState("");
  const [allTasks, setAllTasks] = useState([]);
  return (
    <>
      <div className="container">
        <div className="app-wrapper">
          <ListHeader />
          <div>
            <Form
              newTask={newTask}
              setNewTask={setNewTask}
              allTasks={allTasks}
              setAllTasks={setAllTasks}
            />
          </div>
          <div>
            <ToDoList allTasks={allTasks} setAllTasks={setAllTasks} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
