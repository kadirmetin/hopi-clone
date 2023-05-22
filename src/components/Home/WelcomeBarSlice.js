import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { firebase } from "../../services/config"
import { getDocs } from "firebase/firestore"

const initialState = {
  detail: [],
  status: "idle",
  error: null
}

const dataRef = firebase.firestore().collection("Users")

export const getWelcomeBarDetail = createAsyncThunk(
  "welcomeBar/getWelcomeDetail", async () => {
    const querySnapshot = await getDocs(dataRef)
    const dataArray = querySnapshot.docs.map((doc) => doc.data())
    return dataArray
  })

const WelcomeBarSlice = createSlice({
  name: "welcomeBar",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWelcomeBarDetail.pending, (state) => {
      state.status = "loading"
    })
      .addCase(getWelcomeBarDetail.fulfilled, (state, action) => {
        state.status = "succeeded",
          state.detail = action.payload
      })
      .addCase(getWelcomeBarDetail.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
  }
})

export const selectWelcomeBarDetail = (state) => state.welcomeBar.detail
export const selectWelcomeBarStatus = (state) => state.welcomeBar.status
export const selectWelcomeBarError = (state) => state.welcomeBar.error

export default WelcomeBarSlice.reducer