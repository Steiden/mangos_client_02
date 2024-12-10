import { ExecutionStatus } from "@/entities/ExecutionStatus/types";
import { TaskPriority } from "../TaskPriority/types";
import { Category } from "../Category/types";
import { User } from "@/entities/User/types";
import { Project } from "@/entities/Project/types";

export type Task = {
    id: number;
    name: string;
    description: string;
    started_at: Date;
    finished_at: Date;
    execution_status: ExecutionStatus;
    task_priority: TaskPriority;
    category: Category;
    user: User;
    project: Project | null;
    created_at: Date;
    updated_at: Date;
}