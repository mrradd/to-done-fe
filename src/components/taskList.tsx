import "./taskList.css"
import { useGetTasksQuery } from "../api/api";

export const TaskList = () => {
    const { data: tasks = [] } = useGetTasksQuery();

    return (
        <section className="task_list">
            {tasks.map(task => {
                return (
                    <div className="task_list_card">
                        <p>{task.title}</p>
                    </div>
                );
            })}
        </section>
    );
}