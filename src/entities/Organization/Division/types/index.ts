import { UserShort } from "@/entities/User";
import { PostShort } from "../../Post";
import { OrganizationShort } from "../../types";

export type Division = {
    id: number;
    name: string;
    organization: OrganizationShort;
    user: UserShort;
    posts: PostShort[];
    created_at: Date;
    updated_at: Date;
}

export type DivisionShort = {
    id: number;
    name: string;
    organization_id: number;
    created_at: Date;
    updated_at: Date;
}

export type DivisionFillable = {
    name?: string;
    organization_id?: number;
    user_id?: number;
}