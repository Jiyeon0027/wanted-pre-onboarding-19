import { useState } from "react";
import PaintTodoList from "../components/List/painTodo";
import { addTodo } from "../store/slice";
import { useDispatch } from "react-redux";

function Mainpage() {
  const [todo, setTodo] = useState(""); //put todo
  const dispatch = useDispatch();

  /** input 제출시 newTodo만들기 */
  const onSubmitEvent = (e) => {
    e.preventDefault();
    const todoObj = {
      id: Date.now(),
      text: todo,
    };
    dispatch(addTodo(todoObj));
    setTodo("");
  };
  return (
    <div className="my-10 w-2/5 mx-auto">
      <form
        onSubmit={onSubmitEvent}
        className="m-2 mt-4 grid grid-cols-[repeat(1,minmax(0,1fr))_9vw] gap-3"
      >
        <input
          type="text"
          className="p-2 text-center rounded border-solid border-2"
          placeholder="input todos"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button
          className="bg-orange-200 hover:bg-orange-400 rounded px-3 py-2 border-solid border-2 border-amber-500"
          type="submit"
        >
          추가
        </button>
      </form>
      <div className="">
        <PaintTodoList />
      </div>
    </div>
  );
}

export default Mainpage;
