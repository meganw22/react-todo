import { useState, useEffect } from "react";
import ListHeader from "./components/ListHeader";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import "./components/styles.css";

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("allTasks")) || [];
  const [newTask, setNewTask] = useState("");
  const [allTasks, setAllTasks] = useState(initialState);
  const [editTask, setEditTask] = useState(null);

  useEffect(() => {
    localStorage.setItem("allTasks", JSON.stringify(allTasks));
  }, [allTasks]);
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
