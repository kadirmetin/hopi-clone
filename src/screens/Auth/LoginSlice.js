import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  email: "",
  password: ""
}

export const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    changeEmail: (state, action) => {
      state.email = action.payload
    },
    changePassword: (state, action) => {
      state.password = action.payload
    }
  },
})

export const { changeEmail, changePassword } = LoginSlice.actions

export default LoginSlice.reducer