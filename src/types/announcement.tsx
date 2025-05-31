
import { AnnouncementBlock } from "./announcementBlock";
import { BaseTimestamps } from "./base";

export interface Announcement extends BaseTimestamps {
    id: number;
    title: string;
    announcement_blocks?: AnnouncementBlock[];
}