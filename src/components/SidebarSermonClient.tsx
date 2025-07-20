
"use client";
import { LISTNUMBER, SEEALLTEXT } from "@/constants/constants";
import { CardProps } from "@/types/cardProps";
import { Sermon } from "@/types/sermon";
import { useEffect, useState } from "react";
import SidebarSermon from "./SidebarSermon";
import SkeletonCard from "./keletonCard";
import useSermons from "@/hooks/useSermons";

export default function SidebarSermonClient() {
    const { data,totalPages, loading: sermonLoading } = useSermons(1);
    return (
        <div className="lg:w-1/3 space-y-2">
            <h3 className="text-2xl font-bold mb-4 text-blue-600 clim">Bài giảng gần đây</h3>
            {sermonLoading ? (
                Array.from({ length: LISTNUMBER.COUNT_LOADER }).map((_, idx) => <SkeletonCard key={idx} />)
            ) : (
                data.map((sermon) => (
                    <SidebarSermon key={sermon.id} {...sermon} />
                ))
            )}
        </div>
    );
};