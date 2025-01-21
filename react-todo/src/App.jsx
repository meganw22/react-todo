import { useState } from "react";
// import ToDoList from "./components/ToDoList";
import ListHeader from "./components/ListHeader";
import Form from "./components/Form";
import "./components/styles.css";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="app-wrapper">
          <ListHeader />
          <div>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
