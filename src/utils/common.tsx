import { Image } from "@/types/image";

/**
 * Trả về tên thứ trong tuần từ chuỗi ngày (yyyy-mm-dd)
 * @param dateString - Chuỗi ngày hợp lệ (ISO string: yyyy-mm-dd)
 * @returns Tên thứ bằng tiếng Việt (VD: 'Thứ Hai', 'Chúa Nhật')
 */
export const getDayOfWeek = (dateString: string): string => {
    const daysOfWeek = [
        'Chủ Nhật',
        'Thứ Hai',
        'Thứ Ba',
        'Thứ Tư',
        'Thứ Năm',
        'Thứ Sáu',
        'Thứ Bảy',
    ];
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
        return 'Không xác định';
    }
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex] ?? 'Không xác định'; // Fallback in case of unexpected issues
};
/**
 * Trả về định dạng ngày "dd/MM/YYYY"
 * @param dateString - Chuỗi ngày hợp lệ (ISO string: yyyy-mm-dd)
 * @returns Định dạng ngày "20/11/1999"
 */
export const formatDate = (dateString: string | Date): string => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString.toString();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};

export function getFirstImageUrl(images?: Image[]): {id: number; url: string; alt: string } | null {
  if (!images || images.length === 0) return null;
  const img = images[0];
  return img ? { id: img.id ,url: img.url, alt: img.alt } : null;
}

export function getTimeFromString(dateTimeString: string) {
  const date = new Date(dateTimeString);
  return isNaN(date.getTime()) ? "Invalid" : 
    `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
}