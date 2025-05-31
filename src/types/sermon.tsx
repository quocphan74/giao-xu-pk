import { BaseTimestamps } from "./base";
import { SermonBlock } from "./sermonBlocks";

export interface Sermon extends BaseTimestamps {
    id: number;
    title: string;
    preacher_name: string;
    sermon_blocks?: SermonBlock[];
}