
export interface Task {
    id?: string; //UUID This will be undefined if we are working with a new Task.
    title: string;
    description?: string;
    due_date?: Date;
    created_date?: Date; //This will be undefined if we are working with a new Task.
    status: number; // 0 = Incomplete, 1 = Complete
    category_id?: string; //UUID
}