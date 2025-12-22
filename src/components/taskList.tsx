import "./taskList.css"
import { useGetTasksQuery } from "../store/apiSlice";

interface TaskListProps {
    setSelectedTaskId: (taskId: string) => void;
}

export const TaskList = ({ setSelectedTaskId }: TaskListProps) => {
    const { data: tasks = [] } = useGetTasksQuery();

    return (
        <section className="task_list">
            {tasks.map(task => {
                return (
                    <div onClick={() => {
                        setSelectedTaskId(task.id!);
                        console.log(task.id);
                    }} key={task.id} className="task_list_card">
                        <p>{task.title}</p>
                    </div>
                );
            })}
        </section>
    );
}