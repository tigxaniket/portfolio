
import { useState, useEffect } from 'react';
import { toast } from 'sonner';

type SquareValue = 'X' | 'O' | null;

const TicTacToe = () => {
  const [board, setBoard] = useState<SquareValue[]>(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);

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

  const getAvailableMoves = (squares: SquareValue[]): number[] => {
    return squares.map((square, index) => square === null ? index : -1).filter(index => index !== -1);
  };

  const makeComputerMove = (squares: SquareValue[]): number => {
    const availableMoves = getAvailableMoves(squares);
    if (availableMoves.length === 0) return -1;
    
    // Try to win
    for (const move of availableMoves) {
      const boardCopy = [...squares];
      boardCopy[move] = 'O';
      if (calculateWinner(boardCopy) === 'O') {
        return move;
      }
    }

    // Block player's winning move
    for (const move of availableMoves) {
      const boardCopy = [...squares];
      boardCopy[move] = 'X';
      if (calculateWinner(boardCopy) === 'X') {
        return move;
      }
    }

    // Take center if available
    if (squares[4] === null) return 4;

    // Take a random move
    const randomIndex = Math.floor(Math.random() * availableMoves.length);
    return availableMoves[randomIndex];
  };

  const handlePlayerMove = (i: number) => {
    if (!isPlayerTurn || board[i] || calculateWinner(board)) return;
    
    const newBoard = [...board];
    newBoard[i] = 'X';
    setBoard(newBoard);
    setIsPlayerTurn(false);
  };

  useEffect(() => {
    if (!isPlayerTurn && !calculateWinner(board) && board.includes(null)) {
      // Add a small delay to make the computer's move feel more natural
      const timeoutId = setTimeout(() => {
        const computerMove = makeComputerMove(board);
        if (computerMove !== -1) {
          const newBoard = [...board];
          newBoard[computerMove] = 'O';
          setBoard(newBoard);
          
          const winner = calculateWinner(newBoard);
          if (winner) {
            toast(winner === 'X' ? 'You win!' : 'Computer wins!');
          } else if (!newBoard.includes(null)) {
            toast("It's a draw!");
          }
        }
        setIsPlayerTurn(true);
      }, 500);

      return () => clearTimeout(timeoutId);
    }
  }, [board, isPlayerTurn]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
  };

  const renderSquare = (i: number) => (
    <button
      className="w-10 h-10 bg-[#333333] border border-[#E50914]/20 rounded-md text-lg font-bold flex items-center justify-center transition-all hover:bg-[#E50914]/20"
      onClick={() => handlePlayerMove(i)}
    >
      <span className={board[i] === 'X' ? 'text-[#E50914]' : 'text-white'}>
        {board[i]}
      </span>
    </button>
  );

  const winner = calculateWinner(board);
  const status = winner
    ? winner === 'X' ? 'You win!' : 'Computer wins!'
    : board.every(Boolean)
    ? "It's a draw!"
    : isPlayerTurn ? 'Your turn (X)' : 'Computer thinking...';

  return (
    <div className="flex flex-col items-center gap-2 p-4 glass-card rounded-xl">
      <h3 className="text-sm font-semibold text-white/90">{status}</h3>
      <div className="grid grid-cols-3 gap-1">
        {Array(9).fill(null).map((_, i) => (
          <div key={i}>{renderSquare(i)}</div>
        ))}
      </div>
      <button
        onClick={resetGame}
        className="mt-2 px-4 py-1 netflix-button rounded text-sm"
      >
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;
