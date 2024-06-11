import { useState, useEffect } from 'react';
import { useBoards } from '../hooks/useBoards';
import BoardList from './BoardList';
import { createBoard, deleteBoard, getBoards } from '../services/trelloService';

const Dashboard: React.FC = () => {
  const { boards, loading, error, refetch } = useBoards(); // Added refetch
  const [newBoardName, setNewBoardName] = useState('');

  const handleCreateBoard = async () => {
    if (newBoardName) {
      await createBoard(newBoardName);
      setNewBoardName(''); // Clear input after creation
      refetch(); // Refresh boards
    }
  };

  const handleDeleteBoard = async (id: string) => {
    await deleteBoard(id);
    refetch(); // Refresh boards
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="dashboard">
      <h1>Your Boards</h1>
      <input
        type="text"
        value={newBoardName}
        onChange={e => setNewBoardName(e.target.value)}
        placeholder="New board name"
      />
      <button onClick={handleCreateBoard}>Create Board</button>
      <BoardList boards={boards} onDelete={handleDeleteBoard} />
    </div>
  );
};

export default Dashboard;
