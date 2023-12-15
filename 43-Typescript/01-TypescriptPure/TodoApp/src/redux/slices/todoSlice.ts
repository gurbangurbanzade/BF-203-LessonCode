import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { v4 as uuidv4 } from "uuid";

export interface Todo {
  id: string;
  tittle: string;
}

export interface TodoState {
  todo: Todo;
  todos: Todo[];
}

const initialState: TodoState = {
  todo: { id: "", tittle: "" },
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    reduxGetTodo: (state, action: PayloadAction<string>) => {
      //   state.value += action.payload;
      const obj: Todo = {
        id: uuidv4(),
        tittle: action.payload,
      };

      state.todo = obj;
    },
    reduxGetTodos: (state, action: PayloadAction<Todo>) => {
      // state.value += action.payload;
      //   console.log("buradayam", action.payload);

      state.todos.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      // state.value += action.payload;
      //   console.log("buradayam", action.payload);
      state.todos = state.todos.filter((elem) => elem.id != action.payload);
    },
    editTodo: (state, action: PayloadAction<Todo>) => {
      console.log(action.payload);
      // state.value += action.payload;
      //   console.log("buradayam", action.payload);
      // state.todos = state.todos.filconst { arr } = state.todos;
      let arr = [...current(state.todos)];

      console.log(arr.find((elem) => elem.id == action.payload.id));

      arr = arr.map((elem) => {
        if (elem.id == action.payload.id) {
          return action.payload;
        } else {
          return elem;
        }
      });

      state.todos = arr;
    },
  },
});

// Action creators are generated for each case reducer function
export const { reduxGetTodo, reduxGetTodos, deleteTodo, editTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
