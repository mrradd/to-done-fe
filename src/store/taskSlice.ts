import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Task } from "../models/Task";
import { fakeTaskList } from "../fakeData";

const taskSlice = createSlice({
    name: "tasks",
    initialState: fakeTaskList,
    reducers: {

        addTask: (state, action: PayloadAction<Task>) => {
            state.tasks.push({
                id: action.payload.id,
                label: action.payload.label,
                completed: action.payload.completed,
                description: action.payload.description,
                dueDate: action.payload.dueDate,
                category: action.payload.category,
                creationDate: action.payload.creationDate,
            });
        },

        deleteTask: (state, action: PayloadAction<string>) => {
            const index = state.tasks.findIndex(task => task.id === action.payload);

            if (index !== -1) {
                state.tasks.splice(index, 1);
            }
        }
    },
});

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;