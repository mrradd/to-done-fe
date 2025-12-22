import { configureStore } from "@reduxjs/toolkit";
import { api } from "./apiSlice";
import uiSlice from "./uiSlice";


export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        ui: uiSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
