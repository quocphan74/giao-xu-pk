import React from 'react';
import { Sermon } from '../data/data';
import Image from 'next/image';
import Link from 'next/link';
const SermonCard: React.FC<Sermon> = ({ id, title, description, date, image }) => {
    return (
      <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow p-4">
            <div className="flex flex-col sm:flex-row">
                <Image
                    src={image.url}
                    width={500}
                    height={200}
                    alt={image.alt_text}
                    className="w-full sm:w-40 h-40 object-cover"
                    loading="lazy"
                />
                <div className="p-4 flex-1">
                    <Link href={`/bai-giang/${id}`}>
                        <h3 className="text-blue-600 hover:underline text-lg font-bold line-clamp-1">{title}</h3>
                    </Link>
                    <p className="text-gray-600 text-sm mt-1 line-clamp-2">{description}</p>
                    <div className="flex justify-between items-center mt-3">
                        <span className="text-gray-500 text-sm">{date}</span>
                        <Link href={`/bai-giang/${id}`}>
                            <p className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline">Xem chi tiết</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SermonCard;