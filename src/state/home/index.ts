import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "state";

interface State {
  value: number;
}

const initialState: State = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      console.log("state", state.value);
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const counterAction = counterSlice.actions;

export const counter = (state: RootState) => state.counter;

export default counterSlice.reducer;
