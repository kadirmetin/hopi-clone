import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { firebase } from "../services/config";
import { getDocs } from "firebase/firestore";

const initialState = {
  screens: [],
  status: "idle",
  error: null
}

const dataRef = firebase.firestore().collection("welcomeContent");

export const getWelcomeScreens = createAsyncThunk(
  "welcome/getWelcomeScreens", async () => {
    const querySnapshot = await getDocs(dataRef)
    const dataArray = querySnapshot.docs.map((doc) => doc.data())
    return dataArray
  })

const welcomeSlice = createSlice({
  name: "welcome",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWelcomeScreens.pending, (state) => {
      state.status = "loading"
    })
      .addCase(getWelcomeScreens.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.screens = action.payload
      })
      .addCase(getWelcomeScreens.rejected, (state, action) => {
        console.log("Error: ", action.error)
        state.status = "failed"
        state.error = action.error.message
      })
  }
})

export const selectWelcomeScreens = (state) => state.welcome.screens
export const selectWelcomeStatus = (state) => state.welcome.status
export const selectWelcomeError = (state) => state.welcome.error

export default welcomeSlice.reducer