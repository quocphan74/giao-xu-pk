"use client";
import { useState } from 'react';
import { LISTNUMBER, LISTTITLE, SEEALLTEXT, TITLESECTION } from '@/constants/constants';
import { News } from '@/types/news';
import SkeletonCard from '@/components/keletonCard';
import { CardProps } from '@/types/cardProps';
import Pagination from '@/components/Pagination';
import useNews from '@/hooks/useNews';
import ItemsNews from '@/components/SidebarNewsClient';
import React from 'react';
import Card from '@/components/Card';
// Main NewsListPage Component
const NewsListPage: React.FC = () => {
    const [page, setPage] = useState(1);
    const { data, totalPages, loading, error } = useNews(page);
    return (
        <div className="container mx-auto px-4 py-8 flex">
            <div className="flex flex-col lg:flex-row gap-6 w-full">
                {/* Main News List */}
                <div className="lg:w-2/3 space-y-6">
                    <h1 className="text-2xl font-bold mb-4 text-blue-600">{LISTTITLE.NEWS}</h1>
                    <div className="space-y-4 mt-2">
                        {loading ? (
                            Array.from({ length: LISTNUMBER.COUNT_LOADER }).map((_, idx) => <SkeletonCard key={idx} />)
                        ) : (
                            data.map((news) => <Card key={news.id} {...news} />)
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
                <ItemsNews />
            </div>
        </div >
    );
};

export default NewsListPage;