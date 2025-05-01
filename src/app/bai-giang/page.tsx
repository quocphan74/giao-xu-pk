"use client";
import { useState, useEffect } from 'react';
import { sermonsData } from '../../data/data';
import { CardProps, Sermon } from '@/utils/interface';
import Card from '@/components/Card';
import { SEEALLTEXT } from '@/constants/constants';

// Main NewsListPage Component
const SermonListPage: React.FC = () => {
    const [page, setPage] = useState(1);
    const sermonToCardProps = ({ id, title, date, description, image }: Sermon): CardProps => ({
        id,
        title,
        date,
        text: description,
        image: { src: image.url, alt: image.alt_text },
        linkPath: SEEALLTEXT.SERMON.url,
      });
    
      const sermonCards: CardProps[] = sermonsData.map(sermonToCardProps);
    return (
        <div className="container mx-auto px-4 py-8 flex">
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Main News List */}
                <div className="space-y-6">
                    <h1 className="text-2xl font-bold mb-4 text-blue-600 clim">Bài giảng mới / Lời Chúa hàng tuần</h1>
                    <div className="space-y-4 mt-2">
                        {sermonCards.map((sermon) => (
                            <Card key={sermon.id} {...sermon} />
                        ))}
                    </div>
                    {/* Pagination */}
                    <div className="flex justify-center mt-8">
                        {[1, 2, 3, 4, 5].map((num) => (
                            <button
                                key={num}
                                onClick={() => setPage(num)}
                                className={`mx-1 px-3 py-1 rounded ${page === num ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                            >
                                {num}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SermonListPage;