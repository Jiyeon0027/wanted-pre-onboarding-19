import { createSlice } from "@reduxjs/toolkit"; //액션에 대한 함수 설정과 리듀서를 따로 생성하지 않아도 됨

const initialState = [];

export const todoSlice = createSlice({
  name: "TodoList",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      return state.filter((e) => parseInt(action.payload) !== e.id);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
