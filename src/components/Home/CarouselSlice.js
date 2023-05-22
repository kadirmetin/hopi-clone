import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { firebase } from "../../services/config";
import { getDocs } from "firebase/firestore";


const initialState = {
  pics: [],
  status: "idle",
  error: null
}

const dataRef = firebase.firestore().collection("carouselOffers");

export const getCarouselOffers = createAsyncThunk(
  "carousel/getCarouselOffers", async () => {
    const querySnapshot = await getDocs(dataRef)
    const dataArray = querySnapshot.docs.map((doc) => doc.data())
    return dataArray
  })

const CarouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCarouselOffers.pending, (state) => {
      state.status = "loading"
    })
      .addCase(getCarouselOffers.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.pics = action.payload
      })
      .addCase(getCarouselOffers.rejected, (state, action) => {
        console.log("Error: ", action.error)
        state.status = "failed"
        state.error = action.error.message
      })
  }
})

export const selectCarouselPics = (state) => state.carousel.pics
export const selectCarouselStatus = (state) => state.carousel.status
export const selectCarouselError = (state) => state.carousel.error

export default CarouselSlice.reducer