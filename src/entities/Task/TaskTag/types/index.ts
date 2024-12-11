import { TagShort } from "../../Tag/types";
import { TaskShort } from "../../types";

export type TaskTag = {
    id: number;
    task: TaskShort;
    tag: TagShort;
    created_at: Date;
    updated_at: Date;
}

export type TaskTagFillable = {
    task_id?: number;
    tag_id?: number;
}