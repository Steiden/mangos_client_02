import { User } from "@/entities/User/types";
import { Organization } from "../../types";
import { Post } from "../../Post/types";

export type OrganizationEmployee = {
    id: number;
    organization: Organization;
    user: User;
    post: Post;
    created_at: Date;
    updated_at: Date;
}