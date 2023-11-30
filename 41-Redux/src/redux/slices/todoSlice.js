import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      let obj = {
        id: uuidv4(),
        tittle: action.payload,
      };
      state.todos.push(obj);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((elem) => elem.id != action.payload);
    },

    // increment: (state) => {
    //   state.count += 1;
    //   console.log(state.count);
    //   console.log(state.name);
    // },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
