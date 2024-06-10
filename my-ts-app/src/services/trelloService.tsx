import axios from 'axios';
import { Board, List, Card } from '../types/trello';

const API_KEY = '16c25d0696c3ab252b1ac4071b0785ca';  
const TOKEN = 'ATTAb636c6ba5e908695e2dc1315d30600d6890fca53c917b10aeb8c688bc172a07728E91D7D';

const trelloApi = axios.create({
  baseURL: 'https://api.trello.com/1/',
  params: {
    key: API_KEY,
    token: TOKEN,
  },
});

export const getBoards = async (): Promise<Board[]> => {
  const response = await trelloApi.get('/members/me/boards');
  return response.data;
};

export const getLists = async (boardId: string): Promise<List[]> => {
  const response = await trelloApi.get(`/boards/${boardId}/lists`);
  return response.data;
};

export const getCards = async (listId: string): Promise<Card[]> => {
  const response = await trelloApi.get(`/lists/${listId}/cards`);
  return response.data;
};

export const createBoard = async (name: string): Promise<Board> => {
  const response = await trelloApi.post('/boards/', { name });
  return response.data;
};

export const updateBoard = async (id: string, updates: Partial<Board>): Promise<Board> => {
  const response = await trelloApi.put(`/boards/${id}`, updates);
  return response.data;
};

export const deleteBoard = async (id: string): Promise<void> => {
  await trelloApi.delete(`/boards/${id}`);
};

export const createList = async (boardId: string, name: string): Promise<List> => {
  const response = await trelloApi.post(`/boards/${boardId}/lists`, { name });
  return response.data;
};

export const updateList = async (id: string, updates: Partial<List>): Promise<List> => {
  const response = await trelloApi.put(`/lists/${id}`, updates);
  return response.data;
};

export const deleteList = async (id: string): Promise<void> => {
  await trelloApi.delete(`/lists/${id}`);
};

export const createCard = async (listId: string, name: string): Promise<Card> => {
  const response = await trelloApi.post(`/lists/${listId}/cards`, { name });
  return response.data;
};

export const updateCard = async (id: string, updates: Partial<Card>): Promise<Card> => {
  const response = await trelloApi.put(`/cards/${id}`, updates);
  return response.data;
};

export const deleteCard = async (id: string): Promise<void> => {
  await trelloApi.delete(`/cards/${id}`);
};
