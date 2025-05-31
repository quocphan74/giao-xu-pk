import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { formatDate, getFirstImageUrl } from '@/utils/common';
import { CardProps } from '@/types/cardProps';


const Card: React.FC<CardProps> = ({ id, title, date, text, image, linkPath }) => {
    const firstImage = getFirstImageUrl(image);
    
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow p-4">
            <div className="flex flex-col sm:flex-row">
                {firstImage && firstImage.url && (
                    <Image
                        src={firstImage.url || ""}
                        width={500}
                        height={200}
                        alt={firstImage.alt || ""}
                        className="w-full sm:w-40 h-40 object-cover"
                        loading="lazy"
                    />
                )}
                <div className="p-4 flex-1">
                    <Link href={`${linkPath}/${id}`}>
                        <h3 className="text-blue-600 hover:underline text-lg font-bold line-clamp-1">{title}</h3>
                    </Link>
                    <p className="text-gray-600 text-sm mt-1 line-clamp-2">{text}</p>
                    <div className="flex justify-between items-center mt-3">
                        <span className="text-gray-500 text-sm">{formatDate(date)}</span>
                        <Link href={`${linkPath}/${id}`}>
                            <p className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline">Xem chi tiết</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;