"use client";
import { LISTNUMBER, LISTTITLE, SEEALLTEXT } from '@/constants/constants';
import { News } from '@/types/news';
import dynamic from 'next/dynamic';
import SkeletonCard from '@/components/keletonCard';
import { CardProps } from '@/types/cardProps';
import useNews from '@/hooks/useNews';

const SidebarNews = dynamic(() => import('@/components/SidebarNews'), {
    ssr: false
});
const ItemsNews: React.FC = () => {
    const { data, totalPages, loading, error } = useNews(1);
    return (
        <div className="lg:w-1/3 space-y-6">
            <h2 className="text-xl font-bold mb-4 text-blue-600 flex-shrink-0">{LISTTITLE.RECOMMENT_NEWS}</h2>
            <div className='mt-2 overflow-y-auto max-h-96'>
                {loading ? (
                    Array.from({ length: LISTNUMBER.COUNT_LOADER }).map((_, idx) => <SkeletonCard key={idx} />)
                ) : (
                    data.map((news) => (
                        <SidebarNews key={news.id} {...news} />
                    ))
                )}
            </div>
        </div>
    );
};
export default ItemsNews;