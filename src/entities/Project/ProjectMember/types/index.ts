import { UserShort } from "@/entities/User/types";
import { ProjectShort } from "../../types";

export type ProjectMember = {
    id: number;
    project: ProjectShort;
    user: UserShort;
    created_at: Date;
    updated_at: Date;
}