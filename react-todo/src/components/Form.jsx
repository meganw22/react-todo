import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ allTasks, setAllTasks, newTask, setNewTask }) => {
  const onNewTaskChange = (event) => {
    setNewTask(event.target.value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim() === "") return;

    setAllTasks([
      ...allTasks,
      { id: uuidv4(), title: newTask, completed: false },
    ]);
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
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
