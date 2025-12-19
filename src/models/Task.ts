import type { Category } from "./Category";

export interface Task {
    id?: string; //UUID. This will be undefined if it is a new Task that hasn't been saved.
    label: string;
    description?: string;
    dueDate?: Date;
    category?: Category;
    completed: boolean;
}