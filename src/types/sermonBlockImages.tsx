import { SermonBlock } from "./sermonBlocks";
import { Image } from "./image";
export interface SermonBlockImages {
    id: number;
    sermon_block_id: number;
    image_id: number;
    order: number;
    sermon_block?: SermonBlock
    image?: Image;
}