interface ContentItem {
    type: 'text' | 'image';
    value?: string; // For type 'text'
    src?: string;   // For type 'image'
    alt?: string;   // For type 'image'
}

export interface News {
    id: number;
    title: string;
    date: string;
    content: ContentItem[];
}

interface Author {
    author_id: number;
    name: string;
}
interface Image {
    image_id: number;
    url: string;
    alt_text: string;
}
interface ArticleSection {
    section_id: number;
    article_id: number;
    title: string;
    content: string;
    section_order: number;
    image: Image;
}
export interface Sermon {
    id: number;
    title: string;
    date: string;
    description: string;
    image: Image;
    author: Author;
    sections: ArticleSection[];
}

export interface Announcement {
    id: number;
    title: string;
    description: string;
    date: string;
}

export interface Event {
    id: number;
    title: string;
    date: string;
    time: string;
}

export interface Media {
    id: number;
    type: 'image' | 'video';
    url: string;
    title: string;
}

export interface CardProps {
    id: number;
    title: string;
    date: string;
    text: string;
    image?: { src: string; alt: string };
    linkPath: string;
}