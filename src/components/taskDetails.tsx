import type { RadUUID } from "../utils";
import "./taskDetails.css"

interface TaskDetailsProps {
    selectedTaskId: RadUUID;
}

export const TaskDetails = ({ selectedTaskId }: TaskDetailsProps) => {

    return (
        <section className="task_card">
            <h2>Task Details</h2>
            <br />
            <h4>{selectedTaskId}</h4>
            <br />
            <div className="task_info"></div>
            <br />
            <div className="task_description"></div>
        </section>
    );
}