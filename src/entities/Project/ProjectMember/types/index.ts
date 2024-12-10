import { User } from "@/entities/User/types";
import { Project } from "../../types";

export type ProjectMember = {
    id: number;
    project: Project;
    user: User;
    created_at: Date;
    updated_at: Date;
}