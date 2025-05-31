import { News } from "./news";
import { NewsBlockImages } from "./newsBlockImages";

export interface NewsBlock {
  id: number;
  news_id: number;
  title: string;
  content: string;
  order: number;
  news_block_images?: NewsBlockImages[];
}