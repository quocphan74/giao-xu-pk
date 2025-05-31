import { BaseTimestamps } from "./base";

export interface Role extends BaseTimestamps {
  id: number;
  name: string;
  description: string;
}