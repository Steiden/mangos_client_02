import { Organization } from "@/entities/Organization/types";
import { Project } from "@/entities/Project/types";
import { User } from "@/entities/User/types";

export type MangosContextType = {
    user: User | null;
    organization: Organization | null;
    project: Project | null;
}