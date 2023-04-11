import { configureStore } from "@reduxjs/toolkit";
import { tagSlice } from "./headlineTag";
import { postsSlice } from "./blogPosts";

const store = configureStore({
    reducer: {
        tag: tagSlice.reducer,
        posts: postsSlice.reducer,
    }
})

export default store;