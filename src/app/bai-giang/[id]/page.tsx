
import Image from 'next/image';
import { Sermon } from "@/types/sermon";
import { formatDate } from "@/utils/common";
import SidebarSermonClient from "@/components/SidebarSermonClient";

type Props = {
    params: { id: string };
};
// Know in advance which parameter ids need to be built into the static page
export async function generateStaticParams() {
    const res = await fetch(`${process.env.API_URL}/api/sermon?page=1&limit=50`);
    const data = await res.json();

    return data.data.map((sermon: Sermon) => ({
        id: sermon.id.toString(),
    }));
}

// Fetch data right in server component, use revalidate for ISR
async function getSermon(id: string): Promise<Sermon | null> {
    const res = await fetch(`${process.env.API_URL}/api/sermon/${id}`, {
        next: { revalidate: 60 }, // revalidate after 60 seconds
    });

    if (!res.ok) return null;
    const data = await res.json();
    return data.data;
}

export default async function SermonDetail({ params }: Props) {
    const itemSermon = await getSermon(params.id);
    return (
        <div className="container mx-auto p-4 flex-1">
            {/* Main Content */}
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Left Section (Main Article) */}
                <div className="bg-white p-6 rounded-lg shadow-md lg:w-2/3  space-y-6">
                    {!itemSermon ? (
                        <div className="text-center py-10">Không tìm thấy dữ liệu.</div>
                    ) : (
                        <>
                            <h2 className="text-2xl font-bold mb-4">
                                {itemSermon.title}
                            </h2>
                            <p className="text-gray-500 text-sm mb-6">
                                {itemSermon.created_at ? formatDate(itemSermon.created_at.toString()) : 'No date'}
                            </p>
                            {itemSermon.sermon_blocks
                                ?.slice()
                                .sort((a, b) => a.order - b.order)
                                .map((block, index) => (
                                    <div key={index}>
                                        {block?.title && (
                                            <h1 className="text-xl font-bold text-gray-700 mb-2">{block.title}</h1>
                                        )}
                                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">{block.content}</p>
                                        <div className="relative w-full h-96">
                                            {block.sermon_block_images
                                                ?.slice()
                                                .sort((a, b) => a.order - b.order)
                                                .map((item, index) => (
                                                    <Image
                                                        key={index}
                                                        src={item.image?.url || ""}
                                                        alt={item.image?.alt || "Not Alt"}
                                                        fill
                                                        className="object-cover rounded-lg"
                                                        loading="lazy"
                                                    />
                                                ))}
                                        </div>
                                    </div>
                                ))}

                            <p className="text-gray-500 italic">
                                {itemSermon.preacher_name}
                            </p>
                        </>
                    )}
                </div>
                {/* Right Sidebar */}
                <SidebarSermonClient />
            </div>
        </div>
    );
}