import React from "react";

const ToDoList = ({ allTasks, setAllTasks, setEditTask }) => {
  const handleComplete = (task) => {
    setAllTasks(
      allTasks.map((item) => {
        if (item.id === task.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findTask = allTasks.find((task) => task.id === id);
    setEditTask(findTask);
  };

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
            className={`list ${task.completed ? "complete" : ""}`}
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button
              className="button-edit task-button"
              onClick={() => handleEdit(task)}
            >
              <i className="far fa-edit"></i>
            </button>
            <button
              className="button-complete task-button"
              onClick={() => handleComplete(task)}
            >
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
