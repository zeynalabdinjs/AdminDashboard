import { createSlice } from "@reduxjs/toolkit";

export const modal = createSlice({
    name: "modal",
    initialState: {
        value: false,
        searchValue: "",
    },
    reducers: {
        modalToggle: (state) => {
            state.value = !state.value
        },
        searchValue: (state, action) => { state.searchValue = action.payload },
    },
})

export const { modalToggle, searchValue } = modal.actions;
export default modal.reducer
