import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { firebase } from "../../services/config";
import { getDocs } from "firebase/firestore";

const initialState = {
  offers: [],
  status: "idle",
  error: null
}

const dataRef = firebase.firestore().collection("myOffersCollection")

export const getOffers = createAsyncThunk(
  "offers/getOffers", async () => {
    const querySnapshot = await getDocs(dataRef)
    const dataArray = querySnapshot.docs.map((doc) => doc.data())
    return dataArray
  }
)

const OffersSliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOffers.pending, (state) => {
      state.status = "loading"
    })
      .addCase(getOffers.fulfilled, (state, action) => {
        state.status = "succeeded",
        state.offers = action.payload
      })
      .addCase(getOffers.rejected, (state, action) => {
        console.log("Error: ", action.error)
        state.status = "failed"
        state.error = action.error.message
      })
  }
})

export const selectSliderOffers = (state) => state.slider.offers
export const selectSliderStatus = (state) => state.slider.status
export const selectSliderError = (state) => state.slider.error

export default OffersSliderSlice.reducer