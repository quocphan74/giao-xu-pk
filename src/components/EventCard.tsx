'use client';
import React, { useState } from 'react';
import { LiturgicalEvent } from '@/utils/interface';
import { formatDate, getDayOfWeek } from '@/utils/common';
import LiturgicalModal from './LiturgicalModal';

const EventCard: React.FC<LiturgicalEvent> = ({
  id,
  title,
  date,
  massTimes,
  liturgicalColor,
  readings,
  celebrant,
  notes, }) => {
  const dow = getDayOfWeek(date);
  const formattedDate = formatDate(date);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow mb-2">
        <h3 className="text-md font-semibold line-clamp-1">{title}</h3>
        <div>
          <p className="text-gray-600 text-sm mb-2">
              <strong>Ngày:</strong> {getDayOfWeek(date)} - {formatDate(date)}
            </p>
            <p className="text-gray-600 text-sm mb-2">
              <strong>Giờ lễ:</strong>{' '}
              {massTimes.length > 0 ? massTimes.join(', ') : 'Chưa xác định'}
            </p>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2 block">Chi tiết</button>
      </div>
      <LiturgicalModal
        event={{ id, title, date, massTimes, liturgicalColor, readings, celebrant, notes }}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
  ;

export default EventCard;