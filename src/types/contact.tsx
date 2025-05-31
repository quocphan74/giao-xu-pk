import { BaseTimestamps } from "./base";

export interface Contact extends BaseTimestamps {
    id: number;
    name: string;
    email: string;
    phone: string;
}