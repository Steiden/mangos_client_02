import { UserShort } from "@/entities/User/types";
import { ProjectShort } from "../../types";

export type ProjectMember = {
    id: number;
    project: ProjectShort;
    user: UserShort;
    created_at: Date;
    updated_at: Date;
}

export type ProjectMemberFillable = {
    project_id?: number;
    user_id?: number;
}