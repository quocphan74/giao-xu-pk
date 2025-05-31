import { BaseTimestamps } from "./base";

export interface MassSchedule extends BaseTimestamps {
    id: number;
    title: string;
    description: string;
    mass_date: string;
    mass_time: string;
    liturgical_color: string;
    first_reading: string;
    second_reading: string;
    celebrant: string;
}