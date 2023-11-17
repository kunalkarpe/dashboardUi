import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./Slice"

const store = configureStore({
    reducer:{
        allList :listSlice
    }
   
})

export default store;