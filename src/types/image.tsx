import { BaseTimestamps } from "./base";

export interface Image extends BaseTimestamps {
  id: number;
  url: string;
  alt: string;
}