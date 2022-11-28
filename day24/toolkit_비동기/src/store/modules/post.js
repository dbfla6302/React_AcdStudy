import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
 

// createAsyncThunk 생성하기
export const getData = createAsyncThunk(
  // action 이름
  "users/getUsers",
  // 처리할 비동기 함수
  async () => {
    // 서버에서 데이터를 불러옴
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    // action의 payload 리턴
    return res.data;
  }
);
const initialState = {
  users: [],
  status: null,
  isLoading: true,
};
const usersSlice = createSlice({
    name: "user",
    initialState: {
      users: [],
      status: null,
    },    
    extraReducers: {
        // 비동기 시작
      [getData.pending]: (state, action) => {
        state.status = "loading";
        state.isLoading = true;
      },
       //   성공
      [getData.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.status = "success";
        state.users = action.payload;
      },
       // 에러가 생겼을때  
      [getData.rejected]: (state, action) => {
        state.status = "failed";
        state.isLoading = false;
      },
    },
  });
  
  export default usersSlice.reducer;