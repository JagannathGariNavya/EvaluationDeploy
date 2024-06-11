import { useState, useEffect } from 'react';
import { getLists } from '../services/trelloService';
import { List } from '../types/trello';

export const useLists = (boardId: string) => {
  const [lists, setLists] = useState<List[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const data = await getLists(boardId);
        setLists(data);
      } catch (err) {
        setError('Failed to fetch lists');
      } finally {
        setLoading(false);
      }
    };

    fetchLists();
  }, [boardId]);

  return { lists, loading, error };
};
