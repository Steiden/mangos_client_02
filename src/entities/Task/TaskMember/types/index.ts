import { User } from "@/entities/User/types";
import { Task } from "../../types";

export type TaskMember = {
    id: number;
    task: Task;
    user: User;
    created_at: Date;
    updated_at: Date;
}