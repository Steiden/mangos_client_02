import { ExecutionStatus } from "@/entities/ExecutionStatus/types";
import { OrganizationShort } from "@/entities/Organization/types";
import { TaskMiddle } from "@/entities/Task/types";
import { UserShort } from "@/entities/User/types";
import { ProjectMember } from "../ProjectMember";

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