import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Category } from "../models/Category";

interface CategoryState {
    categories: Category[];
}

const initialState: CategoryState = {
    categories: [],
};

const categorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        addCategory: (state, action: PayloadAction<Category>) => {
            //TODO CH. DO API REQUEST TO ADD CATEGORY
            state.categories.push({
                id: action.payload.id,
                name: action.payload.name,
            });
        },
        deleteCategory: (state, action: PayloadAction<string>) => {
            const index = state.categories.findIndex(category => category.id === action.payload);
            //TODO CH. DO API REQUEST TO DELETE CATEGORY
            if (index !== -1) {
                state.categories.splice(index, 1);
            }
        }
    },
});

export const { addCategory, deleteCategory } = categorySlice.actions;
export default categorySlice.reducer;