import { Organization } from "@/entities/organization/types";
import { Project } from "@/entities/project/types";
import { Task } from "@/entities/task";
import { User } from "@/entities/user/types";

export type MangosContextType = {
    user: User | null;
    organization: Organization | null;
    project: Project | null;
    task: Task | null;
}