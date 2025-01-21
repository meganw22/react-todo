import React, { useState } from "react";

const Form = ({ allTasks, setAllTasks, newTask, setNewTask }) => {
  const onNewTaskChange = (event) => {
    setNewTask(event.target.value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim() === "") return;

    setAllTasks([...allTasks, newTask]);
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
