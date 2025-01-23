import { useState } from "react";
import ListHeader from "./components/ListHeader";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import "./components/styles.css";

const App = () => {
  const [newTask, setNewTask] = useState("");
  const [allTasks, setAllTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);
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
              editTask={editTask}
              setEditTask={setEditTask}
            />
          </div>
          <div>
            <ToDoList
              allTasks={allTasks}
              setAllTasks={setAllTasks}
              setEditTask={setEditTask}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
