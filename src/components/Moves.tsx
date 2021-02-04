import '../index.css';

import {History} from '../domain/type';
import React from 'react';

type Props = {
  history: History[];
  jumpTo: (move: number) => void;
}

export const Moves : React.FC<Props> = (props) => {
  const {history,jumpTo} = props;
  return (
    <ol>
    {history.map((step, move) => {
      const desc = move ? `Go to move #${move}.` : 'Go to game start';
      const location = move ? `(${step.location.col}, ${step.location.row})` : '';
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{desc} {location}</button>
        </li>
      );
    })}
  </ol>
  );
}
