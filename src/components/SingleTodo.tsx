import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import { FiEdit, FiDelete } from "react-icons/fi";
import { MdDoneOutline } from "react-icons/md";
import "./styles.css";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );

    setEdit(false);
  };

  const handleCompleted = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const handledeleted = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos__single--text--edit"
        />
      ) : todo.isCompleted ? (
        <span className="todos__single--text--completed">{todo.todo}</span>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isCompleted) {
              setEdit(!edit);
            }
          }}>
          <FiEdit />
        </span>
        <span className="icon" onClick={() => handledeleted(todo.id)}>
          <FiDelete />
        </span>
        <span className="icon" onClick={() => handleCompleted(todo.id)}>
          <MdDoneOutline />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
