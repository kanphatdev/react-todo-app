import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";

const TodoItems = ({ text, id, isComplete, deleteTask, toggleComplete }) => {
  return (
    <div className="flex items-center bg-base-200 p-3 rounded-lg shadow-sm transition-all duration-300">
      <div
        className="flex items-center flex-1 gap-3 cursor-pointer"
        onClick={() => toggleComplete(id)} // Toggle completion state
      >
        <img src={isComplete ? tick : not_tick} alt="Tick" className="w-7" />
        <p className={`text-lg ${isComplete ? "line-through text-gray-500" : "text-neutral-content"}`}>
          {text}
        </p>
      </div>
      <img
        src={delete_icon}
        alt="Delete"
        className="w-5 cursor-pointer hover:scale-110 transition-transform"
        onClick={() => deleteTask(id)} // Delete task
      />
    </div>
  );
};

export default TodoItems;
