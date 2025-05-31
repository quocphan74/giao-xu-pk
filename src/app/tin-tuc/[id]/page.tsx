import Image from 'next/image';
import { formatDate } from "@/utils/common";
import { News } from "@/types/news";
import ItemsNews from "@/components/SidebarNewsClient";

type Props = {
  params: { id: string };
};
// Know in advance which parameter ids need to be built into the static page
export async function generateStaticParams() {
  const res = await fetch(`${process.env.API_URL}/api/news?page=1&limit=50`);
  const data = await res.json();

  return data.data.map((news: News) => ({
    id: news.id.toString(),
  }));
}

// Fetch data right in server component, use revalidate for ISR
async function getNews(id: string): Promise<News | null> {
  const res = await fetch(`${process.env.API_URL}/api/news/${id}`, {
    next: { revalidate: 60 }, // revalidate after 60 seconds
  });

  if (!res.ok) return null;
  const data = await res.json();
  return data.data;
}



export default async function NewsDetail({ params }: Props) {
  const itemNews = await getNews(params.id);
  return (
    <div className="container mx-auto p-4 flex-1">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md lg:w-2/3 space-y-6">
          {!itemNews ? (
            <div className="text-center py-10">Không tìm thấy dữ liệu.</div>
          ) : (
            <>
              <h1 className="text-3xl font-bold text-red-500 mb-4">{itemNews.title}</h1>
              <p className="text-gray-500 text-sm mb-6">
                {itemNews.created_at ? formatDate(itemNews.created_at.toString()) : 'No date'}
              </p>
              {itemNews.news_blocks
                ?.slice()
                .sort((a, b) => a.order - b.order)
                .map((block, index) => (
                  <div key={index}>
                    {block?.title && (
                      <h1 className="text-xl font-bold text-gray-700 mb-2">{block.title}</h1>
                    )}
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{block.content}</p>
                    <div className="relative w-full h-96">
                      {block.news_block_images
                        ?.slice()
                        .sort((a, b) => a.order - b.order)
                        .map((item, index) => (
                          <Image
                            key={index}
                            src={item.image?.url || ""}
                            alt={item.image?.alt || "Not Alt"}
                            fill
                            className="object-cover rounded-lg"
                          />
                        ))}
                    </div>
                  </div>
                ))}
            </>
          )}
        </div>
        {/* Sidebar */}
        <ItemsNews />
      </div>
    </div>
  );

}