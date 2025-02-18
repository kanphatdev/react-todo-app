import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";
import { useState } from "react";

const TodoItems = ({ text }) => {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="flex items-center bg-base-200 p-3 rounded-lg shadow-sm transition-all duration-300">
      <div
        className="flex items-center flex-1 gap-3 cursor-pointer"
        onClick={() => setCompleted(!completed)}
      >
        <img src={completed ? tick : not_tick} alt="Tick" className="w-7" />
        <p className={`text-lg ${completed ? "line-through text-gray-500" : "text-neutral-content"}`}>
          {text}
        </p>
      </div>
      <img src={delete_icon} alt="Delete" className="w-5 cursor-pointer hover:scale-110 transition-transform" />
    </div>
  );
};

export default TodoItems;
