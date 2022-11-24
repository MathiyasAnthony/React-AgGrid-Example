import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'users',
  initialState: {
   userName: '',
   userRole: ''
  },
  reducers: {
    setCurrentUser(state, actions) {
      state.userName = actions.payload
    },
  }
})

export const { setCurrentUser } = userSlice.actions
export default userSlice.reducer