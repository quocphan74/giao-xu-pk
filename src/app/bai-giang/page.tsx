
"use client";
import { LISTNUMBER, LISTTITLE, SEEALLTEXT } from '@/constants/constants';
import { Sermon } from '@/types/sermon';
import { CardProps } from '@/types/cardProps';
import SkeletonCard from '@/components/keletonCard';
import Card from '@/components/Card';
import SidebarSermonClient from '@/components/SidebarSermonClient';
import { useCallback, useEffect, useState } from 'react';
import Pagination from '@/components/Pagination';
import useSermons from '@/hooks/useSermons';
import React from 'react';
const MemoizedCard = React.memo(Card);
export default function SermonListPage() {
    const [page, setPage] = useState(1);
    const { data,totalPages, loading: sermonLoading } = useSermons(page);
    return (
        <div className="container mx-auto px-4 py-8 flex">
            <div className="flex flex-col lg:flex-row gap-6 w-full">
                {/* Main Sermon List */}
                <div className="lg:w-2/3 space-y-6">
                    <h1 className="text-2xl font-bold mb-4 text-blue-600">{LISTTITLE.SERMON}</h1>
                    <div className="space-y-4 mt-2">
                        {sermonLoading ? (
                            Array.from({ length: LISTNUMBER.COUNT_LOADER }).map((_, idx) => <SkeletonCard key={idx} />)
                        ) : (
                            data.map((sermon) => <MemoizedCard key={sermon.id} {...sermon} />)
                        )}
                    </div>
                    {/* Pagination */}
                    <Pagination
                        currentPage={page}
                        totalPages={totalPages}
                        onPageChange={(page) => setPage(page)}
                    />
                </div>
                {/* Sidebar */}
                <SidebarSermonClient />
            </div>
        </div>
    );
};
