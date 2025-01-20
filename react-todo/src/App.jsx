import { useState } from "react";
// import ToDoList from "./components/ToDoList";
import ListHeader from "./components/ListHeader";
import "./components/styles.css";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="app-wrapper">
          <ListHeader />
        </div>
      </div>
    </>
  );
};

export default App;
