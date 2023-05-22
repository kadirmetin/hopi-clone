import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  email: "",
  password: ""
}

export const SignupSlice = createSlice({
  name: "signup",
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

export const { changeEmail, changePassword } = SignupSlice.actions

export default SignupSlice.reducer