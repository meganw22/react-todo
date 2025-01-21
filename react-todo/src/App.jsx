import { useState } from "react";
// import ToDoList from "./components/ToDoList";
import ListHeader from "./components/ListHeader";
import Form from "./components/Form";
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
        </div>
      </div>
    </>
  );
};

export default App;
