'use client';
import React, { useState } from 'react';
import { formatDate, getDayOfWeek, getTimeFromString } from '@/utils/common';
import LiturgicalModal from './LiturgicalModal';
import { MassSchedule } from '@/types/massSchedule';
interface EventCardProps {
  event: MassSchedule;
}
const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const {
    id,
    title,
    description,
    mass_date,
    mass_time,
    liturgical_color,
    first_reading,
    second_reading,
    celebrant
  } = event;
  const date = getDayOfWeek(mass_date);
  const formattedDate = formatDate(mass_date);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const time = getTimeFromString(mass_time);
  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow mb-2">
        <h3 className="text-md font-semibold line-clamp-1">{title}</h3>
        <div>
          <p className="text-gray-600 text-sm mb-2">
            <strong>Ngày:</strong> {date} - {formattedDate}
          </p>
          <p className="text-gray-600 text-sm mb-2">
            <strong>Giờ lễ:</strong>{' '}
            {time}
          </p>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2 block">Chi tiết</button>
      </div>
      <LiturgicalModal
        event={event}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
  ;

export default EventCard;