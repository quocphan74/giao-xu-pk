import { News } from "@/data/data";
import Link from "next/link";
import Image from 'next/image';

const SidebarNews: React.FC<News> = ({ id, title, date, content }) => {
    const firstText = content.find(item => item.type === 'text')?.value || '';
    const firstImage = content.find(item => item.type === 'image');
    return (
        <div className="flex mb-4 rounded-lg shadow-sm hover:shadow-md transition-shadow p-2 items-center">
            <div className="w-1/4 pr-2">
                {firstImage && (
                            <Image
                                src={firstImage.src!}
                                width={500}
                                height={200}
                                alt={firstImage.alt || title}
                                className="w-full sm:w-40 object-cover"
                                loading="lazy"
                            />
                    )}
            </div>
            <div className="w-3/4">
                <Link href={`/tin-tuc/${id}`}>
                    <h3 className="text-blue-600 hover:underline font-medium text-xs line-clamp-1">{title}</h3>
                </Link>
                <p className="text-gray-500 text-xs line-clamp-2">{firstText}</p>
            </div>
        </div>
    );
};
export default SidebarNews;