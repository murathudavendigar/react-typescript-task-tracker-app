import React from "react";
import "./styles.css";

const InputField = () => {
  return (
    <form className="input__form">
      <input type="input" placeholder="Enter a task" className="input__box" />
      <button className="input__submit">Add</button>
    </form>
  );
};

export default InputField;
