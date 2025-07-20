import { useEffect, useState } from 'react';
import { CardProps } from '@/types/cardProps';

interface FetchResult<T> {
  data: T[];
  totalPages: number;
  loading: boolean;
  error: string | null;
}

export default function usePaginatedData<T, U>(
  endpoint: string,
  mapToOutput: (item: T) => U,
  page: number,
  limit = 5
): FetchResult<U> {
  const [data, setData] = useState<U[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch(`${endpoint}?page=${page}&limit=${limit}`, {
          signal,
          cache: 'force-cache',
        });
        
        
        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
        const response = await res.json();
        
        const mappedData = response.data.map(mapToOutput);
        setData(mappedData);
        setTotalPages(response.totalPages);
        setError(null);
      } catch (err: any) {
        if (err.name === 'AbortError') return;
        setError(err.message || `Failed to fetch data from ${endpoint}`);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
    return () => controller.abort();
  }, [endpoint, page, limit]);

  return { data, totalPages, loading, error };
}