import { use } from "react";
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { newsData, sermonsData } from '../../../data/data';
import SidebarSermon from "@/components/SidebarSermon";
import SidebarNews from "@/components/SidebarNews";
export default function NotifyDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const numericId = parseInt(id);
    if (!id) {
        notFound();
    }
    const data = newsData.find(item => item.id === numericId)
    return (
        <div className="container mx-auto p-4 flex-1">
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md lg:w-2/3 space-y-6">
                    {/* Tiêu đề */}
                    <h1 className="text-3xl font-bold text-red-500 mb-4">{data?.title}</h1>

                    {/* Thời gian */}
                    <p className="text-gray-500 text-sm mb-6">{data?.date}</p>
                    {/* Nội dung bài viết */}
                    {data?.content.map((item, index) => (
                        <div key={index}>
                            {item.type === 'text' ? (
                                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{item.value}</p>
                            ) : (
                                <div className="relative w-full h-96">
                                    {item?.image?.map((img, index) => (
                                        <Image
                                            key={index}
                                            src={img.url || ""}
                                            alt={img.alt!}
                                            fill
                                            className="object-cover rounded-lg"
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                {/* Sidebar */}
                <div className="lg:w-1/3 space-y-6">
                    <h2 className="text-2xl font-bold mb-4 text-blue-600 clim">Tin Bài Mới Nhất</h2>
                    {/* {newsData.map((news) => (
                        <SidebarNews key={news.id} {...news} />
                    ))} */}
                </div>
            </div>
        </div>
    );
}