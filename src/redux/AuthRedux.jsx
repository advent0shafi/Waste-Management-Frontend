import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = {
  user_id:null,
  username: null,
 roles:null
};

export const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
    setCredentials: (state, action) => {
      const {username,roles,user_id} = action.payload
      state.username = username
      state.roles = roles
      state.user_id = user_id
     },

    userlogout: (state, action) => {
      state.user_id = null
      state.username = null
     
    state.roles = null
     },
  },
});

// Action creators are generated for each case reducer function
export const { setCredentials, userlogout } = authSlice.actions;

export default authSlice.reducer;