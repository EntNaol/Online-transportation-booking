import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navslices"

export const store = configureStore({
    reducer: {
        nav: navReducer,
    },
});