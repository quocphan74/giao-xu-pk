import { Image } from "@/types/image";

interface ContentItem {
    type: 'text' | 'image';
    value?: string;
    image?: Image[];
}

export interface News {
    id: number;
    title: string;
    date: string;
    content: ContentItem[];
}

interface Author {
    id: number;
    name: string;
}
// interface Image {
//     id: number;
//     url?: string;
//     alt?: string;
// }
interface ArticleSection {
    id: number;
    title: string;
    content: string;
    section_order: number;
    image?: Image[];
}
export interface Sermon {
    id: number;
    title: string;
    date: string;
    description: string;
    image?: Image[];
    author: Author;
    sections: ArticleSection[];
}

export interface Notification {
    id: number;
    title: string;
    description: string;
    date: string;
    image?: Image[];
    isNew: boolean;
}

export interface Media {
    id: number;
    type: 'image' | 'video';
    url: string;
    title: string;
    alt?: string;
}

export interface LiturgicalEvent {
    id: number;
    date: string;
    title: string;
    massTimes: string[];
    liturgicalColor: 'Trắng' | 'Đỏ' | 'Tím' | 'Xanh' | 'Hồng' | 'Vàng';
    readings: {
        firstReading: string;
        psalm?: string;
        secondReading?: string;
        gospel: string;
    };
    celebrant: string;
    notes?: string;
}




interface ImageData {
    id: string;
    url: string;
    alt: string | null;
    created_at: string;
    updated_at: string;
}

interface NewsContentImage {
    order: number;
    image: ImageData;
}

interface NewsContent {
    id: string;
    title: string;
    content: string;
    order: number;
    images: NewsContentImage[];
}

export interface NewsItem {
    id: string;
    title: string;
    created_at: string;
    updated_at: string;
    contents: NewsContent[];
}