import { Announcement } from "./announcement";
import { announcementBlockImage } from "./announcementBlockImage";

export interface AnnouncementBlock {
    id: number;
    announcement_id: number;
    content: string;
    order: number;
    announcement?: Announcement;
    announcement_block_images?: announcementBlockImage[]
}