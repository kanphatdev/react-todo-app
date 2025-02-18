import tod_icon from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";
const Todo = () => {
  return (
    <div className="place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px ] rounded-xl bg-white">
      {/* ---------------------- title ----------------------- */}
      <div className="flex items-center mt-7 gap-2">
        <img src={tod_icon} className="w-8 h-8" alt="" />
        <h1 className=" text-3xl font-semibold capitalize">to do list</h1>
      </div>
      {/* ---------------- input ----------------- */}
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          type="text"
          placeholder="add your task"
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
        />
        <button className="uppercase border-none rounded-full bg-warning w-32 h-14 text-white text-lg font-medium cursor-pointer">
          add +
        </button>
      </div>
         {/* ---------------- todo list ----------------- */}
         <div className="">
          <TodoItems text={"learn coding"}/>
         </div>
    </div>
  );
};
export default Todo;
