import { useMemo, useState } from "react";
import type { Task, UpdateTaskDto } from "../models/Task";
import { useGetTasksQuery, useUpdateTaskMutation } from "../store/apiSlice";
import type { RadUUID } from "../utils";
import "./taskDetails.css"

interface TaskDetailsProps {
    selectedTaskId: RadUUID;
}
function toUpdateTaskDto(task: Task): UpdateTaskDto {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, created_date, ...body } = task;
    return body;
}

export const TaskDetails = ({ selectedTaskId }: TaskDetailsProps) => {
    const { data: tasks = [] } = useGetTasksQuery();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const existing = useMemo(() => tasks.find((t: any) => t.id === selectedTaskId), [tasks, selectedTaskId]);

    const [updateTask, { isLoading }] = useUpdateTaskMutation();

    const [title, setTitle] = useState(existing?.title ?? "");
    const [description, setDescription] = useState(existing?.description ?? "");
    const [status, setStatus] = useState<number>(existing?.status ?? 0);
    const [dueDate, setDueDate] = useState(existing?.due_date ?? "");
    const [categoryId, setCategoryId] = useState(existing?.category_id ?? "");

    if (!existing) return <div>Task not found (or still loading)</div>;

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Merge old + new, then send full body
        const merged: Task = {
            ...existing,
            title,
            description,
            status,
            due_date: dueDate ? new Date(dueDate).toISOString() : undefined,
            category_id: categoryId || undefined,
        };

        await updateTask({ id: existing.id!, body: toUpdateTaskDto(merged) }).unwrap();
    };

    return (
        <form onSubmit={onSubmit}>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

            <select value={status} onChange={(e) => setStatus(Number(e.target.value) as 0 | 1)}>
                <option value={0}>Incomplete</option>
                <option value={1}>Complete</option>
            </select>

            {/* due date as date input (note: date inputs want YYYY-MM-DD; you may want a small formatter) */}
            <input value={dueDate} onChange={(e) => setDueDate(e.target.value)} placeholder="ISO or YYYY-MM-DD" />

            <input value={categoryId} onChange={(e) => setCategoryId(e.target.value)} placeholder="category uuid" />

            <button disabled={isLoading} type="submit">Save</button>
        </form>
    );
}