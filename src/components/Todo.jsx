import tod_icon from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";
import { useRef, useState } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(""); // Error handling for toast
  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();
    
    if (inputText === "") {
      setError("Input text is required");
      setTimeout(() => setError(""), 2000); // Hide error after 2 seconds
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };

    setTasks((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  return (
    <div className="place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-2xl bg-base-100 shadow-lg">
      {/* ---------------------- Toast (Error Message) ----------------------- */}
      {error && (
        <div className="toast toast-top toast-start">
          <div className="alert alert-error">
            <span>{error}</span>
          </div>
        </div>
      )}

      {/* ---------------------- Title ----------------------- */}
      <div className="flex items-center mt-5 gap-3">
        <img src={tod_icon} className="w-10 h-10" alt="Todo Icon" />
        <h1 className="text-3xl font-semibold text-primary">To-Do List</h1>
      </div>

      {/* ---------------- Input Field ----------------- */}
      <div className="flex items-center my-6 bg-base-200 rounded-full px-4 py-2 shadow-sm">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add your task"
          className="flex-1 bg-transparent border-none outline-none text-lg text-neutral-content placeholder-neutral-content px-2"
        />
        <button
          className="btn btn-warning btn-lg rounded-full text-white font-medium shadow-md"
          onClick={add}
        >
          Add +
        </button>
      </div>

      {/* ---------------- To-Do List ----------------- */}
      <div className="mt-4 space-y-3">
        {tasks.map((task) => (
          <TodoItems key={task.id} text={task.text} />
        ))}
      </div>
    </div>
  );
};

export default Todo;
