import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { firebase } from "../../services/config";
import { getDocs } from "firebase/firestore";

const initialState = {
  brands: [],
  status: "idle",
  error: null
}

const dataRef = firebase.firestore().collection("lovemarksCollection");

export const getLovemarks = createAsyncThunk(
  "lovemarksCollection/getLovemarksCollection", async () => {
    const querySnapshot = await getDocs(dataRef)
    const dataArray = querySnapshot.docs.map((doc) => doc.data())
    return dataArray
  })

const LovemarksSlice = createSlice({
  name: "lovemarks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLovemarks.pending, (state) => {
      state.status = "loading"
    })
      .addCase(getLovemarks.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.brands = action.payload
      })
      .addCase(getLovemarks.rejected, (state, action) => {
        console.log("Error: ", action.error)
        state.status = "failed"
        state.error = action.error.message
      })
  }
})

export const selectLovemarksBrands = (state) => state.lovemarks.brands
export const selectLovemarksStatus = (state) => state.lovemarks.status
export const selectLovemarksError = (state) => state.lovemarks.error

export default LovemarksSlice.reducer