import '../index.css';

import React, { useState } from 'react';

import { Board } from './Board';
import { Moves } from './Moves';
import { findWinner } from '../domain/findWinner';

export const Game : React.FC = () => {
  const [history, setHistory] = useState(
    [{
      squares: Array(9).fill(null),
      location: {
        col: 0,
        row: 0
      }
    }]
  );

  const [stepNumber, setStepNumber] = useState<number>(0);
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [toggle, setToggle] = useState<boolean>(true);

  const handleClick = (i: number) => {
    const _history = history.slice(0, stepNumber + 1);
    const current = _history[_history.length - 1];
    const squares = current.squares.slice();

    if (findWinner(squares) || squares[i]) {
      return;
    };

    squares[i] = xIsNext ? 'X' : 'O';
    setHistory(_history.concat([
      {
        squares: squares,
        location: {
          col: i % 3 + 1,
          row: Math.trunc(i / 3 + 1),
        }
      }
    ]));
    setStepNumber(_history.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const current = history[stepNumber];
  const winner:(string|null) = findWinner(current.squares);

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
        <div>
          <button onClick={() => {setToggle(!toggle)}}>
            {toggle ? 'Sort descending' : 'Sort ascending'}
          </button>
        </div>
        {
          toggle ?
          <ol>
            <Moves
              history={history}
              jumpTo={jumpTo}
              currentNumber={stepNumber}
            />
          </ol> :
          <ol reversed>
            <Moves
              history={history.reverse()}
              jumpTo={jumpTo}
              currentNumber={stepNumber}
            />
          </ol>
        }
      </div>
    </div>
  );
};
