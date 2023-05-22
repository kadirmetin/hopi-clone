import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { firebase } from "../../services/config";
import { getDocs } from "firebase/firestore";


const initialState = {
  pics: [],
  status: "idle",
  error: null
}

const dataRef = firebase.firestore().collection("PicArea");

export const getPicAreaPics = createAsyncThunk(
  "picArea/getPicAreaPics", async () => {
    const querySnapshot = await getDocs(dataRef)
    const dataArray = querySnapshot.docs.map((doc) => doc.data())
    return dataArray
  })

const PicAreaSlice = createSlice({
  name: "picArea",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPicAreaPics.pending, (state) => {
      state.status = "loading"
    })
      .addCase(getPicAreaPics.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.pics = action.payload
      })
      .addCase(getPicAreaPics.rejected, (state, action) => {
        console.log("Error: ", action.error)
        state.status = "failed"
        state.error = action.error.message
      })
  }
})

export const selectPicAreaPics = (state) => state.picArea.pics
export const selectPicAreaStatus = (state) => state.picArea.status
export const selectPicAreaError = (state) => state.picArea.error

export default PicAreaSlice.reducer