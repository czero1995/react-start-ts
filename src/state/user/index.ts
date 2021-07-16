import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "state";
import http from "utils/http";

interface State {
  name: string;
  age: number;
  bannerList: [];
}

const initialState: State = {
  name: "名称",
  age: 1,
  bannerList: [],
};

export const fetchBanner = createAsyncThunk("获取Banner", async () => {
  const response = await http("banner/all");
  console.log("response.data: ", response.data);
  return response.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    modify: (state, action) => {
      state.name = action.payload.name;
      state.age = action.payload.age;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchBanner.fulfilled, (state, action) => {
      // Add user to the state array
      state.bannerList = action.payload;
    });
  },
});
export const getBanner = () => (dispatch: AppDispatch) =>
  http("banner/all").then((res) => {
    return res;
  });

export const userAction = userSlice.actions;

export const user = (state: RootState) => state.user;

export default userSlice.reducer;
