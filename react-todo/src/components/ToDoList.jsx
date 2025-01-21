import React from "react";

const ToDoList = ({ allTasks, setAllTasks }) => {
  return (
    <div>
      {allTasks.map((task) => (
        <li className="todo-list" key={task.id}>
          <input
            type="text"
            value={task.title}
            className="list"
            onChange={(event) => event.preventDefault()}
          />
        </li>
      ))}
    </div>
  );
};

export default ToDoList;
