import { BaseTimestamps } from "./base";
import { NewsBlock } from "./newsBlock";

export interface News extends BaseTimestamps {
  id: number;
  title: string;
  is_published: boolean;
  news_blocks?: NewsBlock[];
}