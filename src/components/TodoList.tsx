import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import "./styles.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos.length === 0 ? (
        <h1 className="welcome__text">
          Designed By : John Captain Price | 2022
        </h1>
      ) : (
        todos.map((item) => (
          <SingleTodo
            todo={item}
            key={item.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
