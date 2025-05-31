import { Image } from "./image";
import { NewsBlock } from "./newsBlock";

export interface NewsBlockImages {
  id: number;
  news_block_id: number;
  image_id: number;
  order: number;
  image?: Image;
}