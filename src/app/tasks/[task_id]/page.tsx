import { Task } from "@/views/Tasks/[task_id]/Task.module";

export function generateStaticParams() {
	return [{ id: "test" }];
}

export default function TaskPage(props: any) {
    return <Task />
}