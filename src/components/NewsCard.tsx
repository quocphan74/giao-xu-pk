
import React from 'react';
import { News } from '@/data/data';
import Image from 'next/image';
const NewsCard: React.FC<News> = ({ title, description, image, date }) => (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
        <div className="flex flex-col sm:flex-row">
            <Image src={image} width={500} height={200} alt={title} className="w-full sm:w-40 h-40 object-cover" loading="lazy" />
            <div className="p-4 flex-1">
                <h3 className="text-lg font-semibold line-clamp-2">{title}</h3>
                <p className="text-gray-600 text-sm mt-1 line-clamp-2">{description}</p>
                <div className="flex justify-between items-center mt-3">
                    <span className="text-gray-500 text-sm">{date}</span>
                    <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Đọc thêm</a>
                </div>
            </div>
        </div>
    </div>
);

export default NewsCard;