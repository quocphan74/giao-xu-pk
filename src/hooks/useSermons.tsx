
import { useEffect, useState } from 'react';
import { Sermon } from '@/types/sermon';

export default function useSermons(page: number, limit = 10) {
    const [sermons, setSermons] = useState<Sermon[]>([]);
    const [sermonsTotalPages, setSermonsTotalPages] = useState(1);
    const [sermonLoading, setSermonLoading] = useState(true);
    const [sermonError, setSermonError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        async function fetchSermons() {
            setSermonLoading(true);
            try {
                const res = await fetch(`/api/sermon?page=${page}&limit=${limit}`,{signal, cache: 'force-cache'});
                if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
                const data = await res.json();
                setSermons(data.data);
                setSermonsTotalPages(data.totalPages);
                setSermonError(null);
            } catch (err: any) {
                 if (err.name === 'AbortError') return; // Bỏ qua AbortError
                setSermonError(err.message || 'Failed to fetch news');
            } finally {
                setSermonLoading(false);
            }
        }

        fetchSermons();
        return () => controller.abort();
    }, [page, limit]);

    return { sermons, sermonsTotalPages, sermonLoading, sermonError };
}
