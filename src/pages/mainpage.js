import { useState } from "react";

function Mainpage() {
  const [todo, setTodo] = useState(""); //put todo
  const [todoList, setTodoList] = useState([]); //todoList

  /** input 제출시 newTodo만들기 */
  const onSubmitEvent = (e) => {
    console.log(e);
    e.preventDefault();
    const todoObj = {
      id: Date.now(),
      text: todo,
    };
    setTodoList((prev) => {
      return [...prev, todoObj];
    });
    localStorage.setItem("todos", JSON.stringify(todoList));
    setTodo("");
    console.log(todoList);
  };

  const onDeleteButton = (e) => {
    console.log(e.target.parentNode);
    const removeThings = e.target.parentNode;
    const liId = removeThings.id;
    removeThings.remove();
    const arr = todoList.filter((e) => liId !== parseInt(e.id));
    setTodoList(arr);
    localStorage.setItem("todos", JSON.stringify(todoList));
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
      <div className=""></div>
      <div>
        <ul className="divide-y-2 divide-dashed divide-gray-300">
          {todoList?.map((e) => (
            <li
              id={e.id}
              key={e.id}
              className="m-2 grid grid-cols-[repeat(1,minmax(0,1fr))_9vw] gap-3"
            >
              <span className="px-3 py-2 text-lg text-center">{e.text}</span>
              <button
                className="bg-gray-100 hover:bg-gray-300 rounded px-3 py-2 border-solid border-2 border-gray-500"
                onClick={onDeleteButton}
              >
                삭제
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Mainpage;
