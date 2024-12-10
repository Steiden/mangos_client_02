import { Tag } from "../../Tag/types";
import { Task } from "../../types";

export type TaskTag = {
    id: number;
    task: Task;
    tag: Tag;
    created_at: Date;
    updated_at: Date;
}