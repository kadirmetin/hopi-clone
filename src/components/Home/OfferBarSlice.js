import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { firebase } from "../../services/config";
import { getDocs } from "firebase/firestore";

const initialState = {
  pics: [],
  status: "idle",
  error: null
}

const dataRef = firebase.firestore().collection("bannersCollection");

export const getOfferBarData = createAsyncThunk(
  "offerBar/getOfferBarData", async () => {
    const querySnapshot = await getDocs(dataRef)
    const dataArray = querySnapshot.docs.map((doc) => doc.data())
    return dataArray
  })

const offerBarSlice = createSlice({
  name: "offerBar",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOfferBarData.pending, (state) => {
      state.status = "loading"
    })
      .addCase(getOfferBarData.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.pics = action.payload
      })
      .addCase(getOfferBarData.rejected, (state, action) => {
        console.log("Error: ", action.error)
        state.status = "failed"
        state.error = action.error.message
      })
  }
})

export const selectOfferBarPics = (state) => state.offerBar.pics
export const selectOfferBarStatus = (state) => state.offerBar.status
export const selectOfferBarError = (state) => state.offerBar.error

export default offerBarSlice.reducer