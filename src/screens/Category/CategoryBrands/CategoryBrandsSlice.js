import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { firebase } from "../../../services/config";
import { getDocs } from "firebase/firestore";

const initialState = {
  brands: [],
  status: "idle",
  error: null
}

const dataRef = firebase.firestore().collection("brands");

export const getBrands = createAsyncThunk(
  "categoryBrands/getcategoryBrands", async () => {
    const querySnapshot = await getDocs(dataRef)
    const dataArray = querySnapshot.docs.map((doc) => doc.data())
    return dataArray
  })

const CategoryBrandsSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBrands.pending, (state) => {
      state.status = "loading"
    })
      .addCase(getBrands.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.brands = action.payload
      })
      .addCase(getBrands.rejected, (state, action) => {
        console.log("Error: ", action.error)
        state.status = "failed"
        state.error = action.error.message
      })
  }
})

export const selectCategoryBrands = (state) => state.brands.brands
export const selectCategoryBrandsStatus = (state) => state.brands.status
export const selectCategoryBrandsError = (state) => state.brands.error

export default CategoryBrandsSlice.reducer