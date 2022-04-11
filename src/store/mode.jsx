import { createSlice } from "@reduxjs/toolkit";

export const mode = createSlice({
    name: "mode",
    initialState: {
        value: true,
    },
    reducers: {
        modeToggle: (state) => {
            state.value = !state.value
        },
    },
})

export const { modeToggle } = mode.actions;
export default mode.reducer
