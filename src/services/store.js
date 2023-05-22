import { configureStore } from "@reduxjs/toolkit";
import welcomeReducer from "../screens/WelcomeSlice"
import welcomeBarReducer from "../components/Home/WelcomeBarSlice"
import ClickWinItemsReducer from "../components/Home/ClickWinItemsSlice"
import LovemarksReducer from "../components/Home/LovemarksCollectionSlice"
import OffersSliderReducer from "../components/Home/MyOffersSliderSlice"
import offerBarReducer from "../components/Home/OfferBarSlice"
import loginReducer from "../screens/Auth/LoginSlice"
import signupReducer from "../screens/Auth/SignupSlice"
import brandsReducer from "../screens/Category/CategoryBrands/CategoryBrandsSlice"
import carouselReducer from "../components/Home/CarouselSlice"
import picAreaReducer from "../components/Categories/PicAreaSlice"

export const store = configureStore({
  reducer: {
    welcome: welcomeReducer,
    welcomeBar: welcomeBarReducer,
    clickWin: ClickWinItemsReducer,
    lovemarks: LovemarksReducer,
    slider: OffersSliderReducer,
    offerBar: offerBarReducer,
    login: loginReducer,
    signup: signupReducer,
    brands: brandsReducer,
    carousel: carouselReducer,
    picArea: picAreaReducer,
  },
});
