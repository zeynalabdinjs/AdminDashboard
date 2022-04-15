import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./mode"
import searchReducer from "./modal"

export default configureStore({
    reducer: {
        mode: modeReducer,
        modal: searchReducer,
        // reducers
    }
})