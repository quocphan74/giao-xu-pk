
import { Sermon } from '@/types/sermon';
import { CardProps } from '@/types/cardProps';
import { SEEALLTEXT } from '@/constants/constants';
import usePaginatedData from './useFetchResult';

export default function useSermons(page: number, limit = 3) {
        const mappedSermons = (item: Sermon): CardProps => ({
          id: Number(item.id),
          title: item.title || "",
          date: item.created_at ? item.created_at.toString() : "",
          text: item.sermon_blocks?.[0]?.content || "",
          image: item.sermon_blocks?.[0]?.sermon_block_images
            ?.map(img => img.image)
            .filter((img) => !!img),
          linkPath: SEEALLTEXT.SERMON.url
        });

  return usePaginatedData<Sermon, CardProps>('/api/sermon', mappedSermons, page, limit);
}