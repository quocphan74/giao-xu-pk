
import { useEffect, useState } from 'react';
import { News } from '@/types/news';

export default function useNews(page: number, limit = 10) {
    const [news, setNews] = useState<News[]>([]);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        async function fetchNews() {
            setLoading(true);
            try {
                const res = await fetch(`/api/news?page=${page}&limit=${limit}`,
                    {
                        signal,
                        cache: 'force-cache',
                    }
                );
                if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
                const data = await res.json();
                setNews(data.data);
                setTotalPages(data.totalPages);
                setError(null);
            } catch (err: any) {
                if (err.name === 'AbortError') return;
                setError(err.message || 'Failed to fetch news');
            } finally {
                setLoading(false);
            }
        }
        fetchNews();
        return () => controller.abort();
    }, [page, limit]);

    return { news, totalPages, loading, error };
}
