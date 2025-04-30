import { use } from "react";
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { newsData} from '../../../data/data';
export default function NewsDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const numericId = parseInt(id);
  if (!id) {
    notFound();
  }
  const data = newsData.find(item => item.id === numericId)
  return (
    <div className="container mx-auto p-4 flex-1">
      {/* Tiêu đề */}
      <h1 className="text-3xl font-bold text-red-500 mb-4">{data?.title}</h1>

      {/* Thời gian */}
      <p className="text-gray-500 text-sm mb-6">{data?.date}</p>
      {/* Nội dung bài viết */}
      <div className="space-y-6">
        {data?.content.map((item, index) => (
          <div key={index}>
            {item.type === 'text' ? (
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{item.value}</p>
            ) : (
              <div className="relative w-full h-96">
                <Image
                  src={item.src!}
                  alt={item.alt!}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}