
import { useEffect, useState } from 'react';
import { MassSchedule } from '@/types/massSchedule';

export default function useMassSchedules(page: number, limit = 3) {
    const [massSchedules, setMassSchedules] = useState<MassSchedule[]>([]);
    const [massSchedulesTotalPages, setTotalPages] = useState(1);
    const [massSchedulesLoading, setLoading] = useState(true);
    const [massSchedulesError, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        async function fetchMassSchedules() {
            setLoading(true);
            try {
                const res = await fetch(`/api/mass_schedules?page=${page}&limit=${limit}`,
                    {
                        signal,
                        cache: 'force-cache',
                    }
                );
                if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
                const data = await res.json();
                setMassSchedules(data.data);
                setTotalPages(data.totalPages);
                setError(null);
            } catch (err: any) {
                if (err.name === 'AbortError') return;
                setError(err.message || 'Failed to fetch mass schedules');
            } finally {
                setLoading(false);
            }
        }
        fetchMassSchedules();
        return () => controller.abort();
    }, [page, limit]);

    return { massSchedules, massSchedulesTotalPages, massSchedulesLoading, massSchedulesError };
}
