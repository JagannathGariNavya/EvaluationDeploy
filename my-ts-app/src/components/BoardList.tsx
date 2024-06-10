import React from 'react';
import BoardCard from './Board';
import { Board } from '../types/trello';

interface BoardListProps {
  boards: Board[];
  onDelete: (id: string) => void;
}

const BoardList: React.FC<BoardListProps> = ({ boards, onDelete }) => {
  return (
    <div className="board-list">
      {boards.map(board => (
        <BoardCard key={board.id} board={board} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default BoardList;
