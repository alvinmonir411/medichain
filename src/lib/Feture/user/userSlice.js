import { createSlice } from "@reduxjs/toolkit";

const userSclice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
  },
  reducers: {
    login: (state, action) => {
      state.userInfo = action.payload;
    },
    logout: (state) => {
      state.userInfo = null;
    },
  },
});
export const { login, logout } = userSclice.actions;
export default userSclice.reducer;
