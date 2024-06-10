import React from 'react';
import { Board } from '../types/trello';

interface BoardCardProps {
  board: Board;
  onDelete: (id: string) => void;
}

const BoardCard: React.FC<BoardCardProps> = ({ board, onDelete }) => {
  return (
    <div className="board-card">
      <h3>{board.name}</h3>
      <p>Created on: {new Date(board.dateLastActivity).toLocaleDateString()}</p>
      <button onClick={() => onDelete(board.id)}>Delete</button>
    </div>
  );
};

export default BoardCard;
