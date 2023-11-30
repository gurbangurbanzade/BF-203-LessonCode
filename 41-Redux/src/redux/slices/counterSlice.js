import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  inputValue: "",
  name: "qurban",
  basket: ["koynek"],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
      console.log(state.count);
      console.log(state.name);
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      //   console.log(action.payload);
      //   state.count += action.payload;
      state.count += state.inputValue;
    },
    decrementByAmount: (state, action) => {
      //   console.log(action.payload);
      //   state.count += action.payload;
      //   state.count -= +action.payload;
      state.count -= state.inputValue;
    },
    reset: (state) => {
      state.count = 0;
    },
    getValue: (state, action) => {
      state.inputValue = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset,
  getValue,
} = counterSlice.actions;

export default counterSlice.reducer;
