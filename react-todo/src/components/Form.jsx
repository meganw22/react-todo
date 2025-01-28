import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({
  input,
  allTasks,
  setAllTasks,
  newTask,
  setNewTask,
  editTask,
  setEditTask,
}) => {
  const updateTask = (title, id, completed) => {
    const updateTask = allTasks.map((task) =>
      task.id === id ? { title, id, completed } : task
    );
    setAllTasks(updateTask);
    setEditTask("");
  };
  useEffect(() => {
    if (editTask) {
      setNewTask(editTask.title);
    } else {
      setNewTask("");
    }
  }, [editTask]);

  const onNewTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTask) {
      setAllTasks([
        ...allTasks,
        { id: uuidv4(), title: newTask, completed: false },
      ]);
      setNewTask("");
    } else {
      updateTask(newTask, editTask.id, editTask.completed);
    }
    setNewTask("");
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Hello"
          className="task-input"
          value={newTask}
          required
          onChange={onNewTaskChange}
        />
        <button className="button-add" type="submit">
          {editTask ? "OK" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default Form;
