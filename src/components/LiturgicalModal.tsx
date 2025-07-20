import { MassSchedule } from "@/types/massSchedule";
import { formatDate, getDayOfWeek, getTimeFromString } from "@/utils/common";
interface ModalProps {
    event: MassSchedule;
    isOpen: boolean;
    onClose: () => void;
  }
const LiturgicalModal: React.FC<ModalProps> = ({ event, isOpen, onClose }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-60 backdrop-blur-sm min-h-screen"></div>
        <div className="relative bg-white rounded-lg p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto z-60">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">{event.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Đóng"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            </button>
          </div>
          <p className="text-gray-600 text-sm mb-2">
            <strong>Ngày:</strong> {getDayOfWeek(event.mass_date)} - {formatDate(event.mass_date)}
          </p>
          <p className="text-gray-600 text-sm mb-2">
            <strong>Giờ lễ:</strong>{' '}
            {getTimeFromString(event.mass_time)}
          </p>
          <p className="text-gray-600 text-sm mb-2">
            <strong>Màu phụng vụ:</strong> {event.liturgical_color}
          </p>
          <p className="text-gray-600 text-sm mb-2">
            <strong>Bài đọc:</strong>{' '}
            {event.first_reading && event.second_reading ? (
              <>
                Bài đọc 1: {event.first_reading}, Bài đọc 2: {event.second_reading}
              </>
            ) : event.first_reading ? (
              <>Bài đọc 1: {event.first_reading}</>
            ) : event.second_reading ? (
              <>Bài đọc 2: {event.second_reading}</>
            ) : (
              'Không có bài đọc'
            )}
          </p>
          <p className="text-gray-600 text-sm mb-2">
            <strong>Chủ tế:</strong> {event.celebrant}
          </p>
          {event.description && (
            <p className="text-gray-600 text-sm mb-2">
              <strong>Ghi chú:</strong> {event.description}
            </p>
          )}
          <button
            onClick={onClose}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Đóng
          </button>
        </div>
      </div>
    );
  };
  
  export default LiturgicalModal;