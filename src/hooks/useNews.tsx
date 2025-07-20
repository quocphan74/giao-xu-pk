

import { News } from '@/types/news';
import { CardProps } from '@/types/cardProps';
import { SEEALLTEXT } from '@/constants/constants';
import usePaginatedData from './useFetchResult';

export default function useNews(page: number, limit = 3) {
  const mapNews = (item: News): CardProps => ({
    id: item.id,
    title: item.title || '',
    date: item.created_at ? new Date(item.created_at).toLocaleDateString('vi-VN') : '',
    text: item.news_blocks?.[0]?.content || '',
    image: item.news_blocks?.[0]?.news_block_images
            ?.map(img => img.image)
            .filter((img) => !!img),
        linkPath: SEEALLTEXT.NEWS.url
  });

  return usePaginatedData<News, CardProps>('/api/news', mapNews, page, limit);
}