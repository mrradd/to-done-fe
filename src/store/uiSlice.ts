import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type CompletionFilter = "all" | "active" | "completed";
export type SortField = "dueDate" | "createdAt";
export type SortDirection = "asc" | "desc";

type UiState = {
    filter: CompletionFilter;
    sortField: SortField;
    sortDirection: SortDirection;
    selectedCategoryId: string | "all";
};

const initialState: UiState = {
    filter: "all",
    sortField: "createdAt",
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
        toggleSortDirection(state) {
            state.sortDirection = state.sortDirection === "asc" ? "desc" : "asc";
        },
        setSortDirection(state, action: PayloadAction<SortDirection>) {
            state.sortDirection = action.payload;
        },
        setSelectedCategoryId(state, action: PayloadAction<UiState["selectedCategoryId"]>) {
            state.selectedCategoryId = action.payload;
        },
        resetUi(state) {
            Object.assign(state, initialState);
        },
    },
});

export const {
    setFilter,
    setSortField,
    toggleSortDirection,
    setSortDirection,
    setSelectedCategoryId,
    resetUi,
} = uiSlice.actions;

export default uiSlice.reducer;
