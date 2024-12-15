import { UserShort } from "@/entities/User/types";
import { ActivityType } from "../ActivityType/types";
import { ProjectShort } from "@/entities/Project";
import { CategoryShort, TagShort } from "@/entities/Task";
import { OrganizationEmployee } from "../OrganizationEmployee";

export type Organization = {
    id: number;
    description: string;
    full_name: string;
    name: string;
    address: string;
    phone: string;
    activity_type: ActivityType;
    user: UserShort;
    members: OrganizationEmployee[];
    projects: ProjectShort[];
    categories: CategoryShort[];
    tags: TagShort[];
    created_at: Date;
    updated_at: Date;
}

export type OrganizationShort = {
    id: number;
    description: string;
    full_name: string;
    name: string;
    address: string;
    phone: string;
    activity_type_id: number;
    user_id: number;
    created_at: Date;
    updated_at: Date;
}

export type OrganizationFillable = {
    description?: string;
    full_name?: string;
    name?: string;
    address?: string;
    phone?: string;
    activity_type_id?: number;
    user_id?: number;
}