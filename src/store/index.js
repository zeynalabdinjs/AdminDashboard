import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./mode"

export default configureStore({
    reducer: {
        mode: modeReducer,

        // reducers
    }
})