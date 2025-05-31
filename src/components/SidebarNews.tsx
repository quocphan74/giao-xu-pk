import Link from "next/link";
import Image from 'next/image';
import { formatDate, getFirstImageUrl } from "@/utils/common";
import { CardProps } from "@/types/cardProps";

const SidebarNews: React.FC<CardProps> = ({ id, title, date, text, image, linkPath }) => {
    const firstImage = getFirstImageUrl(image);
    return (
        <div className="flex mb-4 rounded-lg shadow-sm hover:shadow-md transition-shadow p-2 items-center">
            <div className="w-1/4 pr-2">
              {firstImage && firstImage.url && (
                    <Image
                        src={firstImage.url!}
                        width={500}
                        height={200}
                        alt={firstImage.alt!}
                        className="w-full sm:w-40 object-cover"
                        loading="lazy"
                    />
                )}
            </div>
            <div className="w-3/4">
                <Link href={`${linkPath}/${id}`}>
                    <h3 className="text-blue-600 hover:underline font-bold line-clamp-1">{title}</h3>
                </Link>
                <p className="text-gray-500 text-xs line-clamp-2">{text}</p>
                <p className="text-gray-500 text-xs line-clamp-2 hidden">{formatDate(date)}</p>
            </div>
        </div>
    );
};
export default SidebarNews;