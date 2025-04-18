import React from 'react';
import { Sermon } from '../data/data';

const SermonCard: React.FC<Sermon> = ({ title, description, date }) => (
  <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
    <h3 className="text-md font-semibold line-clamp-1">{title}</h3>
    <p className="text-gray-600 text-sm mt-1 line-clamp-2">{description}</p>
    <div className="flex justify-between items-center mt-3">
      <span className="text-gray-500 text-sm">{date}</span>
      <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Xem thêm</a>
    </div>
  </div>
);

export default SermonCard;