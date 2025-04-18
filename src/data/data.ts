export interface News {
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
}

export interface Sermon {
    id: number;
    title: string;
    description: string;
    date: string;
}

export interface Announcement {
    id: number;
    title: string;
    description: string;
    date: string;
}

export interface Event {
    id: number;
    title: string;
    date: string;
    time: string;
}

export interface Media {
    id: number;
    type: 'image' | 'video';
    url: string;
    title: string;
}
// Dữ liệu mẫu
export const newsData: News[] = [
    { id: 1, title: 'Thánh Lễ Làm phép Dầu và Tri ân Đức Tổng Giám mục Giuse Nguyễn Chí Linh', description: 'Tri ân Đức Tổng Chí Linh Tâm đậm tình Chúa, giàu tình thương chiên. Nắng mưa vất vả truân chuyên, Giúp Giáo phận Huế tiến lên không ngừng. Đó là tâm tình của toàn thể con cái Tổng…', image: '/images/img_new_1.jpg', date: '18/04/2025' },
    { id: 2, title: 'Trực tiếp: Thánh Lễ Làm Phép Dầu 2025 và Tri Ân Đức TGM Giuse Nguyễn Chí Linh', description: 'Thánh Lễ sẽ được cử hành vào lúc 08g00 ngày 17.4.2025 do Đức TGM Giuse Nguyễn Chí Linh chủ tế tại Nhà thờ Chính tòa Phủ Cam.', image: '/images/img_new_2.jpg', date: '17/04/2025' },
];

export const sermonsData: Sermon[] = [
    { id: 1, title: 'Bài giảng: Sức mạnh của niềm tin', description: 'Hãy cùng tìm hiểu cách niềm tin dẫn dắt chúng ta qua khó khăn.', date: '18/04/2025' },
    { id: 2, title: 'Lời Chúa: Tình yêu thương vô điều kiện', description: 'Lời Chúa dạy chúng ta về tình yêu và sự tha thứ.', date: '17/04/2025' },
];

export const announcementsData: Announcement[] = [
    { id: 1, title: 'Thông báo quan trọng', description: 'Hệ thống sẽ bảo trì từ 10h-12h ngày 20/04/2025.', date: '16/04/2025' },
    { id: 2, title: 'Cập nhật lịch sinh hoạt', description: 'Lịch sinh hoạt mới đã được cập nhật trên website.', date: '15/04/2025' },
];

export const eventsData: Event[] = [
    { id: 1, title: 'Lễ Phục Sinh 2025', date: '20/04/2025', time: '08:00 AM' },
    { id: 2, title: 'Ngày cầu nguyện cộng đồng', date: '25/04/2025', time: '06:00 PM' },
];

export const mediaData: Media[] = [
    { id: 1, type: 'image', url: '/images/img_media_1.jpg', title: 'Hình ảnh Lễ Giáng Sinh 2024' },
    { id: 2, type: 'video', url: '/media/test.mp4', title: 'Video cầu nguyện buổi sáng' },
    { id: 3, type: 'image', url: '/images/img_media_1.jpg', title: 'Hình ảnh Ngày hội gia đình' },
];