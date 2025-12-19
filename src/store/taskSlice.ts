import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Task } from "../models/Task";

const taskSlice = createSlice({
    name: "tasks",
    initialState: Array<Task>,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.push({
                id: action.payload.id,
                label: action.payload.label,
                completed: action.payload.completed,
                description: action.payload.description,
                dueDate: action.payload.dueDate,
                category: action.payload.category,
            });
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            return state.filter(task => task.id !== action.payload)
        }
    },
});

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;