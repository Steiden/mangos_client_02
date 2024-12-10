import { Division } from "../../Division/types";

export type Post = {
    id: number;
    name: string;
    division: Division;
    created_at: Date;
    updated_at: Date;
}