
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Face Recognition Attendance System",
      description: "An automated attendance tracking system using facial recognition technology. Built with Python and OpenCV for accurate face detection and recognition.",
      image: "/lovable-uploads/dcce6648-ce8e-46af-85a0-18d4b17d6feb.png",
      tags: ["Python", "OpenCV", "Machine Learning"]
    },
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
  ];

  return (
    <section id="projects" className="py-20" style={{ background: 'linear-gradient(135deg, #F2FCE2 0%, #E5DEFF 100%)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-16">
          <div className="space-y-6 text-center">
            <span className="inline-block text-sm font-medium bg-[#0EA5E9]/10 px-4 py-2 rounded-full text-[#0EA5E9]">
              Projects
            </span>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] bg-clip-text text-transparent">
              Featured Work
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1"
              >
                <div className="aspect-video bg-[#F8F9FC] rounded-xl mb-6 overflow-hidden">
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#1a1a1a]">{project.title}</h3>
                  <p className="text-[#666666] leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[#0EA5E9]/10 text-[#0EA5E9] rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
