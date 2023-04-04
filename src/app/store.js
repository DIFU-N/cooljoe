import { configureStore } from "@reduxjs/toolkit";
import { tagSlice } from "./headlineTag";

const store = configureStore({
    reducer: {
        tag: tagSlice.reducer,
    }
})

export default store;