import { Announcement } from '@/utils/interface';
import React from 'react';

const AnnouncementCard: React.FC<Announcement> = ({ title, description, date }) => (
  <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow mb-2">
    <div className="flex items-center">
      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded mr-2">Mới</span>
      <h3 className="text-md font-semibold line-clamp-1">{title}</h3>
    </div>
    <p className="text-gray-600 text-sm mt-1 line-clamp-2">{description}</p>
    <div className="flex justify-between items-center mt-3">
      <span className="text-gray-500 text-sm">{date}</span>
      <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Xem chi tiết</a>
    </div>
  </div>
);

export default AnnouncementCard;