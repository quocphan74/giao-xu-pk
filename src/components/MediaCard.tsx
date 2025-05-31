import React from 'react';
import Image from 'next/image';
import { Media } from '@/utils/interface';

const MediaCard: React.FC<Media> = ({ type, url, title }) => (
    <div className="relative">
        {type === 'video' ? (
            <video
                className="w-full object-cover rounded-lg"
                controls
                src={url}
                title={title}
                // autoPlay // Bỏ comment nếu muốn video tự động phát
                muted // Đảm bảo video không tự động phát âm thanh nếu autoPlay được bật
                loop // Lặp lại video (tùy chọn)
            />
        ) : (
            <Image
                src={url}
                alt={title}
                width={500}
                height={200}
                className="w-full h-36 object-cover rounded-lg"
                loading="lazy"
            />
        )}
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{title}</p>
    </div>
);

export default MediaCard;