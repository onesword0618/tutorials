import '../index.css';

import React from 'react';
import { Square } from '../components/Square';

type Props = {
  onClick:(i:number) => void,
  squares:('X' | 'O'| null)[]
}

export const Board : React.FC<Props> = (props) => {
  const {onClick,squares} = props;
  function renderSquare(i:number) {
    return (
      <Square
        onClick={() => onClick(i)}
        value={squares[i]}
      />
    );
  }
    return (
      <div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    );
}
