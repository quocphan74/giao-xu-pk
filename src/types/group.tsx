import { BaseTimestamps } from "./base";

export interface Group extends BaseTimestamps{
    id: number;
    name: string;
    description: string;
    member_count: number;
}