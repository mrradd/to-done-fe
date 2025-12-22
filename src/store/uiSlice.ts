import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RadUUID } from "../utils";

export type CompletionFilter = "all" | "active" | "completed";
export type SortField = "due_date" | "created_date";
export type SortDirection = "asc" | "desc";

type UiState = {
    filter: CompletionFilter;
    sortField: SortField;
    sortDirection: SortDirection;
    selectedCategoryId: RadUUID | "all";
};

const initialState: UiState = {
    filter: "all",
    sortField: "created_date",
    sortDirection: "desc",
    selectedCategoryId: "all",
};

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setFilter(state, action: PayloadAction<CompletionFilter>) {
            state.filter = action.payload;
        },
        setSortField(state, action: PayloadAction<SortField>) {
            state.sortField = action.payload;
        },
        setSortDirection(state, action: PayloadAction<SortDirection>) {
            state.sortDirection = action.payload;
        },
        toggleSortDirection(state) {
            state.sortDirection = state.sortDirection === "asc" ? "desc" : "asc";
        },
        setSelectedCategoryId(state, action: PayloadAction<RadUUID | "all">) {
            state.selectedCategoryId = action.payload;
        },
    },
});

export const {
    setFilter,
    setSortField,
    setSortDirection,
    toggleSortDirection,
    setSelectedCategoryId,
} = uiSlice.actions;

export default uiSlice.reducer;