import { Sermon } from "@/data/data";
import Link from "next/link";

const SidebarSermon: React.FC<Sermon> = ({ id, title, date }) => {
    return (
        <aside className="bg-white p-6 rounded-lg shadow-md">
            <ul className="space-y-4">
                <li>
                    <Link href={`/bai-giang/${id}`} className="text-blue-600 hover:underline">
                        {title}
                    </Link>
                    <p className="text-sm text-gray-500">{date}</p>
                </li>
            </ul>
        </aside>
    );
};
export default SidebarSermon;