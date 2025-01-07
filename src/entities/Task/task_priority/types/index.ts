export type TaskPriority = {
    id: number;
    name: string;
    created_at: Date;
    updated_at: Date;
}

export type TaskPriorityFillable = {
    name?: string;
}