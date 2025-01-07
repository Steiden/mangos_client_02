import { DivisionShort } from "../../division/types";

export type Post = {
    id: number;
    name: string;
    division: DivisionShort;
    created_at: Date;
    updated_at: Date;
}

export type PostShort = {
    id: number;
    name: string;
    division_id: number;
    created_at: Date;
    updated_at: Date;
}

export type PostFillable = {
    name?: string;
    division_id?: number;
}