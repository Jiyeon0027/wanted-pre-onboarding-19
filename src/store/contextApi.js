import React, { createContext, useState } from "react";
import Mainpage from "../pages/mainpage";
export const TodoListStore = createContext();

const TodoListContext = () => {
  const [todoList, setTodoList] = useState([]);
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };
  const removeTodo = (removeId) => {
    const arrTodo = todoList.filter((e) => parseInt(removeId) !== e.id);
    //console.log(typeof removeId);
    setTodoList(arrTodo);
  };
  return (
    <TodoListStore.Provider value={{ todoList, addTodo, removeTodo }}>
      <Mainpage />
    </TodoListStore.Provider>
  );
};
export default TodoListContext;
