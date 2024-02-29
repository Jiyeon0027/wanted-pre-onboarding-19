import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../../store/slice";

function PaintTodoList() {
  const todoList = useSelector((state) => {
    console.log(state);
    return state.TodoList;
  });
  const dispatch = useDispatch();
  const onDeleteButton = (e) => {
    const removeThings = e.target.parentNode;
    const liId = removeThings.id;
    dispatch(removeTodo(liId));
  };
  //console.log(todoList);

  return (
    <div>
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

export default PaintTodoList;
