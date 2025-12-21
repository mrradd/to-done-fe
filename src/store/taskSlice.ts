import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Task } from "../models/Task";

interface TaskState {
    tasks: Task[];
}

const initialState: TaskState = {
    tasks: [],
};

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            //TODO CH. DO API REQUEST TO SAVE NEW TASK SOMEWHERE
            state.tasks.push({
                id: action.payload.id,
                title: action.payload.title,
                status: action.payload.status,
                description: action.payload.description,
                due_date: action.payload.due_date,
                category_id: action.payload.category_id,
                created_date: action.payload.created_date,
            });
        },

        deleteTask: (state, action: PayloadAction<string>) => {
            const index = state.tasks.findIndex(task => task.id === action.payload);
            //TODO CH. DO API REQUEST TO DELETE TASK SOMEWHERE
            if (index !== -1) {
                state.tasks.splice(index, 1);
            }
        }
    },
});

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
