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

// 'id' => $this->id,
// 'name' => $this->name,
// 'description' => $this->description,
// 'started_at' => $this->started_at,
// 'finished_at' => $this->finished_at,
// 'execution_status' => new ExecutionStatusResource(ExecutionStatus::where('id', $this->execution_status_id)->first()),
// 'task_priority' => new TaskPriorityResource(TaskPriority::where('id', $this->task_priority_id)->first()),
// 'category' => new CategoryShortResource(Category::where('id', $this->category_id)->first()),
// 'user' => new UserShortResource(User::where('id', $this->user_id)->first()),
// 'project' => new ProjectShortResource(Project::where('id', $this->project_id)->first()),
// 'created_at' => $this->created_at,
// 'updated_at' => $this->updated_at,

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