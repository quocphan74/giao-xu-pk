
import { CardProps } from "@/types/cardProps";
import { formatDate } from "@/utils/common";
import Link from "next/link";

const SidebarSermon: React.FC<CardProps> = ({ id, title, date, text, image, linkPath }) => {
    return (
        <aside className="bg-white p-6 rounded-lg shadow-md mb-2">
            <ul className="space-y-4">
                <li key={id}>
                    <Link href={`/bai-giang/${id}`} className="text-blue-600 hover:underline">
                        {title}
                    </Link>
                    <p className="text-sm text-gray-500">{formatDate(date)}</p>
                </li>
            </ul>
        </aside>
    );
};
export default SidebarSermon;