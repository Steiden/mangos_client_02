import { UserShort } from "@/entities/User/types";
import { OrganizationShort } from "../../types";
import { PostShort } from "../../Post/types";

export type OrganizationEmployee = {
    id: number;
    organization: OrganizationShort;
    user: UserShort;
    post: PostShort;
    created_at: Date;
    updated_at: Date;
}

export type OrganizationEmployeeFillable = {
    organization_id?: number;
    user_id?: number;
    post_id?: number;
}