import { useGetTasksQuery } from "../api/api";

export const TaskList = () => {
    const { data: tasks = [] } = useGetTasksQuery();

    return (
        <>
            {tasks.map(task => {
                return (
                    <h4>{task.title}</h4>
                );
            })}
        </>
    );
}