
import { useState } from 'react';
import { toast } from 'sonner';

type SquareValue = 'X' | 'O' | null;

const TicTacToe = () => {
  const [board, setBoard] = useState<SquareValue[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const calculateWinner = (squares: SquareValue[]): SquareValue => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (i: number) => {
    if (board[i] || calculateWinner(board)) return;
    
    const newBoard = board.slice();
    newBoard[i] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const winner = calculateWinner(newBoard);
    if (winner) {
      toast(`Player ${winner} wins!`);
    } else if (!newBoard.includes(null)) {
      toast("It's a draw!");
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const renderSquare = (i: number) => (
    <button
      className="w-16 h-16 bg-[#333333] border border-[#E50914]/20 rounded-lg text-2xl font-bold flex items-center justify-center transition-all hover:bg-[#E50914]/20"
      onClick={() => handleClick(i)}
    >
      <span className={board[i] === 'X' ? 'text-[#E50914]' : 'text-white'}>
        {board[i]}
      </span>
    </button>
  );

  const winner = calculateWinner(board);
  const status = winner
    ? `Winner: ${winner}`
    : board.every(Boolean)
    ? "It's a draw!"
    : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="flex flex-col items-center gap-4 p-8 glass-card rounded-xl">
      <h3 className="text-xl font-semibold text-white/90">{status}</h3>
      <div className="grid grid-cols-3 gap-2">
        {Array(9).fill(null).map((_, i) => (
          <div key={i}>{renderSquare(i)}</div>
        ))}
      </div>
      <button
        onClick={resetGame}
        className="mt-4 px-6 py-2 netflix-button rounded-lg transition-all text-lg"
      >
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;
