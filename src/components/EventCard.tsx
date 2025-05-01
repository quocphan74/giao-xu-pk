import React from 'react';
import { Event } from '@/utils/interface';

const EventCard: React.FC<Event> = ({ title, date, time }) => (
  <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow mb-2">
    <h3 className="text-md font-semibold line-clamp-1">{title}</h3>
    <p className="text-gray-600 text-sm mt-1">{date} - {time}</p>
    <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2 block">Chi tiết</a>
  </div>
);

export default EventCard;