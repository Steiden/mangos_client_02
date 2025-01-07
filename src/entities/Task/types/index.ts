import { ExecutionStatus } from "@/entities/execution_status/types";
import { TaskPriority } from "../task_priority/types";
import { CategoryShort } from "../category/types";
import { UserShort } from "@/entities/user/types";
import { ProjectShort } from "@/entities/project/types";
import { TaskMember } from "../task_member";

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
    members: TaskMember[];
    created_at: Date;
    updated_at: Date;
}

export type TaskMiddle = {
    id: number;
    name: string;
    description: string;
    started_at: Date;
    finished_at: Date;
    execution_status: ExecutionStatus;
    task_priority: TaskPriority;
    category: CategoryShort;
    user: UserShort;
    project: ProjectShort;
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

export type TaskFillable = {
    name?: string;
    description?: string;
    started_at?: Date;
    finished_at?: Date;
    execution_status_id?: number;
    task_priority_id?: number;
    category_id?: number;
    user_id?: number;
    project_id?: number | null;
}