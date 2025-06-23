import React, { useState, useEffect } from 'react';
import { RotateCcw, Trophy, Users } from 'lucide-react';

type Player = 'X' | 'O' | null;

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
  const [winner, setWinner] = useState<Player | 'tie' | null>(null);
  const [winningLine, setWinningLine] = useState<number[]>([]);
  const [scores, setScores] = useState({ X: 0, O: 0, ties: 0 });

  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ];

  useEffect(() => {
    checkWinner();
  }, [board]);

  const checkWinner = () => {
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        setWinningLine(combination);
        setScores(prev => ({ ...prev, [board[a]!]: prev[board[a]!] + 1 }));
        return;
      }
    }

    if (board.every(cell => cell !== null)) {
      setWinner('tie');
      setScores(prev => ({ ...prev, ties: prev.ties + 1 }));
    }
  };

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
    setWinningLine([]);
  };

  const resetScores = () => {
    setScores({ X: 0, O: 0, ties: 0 });
  };

  const getCellClass = (index: number) => {
    let classes = "w-20 h-20 bg-slate-700 border-2 border-slate-600 rounded-lg flex items-center justify-center text-3xl font-bold cursor-pointer transition-all duration-300 hover:bg-slate-600 hover:scale-105";
    
    if (board[index] === 'X') {
      classes += " text-blue-400";
    } else if (board[index] === 'O') {
      classes += " text-red-400";
    }
    
    if (winningLine.includes(index)) {
      classes += " bg-green-600/30 border-green-400 animate-pulse";
    }
    
    if (winner || board[index]) {
      classes = classes.replace("cursor-pointer hover:bg-slate-600 hover:scale-105", "cursor-not-allowed");
    }
    
    return classes;
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-slate-800 rounded-xl">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold gradient-text mb-4">Tic Tac Toe</h2>
        
        {/* Score Board */}
        <div className="glass rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-2">
              <Users size={16} />
              <span>Scores</span>
            </div>
            <button 
              onClick={resetScores}
              className="text-xs text-gray-400 hover:text-white transition-colors duration-300"
            >
              Reset
            </button>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-blue-400">X: {scores.X}</span>
            <span className="text-gray-400">Ties: {scores.ties}</span>
            <span className="text-red-400">O: {scores.O}</span>
          </div>
        </div>

        {/* Game Status */}
        <div className="mb-4">
          {winner ? (
            <div className="flex items-center justify-center space-x-2">
              <Trophy className="text-yellow-400" size={20} />
              <span className="text-lg font-semibold">
                {winner === 'tie' ? "It's a tie!" : `Player ${winner} wins!`}
              </span>
            </div>
          ) : (
            <div className="text-lg">
              Current Player: <span className={`font-bold ${currentPlayer === 'X' ? 'text-blue-400' : 'text-red-400'}`}>
                {currentPlayer}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Game Board */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {board.map((cell, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={getCellClass(index)}
          >
            {cell}
          </button>
        ))}
      </div>

      {/* Reset Button */}
      <button
        onClick={resetGame}
        className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover-lift"
      >
        <RotateCcw size={20} />
        <span>New Game</span>
      </button>

      {/* Game Info */}
      <div className="mt-4 text-center text-sm text-gray-400">
        <p>Click on any empty cell to make your move!</p>
        <p className="mt-1">
          <span className="text-blue-400">X</span> vs <span className="text-red-400">O</span>
        </p>
      </div>
    </div>
  );
};

export default TicTacToe;