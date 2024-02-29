import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./slice";

const store = configureStore({
  reducer: { TodoList: todoSlice.reducer },
});

export default store;
