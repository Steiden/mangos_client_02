import { UserShort } from "@/entities/User/types";
import { TaskShort } from "../../types";

export type TaskMember = {
    id: number;
    task: TaskShort;
    user: UserShort;
    created_at: Date;
    updated_at: Date;
}

export type TaskMemberFillable = {
    task_id?: number;
    user_id?: number;
}