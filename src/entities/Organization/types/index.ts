import { UserShort } from "@/entities/user/types";
import { ActivityType } from "../activity_type/types";
import { ProjectShort } from "@/entities/project";
import { CategoryShort, TagShort } from "@/entities/task";
import { OrganizationEmployee } from "../organization_employee";
import { Division } from "../division";
import { PostShort } from "../post";

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
    divisions: Division[];
    posts: PostShort[];
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