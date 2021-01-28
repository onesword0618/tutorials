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
    {history.map((_, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{desc}</button>
        </li>
      );
    })}
  </ol>
  );
}
