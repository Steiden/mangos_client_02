import { ExecutionStatus } from "@/entities/execution_status/types";
import { OrganizationShort } from "@/entities/organization/types";
import { TaskMiddle } from "@/entities/task/types";
import { UserShort } from "@/entities/user/types";
import { ProjectMember } from "../project_member";

export type Project = {
    id: number;
    name: string;
    description: string;
    avatar: string;
    execution_status: ExecutionStatus;
    user: UserShort;
    organization: OrganizationShort;
    members: ProjectMember[];
    tasks: TaskMiddle[];
    created_at: Date;
    updated_at: Date;
}

export type ProjectShort = {
    id: number;
    name: string;
    description: string;
    avatar: string;
    execution_status_id: number;
    user_id: number;
    organization_id: number;
    created_at: Date;
    updated_at: Date;
}

export type ProjectFillable = {
    name?: string;
    description?: string;
    avatar?: string;
    execution_status_id?: number;
    user_id?: number;
    organization_id?: number;
}