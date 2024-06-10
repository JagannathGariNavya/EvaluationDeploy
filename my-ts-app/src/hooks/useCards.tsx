import { useState, useEffect } from 'react';
import { getCards } from '../services/trelloService';
import { Card } from '../types/trello';

export const useCards = (listId: string) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const data = await getCards(listId);
        setCards(data);
      } catch (err) {
        setError('Failed to fetch cards');
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, [listId]);

  return { cards, loading, error };
};
