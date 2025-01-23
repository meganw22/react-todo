import React from "react";

const ToDoList = ({ allTasks, setAllTasks }) => {
  const handleDelete = ({ id }) => {
    setAllTasks(allTasks.filter((task) => task.id !== id));
  };
  return (
    <ul className="task-list">
      {allTasks.map((task) => (
        <li className="list-item" key={task.id}>
          <input
            type="text"
            value={task.title}
            className="list"
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button className="button-complete task-button">
              <i className="far fa-edit"></i>
            </button>
            <button className="button-edit task-button">
              <i className="far fa-check-square"></i>
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(task)}
            >
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
