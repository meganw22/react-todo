import React from "react";

const Form = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Hello" className="task-input" />
        <button className="button-add" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
