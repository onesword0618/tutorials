import '../index.css';

import React, { useState } from 'react';
import { findWinner } from '../domain/findWinner';
import { Board } from './Board';

export const Game : React.FC = () => {
  const [history, setHistory] = useState(
    [{ squares: Array(9).fill(null) }]
  );

  const [stepNumber, setStepNumber] = useState<number>(0);
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const handleClick = (i: number) => {
    const _history = history.slice(0, stepNumber + 1);
    const current = _history[_history.length - 1];
    const squares = current.squares.slice();

    if (findWinner(squares) || squares[i]) {
      return;
    };

    squares[i] = xIsNext ? 'X' : 'O';
    setHistory(_history.concat([{ squares: squares }]));
    setStepNumber(_history.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const current = history[stepNumber];
  const winner:(string|null) = findWinner(current.squares);

  const moves = history.map((_step, move) => {
    const desc = move ?
      'Go to move #' + move :
      'Go to game start';
    return (
      <li key={move}>
        <button
          onClick={() => jumpTo(move)}
        >
          {desc}
        </button>
      </li>
    );
  });

  let status:string;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={(i) => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};
