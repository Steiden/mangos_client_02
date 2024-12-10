import { ExecutionStatus } from "@/entities/ExecutionStatus/types";
import { Organization } from "@/entities/Organization/types";
import { User } from "@/entities/User/types";

export type Project = {
    id: number;
    name: string;
    description: string;
    avatar: string;
    execution_status: ExecutionStatus;
    user: User;
    organization: Organization;
    created_at: Date;
    updated_at: Date;
}