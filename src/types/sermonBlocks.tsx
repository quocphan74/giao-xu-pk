import { Sermon } from "./sermon";
import { SermonBlockImages } from "./sermonBlockImages";

export interface SermonBlock {
    id: number;
    sermon_id: number;
    title: string;
    content: string;
    order: number;
    sermon?: Sermon;
    sermon_block_images?: SermonBlockImages[];
}