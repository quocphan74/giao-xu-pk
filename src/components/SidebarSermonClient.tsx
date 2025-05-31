
"use client";
import { LISTNUMBER, SEEALLTEXT } from "@/constants/constants";
import { CardProps } from "@/types/cardProps";
import { Sermon } from "@/types/sermon";
import { useEffect, useState } from "react";
import SidebarSermon from "./SidebarSermon";
import SkeletonCard from "./keletonCard";

export default function SidebarSermonClient() {
    const [isSidebarLoading, setIsSidebarLoading] = useState(true);
    const [sermonList, setSermonList] = useState<Sermon[]>([]);
    useEffect(() => {
        async function fetchSermons() {
            try {
                setIsSidebarLoading(true);
                const res = await fetch(`/api/sermon?page=1&limit=5`);
                if (!res.ok) throw new Error(`Lỗi HTTP: ${res.status}`);
                const data = await res.json();

                setSermonList(data.data);
            } catch (err: any) {
                console.error(err);
            } finally {
                setIsSidebarLoading(false);
            }
        }
        fetchSermons();
    }, []);
    const mapSermonToCardProps = (sermon: Sermon): CardProps => ({
        id: sermon.id,
        title: sermon.title,
        date: sermon.created_at || '',
        text: sermon.sermon_blocks?.[0]?.content || '',
        image: sermon.sermon_blocks?.[0]?.sermon_block_images
            ?.map(img => img.image)
            .filter((img) => !!img),
        linkPath: SEEALLTEXT.SERMON.url
    });
    return (
        <div className="lg:w-1/3 space-y-2">
            <h3 className="text-2xl font-bold mb-4 text-blue-600 clim">Bài giảng gần đây</h3>
            {isSidebarLoading ? (
                Array.from({ length: LISTNUMBER.COUNT_LOADER }).map((_, idx) => <SkeletonCard key={idx} />)
            ) : (
                sermonList.map((sermon) => (
                    <SidebarSermon key={sermon.id} {...mapSermonToCardProps(sermon)} />
                ))
            )}
        </div>
    );
};