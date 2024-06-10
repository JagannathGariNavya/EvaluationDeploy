import { useState, useEffect, useCallback } from 'react';
import { getBoards } from '../services/trelloService';
import { Board } from '../types/trello';

export const useBoards = () => {
  const [boards, setBoards] = useState<Board[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBoards = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getBoards();
      setBoards(data);
    } catch (err) {
      setError('Failed to fetch boards');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBoards();
  }, [fetchBoards]);

  return { boards, loading, error, refetch: fetchBoards };
};
