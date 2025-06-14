"use client";
import { useState } from 'react';
import { announcementsData, newsData } from '../../data/data';
import SidebarNews from '@/components/SidebarNews';
import NotificationCard from '@/components/Notification';


// Main NotifyListPage Component
const NotifyListPage: React.FC = () => {
    const [page, setPage] = useState(1);

    return (
        <div className="container mx-auto px-4 py-8 flex">
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Main News List */}
                <div className="lg:w-2/3 space-y-6">
                    <h1 className="text-2xl font-bold mb-4 text-blue-600">Tin Tức - Tổng Giáo Phận Huế</h1>
                    <div className="space-y-4 mt-2">
                    {announcementsData.map((announcement) => (
                        <NotificationCard key={announcement.id} {...announcement} />
                    ))}
                    </div>
                    {/* Pagination */}
                    <div className="flex justify-center mt-8">
                        {[1, 2, 3, 4, 5].map((num) => (
                            <button
                                key={num}
                                onClick={() => setPage(num)}
                                className={`mx-1 px-3 py-1 rounded ${page === num ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                            >
                                {num}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:w-1/3 space-y-6">
                    <h2 className="text-2xl font-bold mb-4 text-blue-600 clim">Tin Bài Mới Nhất</h2>
                    {/* {newsData.map((news) => (
                        <SidebarNews key={news.id} {...news} />
                    ))} */}
                </div>
            </div>
        </div >
    );
};

export default NotifyListPage;