import { Task } from "@pages/Tasks/[task_id]/Task";

export function generateStaticParams() {
	return [{ id: "test" }];
}

export default function TaskPage(props: any) {
    return <Task />
}