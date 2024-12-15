import { Task } from "@/_pages/Tasks/[task_id]/Task";

export default function TaskPage({ params }: { params: { task_id: string } }) {
    return <Task task_id={params.task_id} />
}