import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Category } from "../models/Category";

const categorySlice = createSlice({
    name: "categories",
    initialState: Array<Category>,
    reducers: {
        addCategory: (state, action: PayloadAction<Category>) => {
            state.push({
                id: action.payload.id,
                label: action.payload.label,
            });
        },
        deleteCategory: (state, action: PayloadAction<string>) => {
            return state.filter(task => task.id !== action.payload)
        }
    },
});

export const { addCategory, deleteCategory } = categorySlice.actions;
export default categorySlice.reducer;