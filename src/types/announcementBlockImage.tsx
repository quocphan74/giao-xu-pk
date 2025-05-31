import { AnnouncementBlock } from "./announcementBlock";
import { Image } from "./image";
export interface announcementBlockImage {
    id: number;
    announcement_block_id: number;
    image_id: number;
    order: number;
    announcement_block?: AnnouncementBlock
    image?: Image;
}