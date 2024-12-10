import { UserShort } from "@/entities/User/types";
import { ActivityType } from "../ActivityType/types";

export type Organization = {
    id: number;
    full_name: string;
    name: string;
    address: string;
    phone: string;
    activity_type: ActivityType;
    user: UserShort;
    members: UserShort[];
    created_at: Date;
    updated_at: Date;
}

export type OrganizationShort = {
    id: number;
    full_name: string;
    name: string;
    address: string;
    phone: string;
    activity_type_id: number;
    user_id: number;
    created_at: Date;
    updated_at: Date;
}