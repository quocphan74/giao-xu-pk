import { use } from "react";
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { sermonsData } from '../../../data/data';
import SidebarSermon from "@/components/SidebarSermon";
export default function SermonDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const numericId = parseInt(id);
    if (!id) {
        notFound();
    }
    const data = sermonsData.find(item => item.id === numericId)
    return (
        <div className="container mx-auto p-4 flex-1">
            {/* Main Content */}
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Left Section (Main Article) */}
                <main className="lg:w-3/4 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">
                        {data?.title}
                    </h2>
                    <p className="text-gray-700 mb-4">
                        {data?.description}
                    </p>

                    {/* Image Section */}
                    <div className="my-4 flex items-center justify-center w-full">
                        <Image
                            src={data?.image.url ?? ""}
                            alt={data?.image.alt_text ?? ""}
                            width={600}
                            height={400}
                            className="rounded-lg"
                        />
                    </div>
                    {data?.sections.map((article, index) => (
                        <section key={index} className="mb-6">
                            <h3 className="text-xl font-semibold mb-2 flex items-center">
                                {article.section_order} {article.title}
                            </h3>
                            <p className="text-gray-700">
                                {article.content}
                            </p>
                            {article.image && (
                                <div key={article.article_id} className="my-4 flex items-center justify-center w-full">
                                    <Image
                                        src={article.image.url ?? ""}
                                        alt={article.image.alt_text ?? ""}
                                        width={600}
                                        height={400}
                                        className="rounded-lg"
                                    />
                                </div>
                            )}
                        </section>
                    ))}

                    <p className="text-gray-500 italic">
                        {data?.author.name}
                    </p>
                </main>

                {/* Right Sidebar */}
                <div className="space-y-2">
                    <h3 className="text-lg font-semibold">BÀI GIẢNG GẦN ĐÂY</h3>
                    {sermonsData.map((items) => (
                        <SidebarSermon key={items.id} {...items} />
                    ))}
                </div>
            </div>
        </div>
    );
}