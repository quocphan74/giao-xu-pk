import { Image } from "@/types/image";
export interface CardProps {
    id: string | number;
    title: string;
    date: string | Date;
    text: string;
    image?: Image[];
    linkPath: string;
}