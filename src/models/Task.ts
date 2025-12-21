export interface Task {
    id?: string; //UUID This will be undefined if we are working with a new Task.
    title: string;
    description?: string;
    due_date?: string; //UTC
    created_date?: string; //UTC. This will be undefined if we are working with a new Task.
    status: number; // 0 = Incomplete, 1 = Complete
    category_id?: string; //UUID
}

export type CreateTaskDto = Omit<Task, "id" | "created_date">;
export type UpdateTaskDto = Partial<Omit<Task, "id" | "created_date">>;