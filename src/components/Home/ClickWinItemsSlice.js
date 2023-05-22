import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { firebase } from "../../services/config";
import { getDocs } from "firebase/firestore";

const initialState = {
  pics: [],
  status: "idle",
  error: null
}

const dataRef = firebase.firestore().collection("clickWinItems");

export const getClickWinPics = createAsyncThunk(
  "clickWin/getClickWinPics", async () => {
    const querySnapshot = await getDocs(dataRef)
    const dataArray = querySnapshot.docs.map((doc) => doc.data())
    return dataArray
  })

const ClickWinItemsSlice = createSlice({
  name: "clickWin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getClickWinPics.pending, (state) => {
      state.status = "loading"
    })
      .addCase(getClickWinPics.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.pics = action.payload
      })
      .addCase(getClickWinPics.rejected, (state, action) => {
        console.log("Error: ", action.error)
        state.status = "failed"
        state.error = action.error.message
      })
  }
})

export const selectClickWinPics = (state) => state.clickWin.pics
export const selectClickWinStatus = (state) => state.clickWin.status
export const selectClickWinError = (state) => state.clickWin.error

export default ClickWinItemsSlice.reducer