import { ExecutionStatus } from "@/entities/ExecutionStatus/types";
import { TaskPriority } from "../TaskPriority/types";
import { CategoryShort } from "../Category/types";
import { UserShort } from "@/entities/User/types";
import { ProjectShort } from "@/entities/Project/types";

export type Task = {
    id: number;
    name: string;
    description: string;
    started_at: Date;
    finished_at: Date;
    execution_status: ExecutionStatus;
    task_priority: TaskPriority;
    category: CategoryShort;
    user: UserShort;
    project: ProjectShort | null;
    members: UserShort[];
    created_at: Date;
    updated_at: Date;
}

export type TaskShort = {
    id: number;
    name: string;
    description: string;
    started_at: Date;
    finished_at: Date;
    execution_status_id: number;
    task_priority_id: number;
    category_id: number;
    user_id: number;
    project_id: number | null;
    created_at: Date;
    updated_at: Date;
}