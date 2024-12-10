import { User } from "@/entities/User/types";
import { ActivityType } from "../ActivityType/types";

export type Organization = {
    id: number;
    full_name: string;
    name: string;
    address: string;
    phone: string;
    activity_type: ActivityType;
    user: User;
    created_at: Date;
    updated_at: Date;
}